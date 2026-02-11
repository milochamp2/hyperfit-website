import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

async function generate() {
  // Read and resize hero background to fill 1200x630
  const bg = await sharp(join(root, "public/hero-bg.jpg"))
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .toBuffer();

  // Create dark overlay (70% opacity black)
  const overlay = await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 4, background: { r: 11, g: 11, b: 11, alpha: 0.7 } },
  })
    .png()
    .toBuffer();

  // Read the logo and negate (invert black to white)
  const logoMeta = await sharp(join(root, "public/hyperfit-logo.png")).metadata();
  const logoHeight = 80;
  const logoWidth = Math.round((logoMeta.width / logoMeta.height) * logoHeight);

  const whiteLogo = await sharp(join(root, "public/hyperfit-logo.png"))
    .resize(logoWidth, logoHeight, { fit: "contain" })
    .negate({ alpha: false })
    .toBuffer();

  // Composite: bg + dark overlay + centered white logo
  const result = await sharp(bg)
    .composite([
      { input: overlay, blend: "over" },
      {
        input: whiteLogo,
        top: Math.round((HEIGHT - logoHeight) / 2),
        left: Math.round((WIDTH - logoWidth) / 2),
      },
    ])
    .jpeg({ quality: 90 })
    .toFile(join(root, "public/og-image.jpg"));

  console.log("OG image generated:", result);
}

generate().catch(console.error);
