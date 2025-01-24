import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Masscer',
			// components: {
			// 	ContentPanel: "./src/components/contentPanel.astro"
			// },
			customCss: [
				"./src/styles/custom.css"
			],
			// logo: {
			// 	src: "./src/assets/images/logo-masscer.jpg",
			// 	replacesTitle: true
			// },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// defaultLocale: "root",
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
							translations: {"es" : "Empezando" },
							slug: "getting-started/overview"
						},
						{
							label: "Create an account",
							translations: { "es" : "Crear una cuenta" },
							slug: "getting-started/create-an-account"
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
							label: "Vision",
							translations: { "es" : "Visión" },
							slug: "capabilities/vision"
						},
						{
							label: "Text generation",
							translations: { "es" : "Generación de texto" },
							slug: "capabilities/text-generation"
						},
						{
							label: "Prompting",
							translations: { "es" : "Prompting" },
							slug: "capabilities/prompting"
						},
						{
							label: "Agents",
							translations: { "es" : "Agentes" },
							slug: "capabilities/agents"
						},
						{
							label: "Document creation with AI",
							translations: { "es" : "Creación de documentos con IA" },
							slug: "capabilities/document-creation"
						},
						{
							label: "Image generation",
							translations: { "es" : "Generación de imagenes" },
							slug: "capabilities/image-generation"
						},
						{
							label: "Video generation",
							translations: { "es" : "Generación de videos" },
							slug: "capabilities/video-generation"
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