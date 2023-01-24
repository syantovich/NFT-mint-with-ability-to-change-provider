const { resolve } = require("path");
const tsconfig = require("./tsconfig.path.json");

module.exports = {
  webpack: {
    alias: Object.entries(tsconfig.compilerOptions.paths).reduce(
      (acc, [alias, [path]]) => {
        acc[alias.replace("/*", "")] = resolve(
          __dirname,
          path.replace("/*", "")
        );
        return acc;
      },
      {}
    ),
  },
};
