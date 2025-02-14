import fs from "fs";
import path from "path";
import { parse } from "node-html-parser";
import { fileURLToPath } from "url"; // ✅ Fix for URL to path conversion

/**
 * Modifies all built HTML files in `dist/` to inline all SVGs.
 */
function inlineSVGsInBuiltPages(dir) {
  const htmlFiles = findHtmlFiles(dir);

  for (const file of htmlFiles) {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, "utf8");

    const newHtml = inlineSVGsInHTML(html);
    fs.writeFileSync(filePath, newHtml, "utf8");

    console.log(`✅ Processed ${file}`);
  }
}

/**
 * Finds all HTML files inside `dist/`.
 */
function findHtmlFiles(dir) {
  let results = [];
  function readDir(subdir) {
    const files = fs.readdirSync(subdir);
    for (const file of files) {
      const fullPath = path.join(subdir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        readDir(fullPath);
      } else if (file.endsWith(".html")) {
        results.push(path.relative(dir, fullPath));
      }
    }
  }
  readDir(dir);
  return results;
}

/**
 * Parses HTML and replaces `<img src="*.svg">` with inline `<svg>`.
 */
function inlineSVGsInHTML(html) {
  const root = parse(html);

  root.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");

    if (src && src.endsWith(".svg")) {
      const svgContent = loadSVG(src);
      if (svgContent) {
        const svgNode = parse(svgContent).firstChild;

        // Copy attributes from <img> to <svg>
        ["width", "height", "alt", "class"].forEach((attr) => {
          if (img.hasAttribute(attr)) {
            svgNode.setAttribute(attr, img.getAttribute(attr));
          }
        });

        // Ensure SVG has the correct class for styling
        const existingClass = svgNode.getAttribute("class") || "";
        svgNode.setAttribute("class", `inline-svg ${existingClass}`.trim());

        // Replace <img> with inline <svg>
        img.replaceWith(svgNode);
      }
    }
  });

  return root.toString();
}

/**
 * Loads the correct SVG file.
 */
function loadSVG(src) {
  try {
    const projectRoot = process.cwd();
    const svgPath = path.join(projectRoot, "dist", src); // Adjusted to dist where files are built

    if (fs.existsSync(svgPath)) {
      console.log(`✅ Inlining SVG: ${svgPath}`);
      return fs.readFileSync(svgPath, "utf8");
    }

    console.warn(`⚠️ SVG not found: ${svgPath}`);
    return null;
  } catch (error) {
    console.warn(`❌ Failed to load SVG: ${src}`, error);
    return null;
  }
}

export default function inlineSVGsPlugin() {
  return {
    name: "astro-inline-svg",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const distPath = fileURLToPath(dir); // ✅ Fix: Convert file URL to string path
        console.log(`🔄 Inlining SVGs in built HTML at ${distPath}`);
        inlineSVGsInBuiltPages(distPath);
      },
    },
  };
}
