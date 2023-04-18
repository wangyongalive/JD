module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://pay-dev.20a.top/index.php",
        changeOrigin: true,
        // rewrite: (path) => path.replace("/api/", "/"),
      },
    },
  },
};
