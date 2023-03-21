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
			1024: '1024px',
			1280: '1280px',
			1536: '1536px',
			1680: '1680px', // Maybe I don't need this....
			1920: '1920px',
			2560: '2560px',
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
			height: {
				12.5: '50px',
				15: '3.75rem',
				30: '7.5rem',
				45: '11.25rem',
				58: '15rem',
				68: '17rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				104: '26rem',
				112: '28rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				150: '37.5rem',
				160: '40rem',
				180: '45rem',
				192: '48rem',
				240: '60rem',
				300: '75rem',
				'1/10': '10%',
				'1/8': '12.5%',
				'7/10': '70%',
				'9/10': '90%',
			},
			maxHeight: {
				150: '37.5rem',
				180: '45rem',
			},
			scale: {
				102: '102%',
			},
			width: {
				12.5: '50px',
				30: '7.5rem',
				68: '17rem',
				76: '19rem',
				84: '21rem',
				88: '22rem',
				92: '23rem',
				100: '25rem',
				104: '26rem',
				112: '28rem',
				120: '30rem',
				128: '32rem',
				144: '36rem',
				150: '37.5rem',
				160: '40rem',
				180: '45rem',
				192: '48rem',
				240: '60rem',
				300: '75rem',
				'1/10': '10%',
				'1/8': '12.5%',
				'7/10': '70%',
				'9/10': '90%',
			},
		},
	},
	plugins: [],
};
