const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const css = require("@zeit/next-css");

module.exports = withPlugins([[optimizedImages], [css]], {
	distDir: "../.next",
});
