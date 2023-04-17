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
