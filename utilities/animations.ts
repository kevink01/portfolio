import { Variants } from 'framer-motion';

export const viewportOptions: {
	once: boolean;
	amount: number | 'all' | 'some' | undefined;
} = {
	once: true,
	amount: 'all',
};

export const dividerAnimation: Variants = {
	hidden: { scaleX: '0%' },
	show: {
		scaleX: '100%',
		transition: {
			ease: 'linear',
			duration: 1,
		},
	},
};

export const infoAnimation: Variants = {
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

export const delayDividerAnimation = (delay: number) => {
	return {
		...dividerAnimation,
		show: {
			scaleX: '100%',
			transition: { ease: 'linear', duration: 1, delay: delay },
		},
	};
};

export const sectionAnimation: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'linear',
			duration: 0.5,
		},
	},
};

export const profileAnimation = (direction: 1 | -1) => {
	return {
		hidden: {
			opacity: 0,
			x: 500 * direction,
		},
		show: {
			opacity: [0, 0.1, 0.9, 1],
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				delay: 1,
				duration: 1,
			},
		},
	} as Variants;
};

export const contactAnimation: Variants = {
	hidden: { opacity: 0, x: 500 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
			duration: 1,
		},
	},
};
