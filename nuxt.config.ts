// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	runtimeConfig: {
		apiToken: ''
	},
	css: [
		'~/assets/css/main.css'
	],
	app: {
		head: {
			title: 'Netflix',
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Netflix Clone - carum98' },
			],
			script: [
				{
					src: "https://analytics.carum.dev/umami.js",
					async: true,
					defer: true,
					"data-website-id": "4d8d7c13-9d9d-46f6-afbd-00cf5f38b415",
				}
			]
		},
	}
})
