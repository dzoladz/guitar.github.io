import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";
import Unfonts from 'unplugin-fonts/astro'

// https://astro.build/config
export default defineConfig({
	site: 'https://guitar.derekzoladz.com',
	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: 'astro',
				autoInstall: true,
			}),
		],
	},
	integrations: [
		Unfonts({
			google: {
				families: ['Atkinson+Hyperlegible+Next'],
			},
		}),
		mdx(),
		sitemap(),
	],
});
