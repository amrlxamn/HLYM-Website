export async function syncDealerImage(
  dealer,
  { assetBucket, serviceRoleKey, supabaseUrl, assetCdnUrl = supabaseUrl }
) {
  if (!dealer.image || dealer.image.includes(".supabase.co/storage/")) {
    return dealer;
  }

  let response;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      response = await fetch(dealer.image, {
        headers: {
          "User-Agent": "HLYM asset migration"
        },
        signal: AbortSignal.timeout(30000)
      });
      break;
    } catch (error) {
      if (attempt === 3) {
        throw new Error(`Failed to download ${dealer.id} after ${attempt} attempts`, {
          cause: error
        });
      }
    }
  }

  if (!response) {
    throw new Error(`Failed to download ${dealer.id}`);
  }

  if (!response.ok) {
    throw new Error(`Failed to download ${dealer.id}: ${response.status}`);
  }

  const contentType = response.headers.get("content-type")?.split(";")[0] ?? "image/jpeg";
  const contentTypeExtension = contentType.split("/")[1]?.replace("jpeg", "jpg") ?? "jpg";
  const sourceExtension = new URL(dealer.image).pathname.split(".").pop()?.toLowerCase();
  const extension = sourceExtension?.match(/^(?:jpe?g|png|webp)$/)
    ? sourceExtension.replace("jpeg", "jpg")
    : contentTypeExtension;
  const storagePath = `hlym/dealers/${dealer.id}.${extension}`;
  const uploadResponse = await fetch(
    `${supabaseUrl}/storage/v1/object/${assetBucket}/${encodeURI(storagePath)}`,
    {
      body: await response.arrayBuffer(),
      headers: {
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "x-upsert": "true"
      },
      method: "POST"
    }
  );

  if (!uploadResponse.ok) {
    throw new Error(`Failed to upload ${dealer.id}: ${uploadResponse.status}`);
  }

  return {
    ...dealer,
    image: `${assetCdnUrl}/storage/v1/object/public/${assetBucket}/${storagePath}`
  };
}
