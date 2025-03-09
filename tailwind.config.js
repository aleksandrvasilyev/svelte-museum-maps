/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF4500',
				secondary: '#0B3D91',
				dark: '#333333',
				light: '#F5F5F5'
			},
			fontFamily: {
				sans: ['Arial', 'sans-serif']
			}
		}
	},
	plugins: []
};
