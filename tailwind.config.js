/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			width: {
				104: '26rem',
				120: '30rem',
				128: '32rem',
				160: '40rem',
			},
			height: {
				104: '26rem',
				120: '30rem',
				128: '32rem',
				160: '40rem',
			},
			colors: {
				'true-grey': '#3d3e40',
				'terminal-grey': '#1e1e1e',
			},
		},
	},
	plugins: [],
};
