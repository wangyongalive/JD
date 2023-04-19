module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://bsoxc9.laf.run/",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
