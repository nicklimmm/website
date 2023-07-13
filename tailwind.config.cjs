/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#1572A1',
				secondary: '#9AD0EC',
				tertiary: '#EFDAD7',
				accent: '#E3BEC6',
			},
		},
	},
	plugins: [],
}
