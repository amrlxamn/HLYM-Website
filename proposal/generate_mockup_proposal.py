import os
import zipfile
from datetime import datetime, timezone
from pathlib import Path
from textwrap import wrap
from xml.sax.saxutils import escape


ROOT = Path("/Users/amirulamin/Documents/HLYM Website")
OUTPUT_DIR = ROOT / "deliverables"
OUTPUT_DIR.mkdir(exist_ok=True)

PPTX_PATH = OUTPUT_DIR / "hlym-website-mockup-proposal.pptx"
PDF_SOURCE_PATH = OUTPUT_DIR / "hlym-website-mockup-proposal.txt"
PDF_PATH = OUTPUT_DIR / "hlym-website-mockup-proposal.pdf"

SLIDES = [
  {
    "title": "HLYM Website Mockup Proposal",
    "subtitle": "Client review deck for the React + TypeScript + Vite mockup",
    "bullets": [
      "Purpose: present the current website mockup as a brand-led digital showroom concept.",
      "Audience: HLYM leadership, marketing, brand, and after-sales stakeholders.",
      "Source of truth: proposal is derived from the shipped codebase and live Vercel deployment.",
      "Primary value: stronger product discovery, clearer dealer pathways, and fresher content storytelling."
    ],
    "image": ROOT / "assets/slide-1.png",
    "kicker": "Mockup Proposal"
  },
  {
    "title": "Executive Summary",
    "subtitle": "What this mockup is designed to prove",
    "bullets": [
      "Reframe the HLYM homepage as a premium, campaign-ready brand experience.",
      "Give riders a faster path from inspiration to model comparison to dealer intent.",
      "Modernize the information hierarchy without adding platform-level complexity.",
      "Create a modular front-end foundation that can be extended into CMS, analytics, and dealer operations later."
    ],
    "kicker": "Summary"
  },
  {
    "title": "Business Goals And Target Users",
    "subtitle": "Product framing used for the proposal",
    "bullets": [
      "Business goals: improve product visibility, reinforce Yamaha brand equity, and drive dealer enquiries.",
      "Primary users: new riders exploring entry models, commuters comparing scooters, and enthusiasts researching big bikes.",
      "Secondary users: existing owners looking for after-sales info, news, campaigns, and network coverage.",
      "Success definition: higher model exploration, better dealer-locator usage, and stronger content engagement."
    ],
    "kicker": "Goals"
  },
  {
    "title": "Mockup Scope",
    "subtitle": "Sections implemented in the current coded experience",
    "bullets": [
      "Sticky dual-layer header with utility links, language switch, social entry points, and primary navigation.",
      "Hero carousel for flagship campaigns with pricing, performance stats, and call-to-action routing.",
      "Compare section with category filters for mopeds, automatics, street bikes, and big bikes.",
      "Featured editorial block, latest news hub, dealer locator, and structured footer."
    ],
    "image": ROOT / "assets/slide-2.png",
    "kicker": "Scope"
  },
  {
    "title": "Hero And Product Discovery",
    "subtitle": "How the mockup drives first-click engagement",
    "bullets": [
      "Hero content rotates between three flagship narratives with clear model-led storytelling.",
      "Calls to action route users toward compare or featured sections instead of dead-end banners.",
      "Compare catalog currently exposes five models with specs for engine, power, weight, and price.",
      "The interaction pattern is built to support future model expansion without redesigning the section."
    ],
    "image": ROOT / "assets/slide-3.png",
    "kicker": "Discovery"
  },
  {
    "title": "Featured Storytelling And Merchandising",
    "subtitle": "Editorial structure built into the mockup",
    "bullets": [
      "Featured module combines campaign storytelling with direct product framing for the MT-09.",
      "Editorial copy supports a more premium brand tone than a static brochure page.",
      "Category tiles and supporting cards create a path toward product family exploration.",
      "Merchandise and campaign placements are already reflected in the navigation and layout logic."
    ],
    "image": ROOT / "assets/slide-4.png",
    "kicker": "Editorial"
  },
  {
    "title": "News And Dealer Locator",
    "subtitle": "Trust-building content and conversion support",
    "bullets": [
      "News section packages featured stories, highlights, and updates in a scannable card system.",
      "Dealer locator uses Mapbox GL when tokenized, with a static branded fallback when mapping is unavailable.",
      "Current seeded network includes four dealer locations with focus, hours, and support tags.",
      "This gives the client a concrete picture of how brand content and network conversion can coexist."
    ],
    "image": ROOT / "assets/slide-5.png",
    "kicker": "Conversion"
  },
  {
    "title": "UX And Visual Direction",
    "subtitle": "What the mockup communicates from a client-review perspective",
    "bullets": [
      "Visual language favors high-contrast typography, oversized product headlines, and campaign-first motion.",
      "Navigation keeps Yamaha network, merchandise, news, and after-sales access visible without flattening the brand.",
      "Component splits in the codebase make each section easier to refine independently after client review.",
      "Responsive behavior is already considered across header, compare, cards, and dealer locator states."
    ],
    "kicker": "UX"
  },
  {
    "title": "Technical Build",
    "subtitle": "What has already been implemented under the mockup",
    "bullets": [
      "Front end: React 18, TypeScript, Vite, styled-components, and Framer Motion.",
      "Quality: lint, typecheck, tests, build, and security scan scripts are defined in the project.",
      "Integration-ready areas: Webflow code components, DevLink hooks, and Mapbox dealer stage.",
      "Hosting: Vercel production deployment is already active for stakeholder review."
    ],
    "kicker": "Implementation"
  },
  {
    "title": "Recommended Phase Plan",
    "subtitle": "How to turn the mockup into an approved client delivery",
    "bullets": [
      "Phase 1: visual refinement, stakeholder copy edits, and final information hierarchy approval.",
      "Phase 2: connect real inventory, dealer data, and managed content sources.",
      "Phase 3: add analytics, enquiry capture, campaign modules, and operational governance.",
      "This phased path keeps the site lean while allowing the client to scale functionality with evidence."
    ],
    "kicker": "Roadmap"
  },
  {
    "title": "Risks, Dependencies, And Decisions",
    "subtitle": "Items to resolve before production rollout",
    "bullets": [
      "Brand approvals: final product naming, copy tone, campaign assets, and CTA destinations.",
      "Data dependencies: production dealer data, real pricing, real news feed, and Mapbox token ownership.",
      "Governance: decide whether future content is managed in code, Webflow, or a hybrid workflow.",
      "Performance: large media should be compressed and curated before public launch."
    ],
    "kicker": "Dependencies"
  },
  {
    "title": "Proposed Success Metrics",
    "subtitle": "Recommended KPI framework for client alignment",
    "bullets": [
      "Product discovery: compare-section engagement rate and model detail click-through rate.",
      "Dealer intent: dealer-locator interactions, selected dealer views, and contact conversion actions.",
      "Content value: news-card clicks, featured-story dwell time, and repeat visits from campaigns.",
      "Experience quality: Lighthouse performance, mobile usability, and interaction completion without errors."
    ],
    "kicker": "KPIs"
  },
  {
    "title": "Next Step Recommendation",
    "subtitle": "What to present back to the client after this mockup review",
    "bullets": [
      "Approve the direction of the homepage storytelling and navigation model.",
      "Prioritize which sections move from mock content to production-connected content first.",
      "Decide the CMS and operational ownership model for news, campaigns, and dealer updates.",
      "Use this deck and the live Vercel build as the baseline for the next review workshop."
    ],
    "kicker": "Next Step"
  }
]

IMAGE_RELATIONS = []
IMAGE_PARTS = []
SEEN_IMAGES = {}
NOW = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def emu(inches: float) -> int:
  return int(inches * 914400)


def to_xml_paragraphs(lines: list[str], size: int, color: str, bold: bool) -> str:
  paragraphs = []
  for line in lines:
    paragraphs.append(
      "<a:p>"
      '<a:pPr algn="l"/>'
      "<a:r>"
      f'<a:rPr lang="en-US" sz="{size}"{" b=\"1\"" if bold else ""}>'
      f"<a:solidFill><a:srgbClr val=\"{color}\"/></a:solidFill>"
      "</a:rPr>"
      f"<a:t>{escape(line)}</a:t>"
      "</a:r>"
      f'<a:endParaRPr lang="en-US" sz="{size}"/>'
      "</a:p>"
    )
  return "".join(paragraphs)


def text_box(shape_id: int, name: str, x: float, y: float, w: float, h: float, lines: list[str], size: int, color: str, bold: bool, fill: str | None = None) -> str:
  fill_xml = "<a:noFill/>" if fill is None else f"<a:solidFill><a:srgbClr val=\"{fill}\"/></a:solidFill>"
  return (
    "<p:sp>"
    "<p:nvSpPr>"
    f"<p:cNvPr id=\"{shape_id}\" name=\"{escape(name)}\"/>"
    '<p:cNvSpPr txBox="1"/>'
    "<p:nvPr/>"
    "</p:nvSpPr>"
    "<p:spPr>"
    f"<a:xfrm><a:off x=\"{emu(x)}\" y=\"{emu(y)}\"/><a:ext cx=\"{emu(w)}\" cy=\"{emu(h)}\"/></a:xfrm>"
    f"{fill_xml}"
    "<a:prstGeom prst=\"rect\"><a:avLst/></a:prstGeom>"
    "</p:spPr>"
    "<p:txBody>"
    '<a:bodyPr wrap="square" rtlCol="0" anchor="t"/>'
    "<a:lstStyle/>"
    f"{to_xml_paragraphs(lines, size, color, bold)}"
    "</p:txBody>"
    "</p:sp>"
  )


def accent_bar(shape_id: int, x: float, y: float, w: float, h: float, color: str) -> str:
  return (
    "<p:sp>"
    "<p:nvSpPr>"
    f"<p:cNvPr id=\"{shape_id}\" name=\"Accent {shape_id}\"/>"
    "<p:cNvSpPr/>"
    "<p:nvPr/>"
    "</p:nvSpPr>"
    "<p:spPr>"
    f"<a:xfrm><a:off x=\"{emu(x)}\" y=\"{emu(y)}\"/><a:ext cx=\"{emu(w)}\" cy=\"{emu(h)}\"/></a:xfrm>"
    f"<a:solidFill><a:srgbClr val=\"{color}\"/></a:solidFill>"
    "<a:ln><a:noFill/></a:ln>"
    "<a:prstGeom prst=\"rect\"><a:avLst/></a:prstGeom>"
    "</p:spPr>"
    "<p:txBody><a:bodyPr/><a:lstStyle/><a:p/></p:txBody>"
    "</p:sp>"
  )


def picture(shape_id: int, rel_id: str, x: float, y: float, w: float, h: float, name: str) -> str:
  return (
    "<p:pic>"
    "<p:nvPicPr>"
    f"<p:cNvPr id=\"{shape_id}\" name=\"{escape(name)}\"/>"
    '<p:cNvPicPr><a:picLocks noChangeAspect="1"/></p:cNvPicPr>'
    "<p:nvPr/>"
    "</p:nvPicPr>"
    "<p:blipFill>"
    f"<a:blip r:embed=\"{rel_id}\"/>"
    "<a:stretch><a:fillRect/></a:stretch>"
    "</p:blipFill>"
    "<p:spPr>"
    f"<a:xfrm><a:off x=\"{emu(x)}\" y=\"{emu(y)}\"/><a:ext cx=\"{emu(w)}\" cy=\"{emu(h)}\"/></a:xfrm>"
    "<a:prstGeom prst=\"rect\"><a:avLst/></a:prstGeom>"
    "</p:spPr>"
    "</p:pic>"
  )


def pdf_escape(value: str) -> str:
  return value.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


for slide_index, slide in enumerate(SLIDES, start=1):
  rels = [
    (
      "rId1",
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout",
      "../slideLayouts/slideLayout1.xml"
    )
  ]
  shapes = [
    accent_bar(2, 0.0, 0.0, 13.333, 0.24, "EC1C24"),
    accent_bar(3, 0.62, 0.72, 0.08, 0.6, "EC1C24"),
    text_box(4, "Kicker", 0.82, 0.68, 2.5, 0.4, [slide["kicker"].upper()], 1200, "EC1C24", True),
    text_box(5, "Title", 0.82, 1.18, 6.1, 1.35, [slide["title"]], 2400, "111111", True),
    text_box(6, "Subtitle", 0.82, 2.34, 6.2, 0.7, [slide["subtitle"]], 1200, "555555", False),
    text_box(
      7,
      "Body",
      0.82,
      3.02,
      6.0,
      3.45,
      [f"- {bullet}" for bullet in slide["bullets"]],
      1120,
      "222222",
      False
    ),
    text_box(8, "Footer", 0.82, 7.05, 2.0, 0.3, [f"Slide {slide_index:02d}"], 900, "777777", False)
  ]

  if slide.get("image"):
    image_path = slide["image"]
    if image_path not in SEEN_IMAGES:
      ext = image_path.suffix.lower().lstrip(".")
      media_index = len(SEEN_IMAGES) + 1
      target = f"../media/image{media_index}.{ext}"
      rel_id = f"rId{len(rels) + 1}"
      SEEN_IMAGES[image_path] = {
        "content_type": "image/png" if ext == "png" else "image/jpeg",
        "part_name": f"/ppt/media/image{media_index}.{ext}",
        "rel_target": target,
        "bytes": image_path.read_bytes()
      }
    rel_id = f"rId{len(rels) + 1}"
    rels.append(
      (
        rel_id,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
        SEEN_IMAGES[image_path]["rel_target"]
      )
    )
    shapes.append(picture(9, rel_id, 7.45, 0.88, 5.18, 5.6, image_path.name))

  slide_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
    'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">'
    "<p:cSld>"
    "<p:bg><p:bgPr><a:solidFill><a:srgbClr val=\"F7F7F7\"/></a:solidFill></p:bgPr></p:bg>"
    "<p:spTree>"
    "<p:nvGrpSpPr><p:cNvPr id=\"1\" name=\"\"/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>"
    "<p:grpSpPr><a:xfrm><a:off x=\"0\" y=\"0\"/><a:ext cx=\"0\" cy=\"0\"/><a:chOff x=\"0\" y=\"0\"/><a:chExt cx=\"0\" cy=\"0\"/></a:xfrm></p:grpSpPr>"
    f"{''.join(shapes)}"
    "</p:spTree>"
    "</p:cSld>"
    "<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>"
    "</p:sld>"
  )

  slide_rels_xml = (
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
    '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
    + "".join(
      f'<Relationship Id="{rel_id}" Type="{rel_type}" Target="{target}"/>'
      for rel_id, rel_type, target in rels
    )
    + "</Relationships>"
  )

  IMAGE_RELATIONS.append((slide_index, slide_xml, slide_rels_xml))


IMAGE_PARTS = list(SEEN_IMAGES.values())

content_types = [
  ('rels', 'application/vnd.openxmlformats-package.relationships+xml'),
  ('xml', 'application/xml')
]
image_overrides = "".join(
  f'<Override PartName="{part["part_name"]}" ContentType="{part["content_type"]}"/>'
  for part in IMAGE_PARTS
)
slide_overrides = "".join(
  f'<Override PartName="/ppt/slides/slide{index}.xml" '
  'ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>'
  for index, _, _ in IMAGE_RELATIONS
)

[PPTX_PATH.unlink() for _ in [0] if PPTX_PATH.exists()]

with zipfile.ZipFile(PPTX_PATH, "w", compression=zipfile.ZIP_DEFLATED) as archive:
  archive.writestr(
    "[Content_Types].xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
      + "".join(f'<Default Extension="{ext}" ContentType="{ctype}"/>' for ext, ctype in content_types)
      + '<Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>'
      + '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>'
      + '<Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>'
      + '<Override PartName="/ppt/presProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presProps+xml"/>'
      + '<Override PartName="/ppt/viewProps.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml"/>'
      + '<Override PartName="/ppt/tableStyles.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml"/>'
      + '<Override PartName="/ppt/slideMasters/slideMaster1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml"/>'
      + '<Override PartName="/ppt/slideLayouts/slideLayout1.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml"/>'
      + '<Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>'
      + slide_overrides
      + image_overrides
      + "</Types>"
    )
  )
  archive.writestr(
    "_rels/.rels",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>'
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>'
      '<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>'
      "</Relationships>"
    )
  )
  archive.writestr(
    "docProps/app.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" '
      'xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">'
      "<Application>Codex Proposal Generator</Application>"
      f"<Slides>{len(SLIDES)}</Slides>"
      "<Notes>0</Notes><HiddenSlides>0</HiddenSlides><MMClips>0</MMClips>"
      "<ScaleCrop>false</ScaleCrop><Company>OpenAI</Company>"
      "<LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged>"
      "<AppVersion>16.0000</AppVersion>"
      "</Properties>"
    )
  )
  archive.writestr(
    "docProps/core.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" '
      'xmlns:dc="http://purl.org/dc/elements/1.1/" '
      'xmlns:dcterms="http://purl.org/dc/terms/" '
      'xmlns:dcmitype="http://purl.org/dc/dcmitype/" '
      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'
      "<dc:title>HLYM Website Mockup Proposal</dc:title>"
      "<dc:creator>Codex</dc:creator>"
      "<cp:lastModifiedBy>Codex</cp:lastModifiedBy>"
      f'<dcterms:created xsi:type="dcterms:W3CDTF">{NOW}</dcterms:created>'
      f'<dcterms:modified xsi:type="dcterms:W3CDTF">{NOW}</dcterms:modified>'
      "</cp:coreProperties>"
    )
  )
  archive.writestr(
    "ppt/presentation.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<p:presentation xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">'
      '<p:sldMasterIdLst><p:sldMasterId id="2147483648" r:id="rId1"/></p:sldMasterIdLst>'
      "<p:sldIdLst>"
      + "".join(
        f'<p:sldId id="{255 + index}" r:id="rId{index + 1}"/>'
        for index, _, _ in IMAGE_RELATIONS
      )
      + "</p:sldIdLst>"
      '<p:sldSz cx="12192000" cy="6858000"/>'
      '<p:notesSz cx="6858000" cy="9144000"/>'
      "</p:presentation>"
    )
  )
  archive.writestr(
    "ppt/_rels/presentation.xml.rels",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>'
      + "".join(
        f'<Relationship Id="rId{index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide{index}.xml"/>'
        for index, _, _ in IMAGE_RELATIONS
      )
      + "</Relationships>"
    )
  )
  archive.writestr(
    "ppt/slideMasters/slideMaster1.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<p:sldMaster xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">'
      "<p:cSld name=\"Mockup Master\">"
      "<p:spTree>"
      "<p:nvGrpSpPr><p:cNvPr id=\"1\" name=\"\"/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>"
      "<p:grpSpPr><a:xfrm><a:off x=\"0\" y=\"0\"/><a:ext cx=\"0\" cy=\"0\"/><a:chOff x=\"0\" y=\"0\"/><a:chExt cx=\"0\" cy=\"0\"/></a:xfrm></p:grpSpPr>"
      "</p:spTree>"
      "</p:cSld>"
      '<p:clrMap bg1="lt1" tx1="dk1" bg2="lt2" tx2="dk2" accent1="accent1" accent2="accent2" accent3="accent3" accent4="accent4" accent5="accent5" accent6="accent6" hlink="hlink" folHlink="folHlink"/>'
      '<p:sldLayoutIdLst><p:sldLayoutId id="1" r:id="rId1"/></p:sldLayoutIdLst>'
      "<p:txStyles/>"
      "</p:sldMaster>"
    )
  )
  archive.writestr(
    "ppt/slideMasters/_rels/slideMaster1.xml.rels",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout" Target="../slideLayouts/slideLayout1.xml"/>'
      '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="../theme/theme1.xml"/>'
      "</Relationships>"
    )
  )
  archive.writestr(
    "ppt/slideLayouts/slideLayout1.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<p:sldLayout xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
      'xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" type="blank" preserve="1">'
      "<p:cSld name=\"Blank\">"
      "<p:spTree>"
      "<p:nvGrpSpPr><p:cNvPr id=\"1\" name=\"\"/><p:cNvGrpSpPr/><p:nvPr/></p:nvGrpSpPr>"
      "<p:grpSpPr><a:xfrm><a:off x=\"0\" y=\"0\"/><a:ext cx=\"0\" cy=\"0\"/><a:chOff x=\"0\" y=\"0\"/><a:chExt cx=\"0\" cy=\"0\"/></a:xfrm></p:grpSpPr>"
      "</p:spTree>"
      "</p:cSld>"
      "<p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>"
      "</p:sldLayout>"
    )
  )
  archive.writestr(
    "ppt/slideLayouts/_rels/slideLayout1.xml.rels",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="../slideMasters/slideMaster1.xml"/>'
      "</Relationships>"
    )
  )
  archive.writestr(
    "ppt/theme/theme1.xml",
    (
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Mockup Theme">'
      "<a:themeElements>"
      "<a:clrScheme name=\"Mockup Colors\">"
      "<a:dk1><a:srgbClr val=\"111111\"/></a:dk1>"
      "<a:lt1><a:srgbClr val=\"FFFFFF\"/></a:lt1>"
      "<a:dk2><a:srgbClr val=\"333333\"/></a:dk2>"
      "<a:lt2><a:srgbClr val=\"F7F7F7\"/></a:lt2>"
      "<a:accent1><a:srgbClr val=\"EC1C24\"/></a:accent1>"
      "<a:accent2><a:srgbClr val=\"1F3B73\"/></a:accent2>"
      "<a:accent3><a:srgbClr val=\"555555\"/></a:accent3>"
      "<a:accent4><a:srgbClr val=\"9A9A9A\"/></a:accent4>"
      "<a:accent5><a:srgbClr val=\"D6D6D6\"/></a:accent5>"
      "<a:accent6><a:srgbClr val=\"000000\"/></a:accent6>"
      "<a:hlink><a:srgbClr val=\"0563C1\"/></a:hlink>"
      "<a:folHlink><a:srgbClr val=\"954F72\"/></a:folHlink>"
      "</a:clrScheme>"
      "<a:fontScheme name=\"Mockup Fonts\">"
      '<a:majorFont><a:latin typeface="Arial"/><a:ea typeface="Arial"/><a:cs typeface="Arial"/></a:majorFont>'
      '<a:minorFont><a:latin typeface="Arial"/><a:ea typeface="Arial"/><a:cs typeface="Arial"/></a:minorFont>'
      "</a:fontScheme>"
      "<a:fmtScheme name=\"Mockup Format\"><a:fillStyleLst/><a:lnStyleLst/><a:effectStyleLst/><a:bgFillStyleLst/></a:fmtScheme>"
      "</a:themeElements>"
      "</a:theme>"
    )
  )
  archive.writestr(
    "ppt/presProps.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:presentationPr xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"/>'
  )
  archive.writestr(
    "ppt/viewProps.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><p:viewPr xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"/>'
  )
  archive.writestr(
    "ppt/tableStyles.xml",
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><a:tblStyleLst xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" def=""/>'
  )

  for index, slide_xml, slide_rels_xml in IMAGE_RELATIONS:
    archive.writestr(f"ppt/slides/slide{index}.xml", slide_xml)
    archive.writestr(f"ppt/slides/_rels/slide{index}.xml.rels", slide_rels_xml)

  for part in IMAGE_PARTS:
    archive.writestr(part["part_name"].lstrip("/"), part["bytes"])


pdf_lines = []
for index, slide in enumerate(SLIDES, start=1):
  pdf_lines.extend(
    [
      "=" * 78,
      f"HLYM WEBSITE MOCKUP PROPOSAL | SLIDE {index:02d}",
      "=" * 78,
      slide["title"].upper(),
      slide["subtitle"],
      "",
    ]
  )
  pdf_lines.extend(f"- {bullet}" for bullet in slide["bullets"])
  pdf_lines.extend(["", "\f"])

PDF_SOURCE_PATH.write_text("\n".join(pdf_lines), encoding="utf-8")

objects = []
objects.append("<< /Type /Catalog /Pages 2 0 R >>")
objects.append(f"<< /Type /Pages /Count {len(SLIDES)} /Kids " + "[ " + " ".join(f"{4 + (i * 2)} 0 R" for i in range(len(SLIDES))) + " ] >>")
objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
objects.append("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")

for index, slide in enumerate(SLIDES):
  content_lines = [
    "1 0 0 rg 36 760 540 8 re f",
    "BT /F2 24 Tf 42 724 Td (HLYM Website Mockup Proposal) Tj ET",
    "BT /F1 11 Tf 42 706 Td "
    f"(Slide {index + 1:02d} | {pdf_escape(slide['subtitle'])}) Tj ET"
  ]

  y = 670
  content_lines.append(f"BT /F2 20 Tf 42 {y} Td ({pdf_escape(slide['title'])}) Tj ET")
  y -= 32

  for bullet in slide["bullets"]:
    wrapped = wrap(f"- {bullet}", width=82)
    for wrapped_line in wrapped:
      content_lines.append(f"BT /F1 11 Tf 54 {y} Td ({pdf_escape(wrapped_line)}) Tj ET")
      y -= 18
    y -= 4

  stream = "\n".join(content_lines).encode("latin-1", "replace")
  stream_object_number = 5 + (index * 2)
  page_object_number = 4 + (index * 2)
  objects.append(
    f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
    f"/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> "
    f"/Contents {stream_object_number} 0 R >>"
  )
  objects.append(f"<< /Length {len(stream)} >>\nstream\n{stream.decode('latin-1')}\nendstream")

pdf_bytes = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
offsets = [0]
for object_index, object_body in enumerate(objects, start=1):
  offsets.append(len(pdf_bytes))
  pdf_bytes.extend(f"{object_index} 0 obj\n".encode("latin-1"))
  pdf_bytes.extend(object_body.encode("latin-1"))
  pdf_bytes.extend(b"\nendobj\n")

xref_offset = len(pdf_bytes)
pdf_bytes.extend(f"xref\n0 {len(offsets)}\n".encode("latin-1"))
pdf_bytes.extend(b"0000000000 65535 f \n")
for offset in offsets[1:]:
  pdf_bytes.extend(f"{offset:010d} 00000 n \n".encode("latin-1"))
pdf_bytes.extend(
  (
    f"trailer\n<< /Size {len(offsets)} /Root 1 0 R >>\n"
    f"startxref\n{xref_offset}\n%%EOF\n"
  ).encode("latin-1")
)
PDF_PATH.write_bytes(pdf_bytes)

print(f"Created {PPTX_PATH}")
print(f"Created {PDF_PATH}")
