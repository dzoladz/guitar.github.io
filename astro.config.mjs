import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

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
		mdx(),
		sitemap(),
	],
});
