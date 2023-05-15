/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			// Credit: https://screensizemap.com/
			mobile: '320px',
			tablet: '480px',
			680: '680px',
			1024: '1024px',
			1280: '1280px',
			1536: '1536px',
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
				'9/10': '90%',
			},
			maxHeight: {
				144: '36rem',
				176: '44rem',
				240: '60rem',
				360: '90rem',
			},
			minHeight: {
				10: '2.5rem',
				32: '8rem',
			},
			scale: {
				98: '98%',
				102: '102%',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
