export const dividerAnimation = {
	hidden: { width: '0%' },
	show: {
		width: '100%',
		transition: {
			ease: 'linear',
			duration: 1,
		},
	},
};

export const infoAnimation = {
	hidden: { opacity: 0, x: -50, y: 50 },
	show: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: {
			ease: 'linear',
			duration: 1,
		},
	},
};
