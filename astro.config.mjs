import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Masscer',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			defaultLocale: "en",
			locales: {
				en: {
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




