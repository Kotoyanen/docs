import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	base: 'docs',
	integrations: [
		starlight({
			title: 'Kotoyanen Documentations',
			social: {
				github: 'https://github.com/Kotoyanen/docs',
			},
			sidebar: [
				{
					label: 'Basic',
					items: [
						{ label: 'New? Read me!', link: '/basic/new-comer/' },
						{ label: 'Word Definition', link: '/basic/word-definitions/'},
						{ label: 'System Architecture', link: '/basic/system-architecture/' },
						{ label: 'Database Schema', link: '/basic/database-schema/' },
					],
				},
				{
					label: 'Supabase',
					autogenerate: { directory: 'supabase' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
