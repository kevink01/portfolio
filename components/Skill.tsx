import { Variants, motion } from 'framer-motion';
import { viewportOptions } from '@/utilities/animations';

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
			transition: { delay: delay * 0.2, duration: 1, ease: 'linear' },
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
				delay: delay * 0.2,
				duration: 1,
				ease: 'linear',
			},
		},
	} as Variants;
};

function Skill({ name, progress, color, delay }: Props) {
	return (
		<div className='flex items-center space-x-3'>
			<div className='flex justify-end items-center text-right align-bottom overflow-x-hidden w-1/4 h-full pr-2'>
				<motion.span
					className='overflow-x-hidden truncate w-full'
					variants={progressLabelAnimation(delay)}
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}>
					{name}
				</motion.span>
			</div>
			<div className='w-3/4'>
				<motion.div
					className='rounded-l-md rounded-r-xl motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500 motion-safe:hover:scale-[101%] motion-safe:hover:opacity-50'
					variants={progressAnimation(progress, delay)}
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					style={{
						backgroundColor: `#${color}`,
					}}>
					<motion.span
						className='flex justify-end items-center h-full pr-5 text-xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={viewportOptions}
						transition={{ delay: delay * 0.2, duration: 0.5, ease: 'linear' }}>
						{progress}%
					</motion.span>
				</motion.div>
			</div>
		</div>
	);
}

export default Skill;
