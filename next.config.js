const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const manifest = require("next-manifest");

module.exports = withPlugins(
	[
		[
			optimizedImages,
			{
				removeOriginalExtension: true,
			},
		],
		[
			manifest,
			{
				manifest: {
					output: "./src/public", // The folder where the manifest will be generated.
					// manifest options
					short_name: "Alex Davis",
					name: "Alexander Davis",
					icons: [
						{
							src: "icon.png",
							sizes: "64x64 32x32 24x24 16x16",
							type: "image/x-icon",
						},
					],
					start_url: "./",
					display: "standalone",
					theme_color: "#2792b2",
					background_color: "#ffffff",
				},
			},
		],
	],
	{
		distDir: "../.next",
	}
);
