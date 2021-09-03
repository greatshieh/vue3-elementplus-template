module.exports = (api) => {
  api.extendPackage({
    scripts: {
      "test:unit": "jest --clearCache && vue-cli-service test:unit",
      lint: "eslint --fix --ext .js,.vue src",
      svgo: "svgo -f src/icons/svg --config=src/icons/svgo.yml",
    },
    dependencies: {
      axios: "^0.21.1",
      "element-plus": "^1.0.2-beta.63",
      "fuse.js": "^6.4.6",
      "js-cookie": "^3.0.0",
      mockjs: "^1.1.0",
      "normalize.css": "^8.0.1",
      nprogress: "^0.2.0",
      screenfull: "^5.1.0",
    },
    devDependencies: {
      chalk: "^4.1.1",
      chokidar: "^3.5.2",
      "svg-sprite-loader": "^6.0.9",
      svgo: "^2.3.1",
    //   "vue-cli-plugin-element-plus": "latest",
    },
  });
  api.render("./template");
};
