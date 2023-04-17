import { viewportOptions } from '@/utilities/animations';
import { Variants, motion } from 'framer-motion';
import React from 'react';

type Props = {
	name: string;
	progress: number;
	color: string;
	delay: number;
};

const progressLabelAnimation = (delay: number) => {
	return {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { ease: 'linear', duration: 1, delay: delay * 0.2 },
		},
	} as Variants;
};

const progressAnimation = (progress: number, delay: number) => {
	return {
		hidden: { width: 0 },
		show: {
			width: [
				'0%',
				`${progress * 0.25}%`,
				`${progress * 0.5}%`,
				`${progress * 0.75}%`,
				`${progress}%`,
				`${progress * 1.1}%`,
				`${progress}%`,
			],
			transition: {
				ease: 'linear',
				delay: delay * 0.2,
				duration: 1,
			},
		},
	} as Variants;
};

function Skill({ name, progress, color, delay }: Props) {
	return (
		<div className='flex flex-row space-x-3'>
			<div className='flex items-center justify-end w-1/4 overflow-x-hidden text-right h-full pr-2'>
				<motion.span
					className='w-full overflow-x-hidden truncate'
					variants={progressLabelAnimation(delay)}
					initial='hidden'
					animate='show'
					viewport={viewportOptions}>
					{name}
				</motion.span>
			</div>
			<div className='w-3/4'>
				<motion.div
					className='skill-progress-bar'
					variants={progressAnimation(progress, delay)}
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					style={{
						backgroundColor: `#${color}`,
					}}>
					<motion.span
						className='skill-value-label'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={viewportOptions}
						transition={{ ease: 'linear', delay: delay * 0.2, duration: 0.5 }}>
						{progress}%
					</motion.span>
				</motion.div>
			</div>
		</div>
	);
}

export default Skill;
