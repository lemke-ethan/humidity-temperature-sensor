const pkg = require("../package.json");
const fs = require("fs");

fs.writeFileSync(
  "./src/version.ts",
  `// AUTO GENERATED ON BUILD - DO NOT EDIT MANUALLY\nexport const version = '${pkg.version}';\n`,
);
