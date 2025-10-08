const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = inputDir;

async function optimizeImages() {
  const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

  console.log(`Found ${files.length} PNG images to optimize...`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

    const stats = fs.statSync(inputPath);
    const sizeBefore = (stats.size / 1024).toFixed(2);

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const statsAfter = fs.statSync(outputPath);
    const sizeAfter = (statsAfter.size / 1024).toFixed(2);
    const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);

    console.log(`✓ ${file} -> ${path.basename(outputPath)}`);
    console.log(`  ${sizeBefore}KB -> ${sizeAfter}KB (${reduction}% reduction)`);
  }

  console.log('\nOptimization complete!');
}

optimizeImages().catch(console.error);
