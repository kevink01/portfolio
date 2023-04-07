import { motion } from 'framer-motion';
import React from 'react';
type Props = {
	name: string;
	progress: number;
	color: string;
	delay: number;
};

function Skill({ name, progress, color, delay }: Props) {
	return (
		<div className='flex flex-row space-x-3'>
			<div className='flex items-center justify-end w-1/4 overflow-x-hidden text-right h-full pr-2'>
				<motion.span
					className='w-full overflow-x-hidden truncate'
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { ease: 'linear' },
					}}
					viewport={{ once: true, amount: 0.5 }}>
					{name}
				</motion.span>
			</div>
			<div className='w-3/4'>
				<motion.div
					className='skill-progress-bar'
					initial={{ width: '0%' }}
					viewport={{ once: true, amount: 0.5 }}
					whileInView={{
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
							delay: delay * 0.3,
							duration: 1,
						},
					}}
					style={{
						backgroundColor: `#${color}`,
						width: `${progress}%`,
					}}>
					<span className='skill-value-label'>{progress}%</span>
				</motion.div>
			</div>
		</div>
	);
}

export default Skill;
