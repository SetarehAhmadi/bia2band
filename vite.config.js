import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		// eslint-disable-next-line no-undef
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
	},
	plugins: [
		react(),
    // https://www.saurabhmisra.dev/setup-react-pwa-using-vite/
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
			manifest: {
				name: "Vite PWA Project",
				short_name: "Vite PWA Project",
				theme_color: "#ffffff",
				icons: [
					{
						src: "pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
			},
		}),
	],
});
