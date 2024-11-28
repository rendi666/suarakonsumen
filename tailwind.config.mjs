/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1124px',
		},
		colors: {
			'sk': {
				50: '#FFF6F9',
				100: '#FBF2F5',
				200: '#FFECF2',
				300: '#F9D2DF',
				400: '#EA9EB8',
				500: '#EB749C',
				600: '#E75989',
				700: '#ED417B',
				800: '#E22D6A',
				900: '#DA1C5C',
			},
			'socmed': {
				'fb':'#35518D',
				'x':'#000000',
				'youtube':'#E02424',
				'linkedin':'#1A56DB',
				'ig':'#DD2A7B',
			}
		},
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
			},
			width: {
				'container': '1124px',
			},
			maxWidth: {
				'form': '640px'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')({
			datatables: true,
			wysiwyg: true,
		}),
	],
}
