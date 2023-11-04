// import * as fs from 'fs';
// import * as path from 'path';

// function generateComponentIndex(directory: string): void {
//   const indexPath = path.join(directory, 'index.tsx');
//   const exportStatements: string[] = [];

//   const componentFiles = fs.readdirSync(directory);

//   componentFiles.forEach((fileName) => {
//     if (fileName === 'index.tsx') {
//       return; // Skip processing the existing index.tsx file
//     }

//     const filePath = path.join(directory, fileName);

//     if (fs.statSync(filePath).isDirectory()) {
//       generateComponentIndex(filePath); // Recursively generate index.tsx for subfolders
//     } else if (fileName.endsWith('.tsx')) {
//       const name = path.basename(fileName, '.tsx');
//       exportStatements.push(`export * from "./${name}";`);
//     }
//   });

//   fs.writeFileSync(indexPath, exportStatements.join('\n'));
// }

// function generateRootIndex(componentsDir: string): void {
//   const rootIndexPath = path.join(componentsDir, 'index.tsx');
//   const rootExportStatements: string[] = [];

//   const subfolderNames = fs.readdirSync(componentsDir);

//   subfolderNames.forEach((subfolderName) => {
//     const subfolderPath = path.join(componentsDir, subfolderName);
//     const indexFilePath = path.join(subfolderPath, 'index.tsx');
//     if (fs.existsSync(indexFilePath)) {
//       rootExportStatements.push(`export * from "./${subfolderName}/index";`);
//     }
//   });

//   fs.writeFileSync(rootIndexPath, rootExportStatements.join('\n'));
// }

// const componentsDir = './src/components';
// generateComponentIndex(componentsDir);
// // generateRootIndex(componentsDir);

import * as fs from "fs";
import * as path from "path";

function generateComponentIndex(directory: string): void {
  const indexPath = path.join(directory, "index.tsx");
  const exportStatements: string[] = [];

  const componentFiles = fs.readdirSync(directory);

  componentFiles.forEach((fileName) => {
    if (fileName === "index.tsx") {
      return; // Skip processing the existing index.tsx file
    }

    const filePath = path.join(directory, fileName);

    if (fs.statSync(filePath).isDirectory()) {
      generateComponentIndex(filePath); // Recursively generate index.tsx for subfolders
    } else if (fileName.endsWith(".tsx")) {
      const name = path.basename(fileName, ".tsx");
      exportStatements.push(`export * from "./${name}";`);
    }
  });

  fs.writeFileSync(indexPath, exportStatements.join("\n"));
}

function updateRootIndex(componentsDir: string): void {
  const rootIndexPath = path.join(componentsDir, "index.tsx");
  const rootExportStatements: string[] = [];

  const subfolderNames = fs.readdirSync(componentsDir);

  subfolderNames.forEach((subfolderName) => {
    const subfolderPath = path.join(componentsDir, subfolderName);
    const indexFilePath = path.join(subfolderPath, "index.tsx");
    if (fs.existsSync(indexFilePath)) {
      rootExportStatements.push(`export * from "./${subfolderName}/index";`);
    }
  });

  // Read the existing index.tsx file content, if it exists
  let existingContent = "";
  if (fs.existsSync(rootIndexPath)) {
    existingContent = fs.readFileSync(rootIndexPath, "utf8");
  }

  // Append the export statements to the existing content
  const updatedContent = `${existingContent}\n${rootExportStatements.join(
    "\n",
  )}`;

  fs.writeFileSync(rootIndexPath, updatedContent);
}

const componentsDir = "./src/components";
generateComponentIndex(componentsDir);
updateRootIndex(componentsDir);
