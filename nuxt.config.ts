// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	runtimeConfig: {
		apiToken: ''
	},
	css: [
		'~/assets/css/main.css'
	],
})
