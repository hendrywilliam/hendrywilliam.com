// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	app: {
		head: {
			title: "Hendri William",
			htmlAttrs: {
				lang: "en",
			},
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
			],
		},
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/fonts"],
	css: ["./app/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
});
