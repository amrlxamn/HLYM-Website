#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
WORKFLOW_FILE="$ROOT_DIR/docs/n8n/webflow-contact-to-crm.workflow.json"
WORKFLOW_ID="hlymContactCrm1"
ENV_FILE="${N8N_CONTACT_ENV_FILE:-$ROOT_DIR/docs/n8n/webflow-contact-to-crm.local.env}"
DATA_DIR="${N8N_CONTACT_DATA_DIR:-$ROOT_DIR/.n8n-contact}"
CONTAINER_NAME="${N8N_CONTACT_CONTAINER_NAME:-hlym-contact-n8n}"
N8N_PORT="${N8N_PORT:-5679}"
N8N_IMAGE="${N8N_IMAGE:-n8nio/n8n:latest}"

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required to run local n8n." >&2
  exit 1
fi

if [ ! -f "$WORKFLOW_FILE" ]; then
  echo "Missing workflow file: $WORKFLOW_FILE" >&2
  exit 1
fi

if [ ! -f "$ENV_FILE" ]; then
  cat >"$ENV_FILE" <<'ENV'
CRM_PROVIDER=gencode-crm
CRM_LEAD_ENDPOINT_URL=http://host.docker.internal:3000/rest/people
CRM_API_KEY=replace-with-scoped-gencode-crm-api-key
CRM_DEFAULT_SOURCE=webflow-contact-page
ENV
  echo "Created $ENV_FILE"
  echo "Edit CRM_LEAD_ENDPOINT_URL and CRM_API_KEY, then rerun this script." >&2
  exit 1
fi

if grep -q "replace-with-scoped" "$ENV_FILE"; then
  echo "Update CRM_API_KEY in $ENV_FILE before starting n8n." >&2
  exit 1
fi

mkdir -p "$DATA_DIR"

docker run --rm \
  --entrypoint sh \
  --user 0:0 \
  -v "$DATA_DIR:/home/node/.n8n" \
  "$N8N_IMAGE" \
  -c "chown -R node:node /home/node/.n8n && chmod -R u+rwX /home/node/.n8n" \
  >/dev/null

if docker ps -a --format '{{.Names}}' | grep -qx "$CONTAINER_NAME"; then
  docker rm -f "$CONTAINER_NAME" >/dev/null
fi

PORT_OWNER=$(docker ps --format '{{.Names}} {{.Ports}}' | grep "0.0.0.0:$N8N_PORT->" || true)

if [ -n "$PORT_OWNER" ]; then
  echo "Port $N8N_PORT is already used by another running container:" >&2
  echo "$PORT_OWNER" >&2
  echo "Stop the conflicting container or set N8N_PORT to an unused port." >&2
  exit 1
fi

docker run --rm \
  -i \
  --entrypoint sh \
  --env-file "$ENV_FILE" \
  -e N8N_DIAGNOSTICS_ENABLED=false \
  -e N8N_PERSONALIZATION_ENABLED=false \
  -e N8N_BLOCK_ENV_ACCESS_IN_NODE=false \
  -e N8N_SECURE_COOKIE=false \
  -e N8N_ONBOARDING_FLOW_DISABLED=true \
  -e WEBHOOK_URL="http://localhost:$N8N_PORT/" \
  -v "$DATA_DIR:/home/node/.n8n" \
  "$N8N_IMAGE" \
  -c "cat >/tmp/contact-workflow.json && \
    n8n import:workflow --input=/tmp/contact-workflow.json && \
    n8n publish:workflow --id=$WORKFLOW_ID" \
  <"$WORKFLOW_FILE" \
  >/dev/null

docker run --rm \
  -d \
  --name "$CONTAINER_NAME" \
  --env-file "$ENV_FILE" \
  -e N8N_DIAGNOSTICS_ENABLED=false \
  -e N8N_PERSONALIZATION_ENABLED=false \
  -e N8N_BLOCK_ENV_ACCESS_IN_NODE=false \
  -e N8N_SECURE_COOKIE=false \
  -e N8N_ONBOARDING_FLOW_DISABLED=true \
  -e WEBHOOK_URL="http://localhost:$N8N_PORT/" \
  -p "$N8N_PORT:5678" \
  -v "$DATA_DIR:/home/node/.n8n" \
  "$N8N_IMAGE" \
  >/dev/null

echo "n8n contact workflow is running at http://localhost:$N8N_PORT"
