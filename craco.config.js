const glslifyLoader = require("craco-glslify-loader");

module.exports = {
  plugins: [
    { plugin: glslifyLoader, options: { test: /\.(glsl|vs|fs|vert|frag)$/ } },
  ],
};
