/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			borderRadius: {
				20: '20px',
			},
			colors: {
				card: '#202020',
				primary: '#222BFF',
				secondary: '#B77A03',
				secondaryHover: '#825601',
			},
			height: {
				30: '120px',
				104: '26rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				160: '40rem',
				'9/10': '90%',
			},
			width: {
				30: '120px',
				104: '26rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				160: '40rem',
				'9/10': '90%',
			},
		},
	},
	plugins: [],
};
