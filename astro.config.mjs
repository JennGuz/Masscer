import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Masscer',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en"
				},
				es: {
					label: "Español",
					lang: "es"
				}
			},
			sidebar: [
				{
					label: "Getting started",
					translations: { "es": "Primeros pasos"},
					items: [
						{
							label: "Overview",
							translations: {"es" : "Resumen" },
							slug: "getting-started/overview"
						},
						{
							label: "Models",
							translations: { "es": "Modelos" },
							slug: "getting-started/models"
						},
						{
							label: "Pricing",
							translations: { "es" : "Precios" },
							slug: "getting-started/pricing"
						}
					]
				},
				{
					label: "Capabilities",
					translations: { "es" : "Capacidades" },
					items: [
						{
							label: "Image generation",
							translations: { "es" : "Generación de imagenes" },
							slug: "capabilities/image-generation"
						},
						{
							label: "Text generation",
							translations: { "es" : "Generación de texto" },
							slug: "capabilities/text-generation"
						},
						{
							label: "Text to speech",
							translations: { "es" : "Texto a voz" },
							slug: "capabilities/text-to-speech"
						},
						{
							label: "Speech to text",
							translations: { "es" : "Voz a texto" },
							slug: "capabilities/speech-to-text"
						},
						{
							label: "Embeddings",
							translations: { "es" : "Embeddings" },
							slug: "capabilities/embeddings"
						},
						{
							label: "Reasoning",
							translations: { "es" : "Razonamiento" },
							slug: "capabilities/reasoning"
						},
					]
				},
				{
					label: "Policies",
					translations: { "es" : "Políticas"},
					items: [
						{
							label: "Privacy policy",
							translations: { "es" : "Políticas de privacidad" },
							slug: "policies/privacy-policy"
						},
						{
							label: "Terms and conditions",
							translations: { "es" : "Términos y condiciones" },
							slug: "policies/terms-and-conditions"
						}
					]
				},
			],
		}),
	],
});