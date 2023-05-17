import { Variants } from 'framer-motion';

export const viewportOptions: {
	once: boolean;
	amount: number | 'all' | 'some' | undefined;
} = {
	once: true,
	amount: 0.1,
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

export const springAnimation = (direction: -1 | 1 | 2, delay: number | null) => {
	return {
		hidden: {
			opacity: 0,
			x: direction !== 2 ? 250 * direction : 0,
			y: direction === 2 ? -50 * Math.abs(direction - 1) : 0,
		},
		show: {
			opacity: [0, 0.1, 0.9, 1],
			x: 0,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				delay: delay,
				duration: 1,
			},
		},
	} as Variants;
};
