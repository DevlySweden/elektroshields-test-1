import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const structure = {
  "src/assets/brand": ["hero.jpg", "logo.svg"],
  "src/assets/projects": ["p1.jpg", "p2.jpg", "p3.jpg"],
  "src/content": ["site.js", "projects.js"],
  "src/components": [
    "Header.jsx",
    "Hero.jsx",
    "Projects.jsx",
    "Contact.jsx",
    "Footer.jsx",
  ],
  "src/hooks": ["useScrollPosition.js"],
  "src/styles": ["global.css"],
  "src": ["App.jsx", "main.jsx"],
};

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 created ${dirPath}`);
  }
}

function ensureFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
    console.log(`📄 created ${filePath}`);
  }
}

console.log("🚀 Initializing company site template...\n");

for (const [dir, files] of Object.entries(structure)) {
  const fullDir = path.join(ROOT, dir);
  ensureDir(fullDir);

  files.forEach((file) => {
    ensureFile(path.join(fullDir, file));
  });
}

if (!fs.existsSync(path.join(ROOT, "README.md"))) {
  fs.writeFileSync(path.join(ROOT, "README.md"), "# Company Site Template\n");
  console.log("📄 created README.md");
}

console.log("\n✅ Template structure ready.");
