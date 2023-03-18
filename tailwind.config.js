/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			// Credit: https://screensizemap.com/
			mobile: '320px',
			// TODO Add breakpoint for larger phones
			tablet: '480px',
			13: '1024px',
			15: '1280px',
			17: '1536px',
			21: '1680px',
			24: '1920px',
			27: '2560px',
		},
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
			fontSize: {
				xxs: ['0.65rem', '1rem'],
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
