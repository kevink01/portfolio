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
				12.5: '50px',
				30: '7.5rem',
				100: '25rem',
				104: '26rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				150: '37.5rem',
				160: '40rem',
				'1/10': '10%',
				'7/10': '70%',
				'9/10': '90%',
			},
			width: {
				12.5: '50px',
				30: '7.5rem',
				100: '25rem',
				104: '26rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				150: '37.5rem',
				160: '40rem',
				'1/10': '10%',
				'7/10': '70%',
				'9/10': '90%',
			},
		},
	},
	plugins: [],
};
