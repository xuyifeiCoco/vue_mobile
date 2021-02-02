//"cross-env module_name=main vue-cli-service build"
var moduleName = process.env.module_name;
var config = {
  outputDir: `./dist_${moduleName}`,
  pages: {
    index: {
      entry: `src/entrys/${moduleName}.js`,
    },
  },
  moduleName,
};

module.exports = config;
