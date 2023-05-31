import { motion } from 'framer-motion';
import Technologies from './technologies';
import { Experience } from '@/typings';
import { dividerAnimation, sectionAnimation, viewportOptions } from '@/util/animations';

type Props = {
	experience: Experience;
};
function ExperienceCard({ experience }: Props) {
	return (
		<motion.div
			className='bg-gradient-to-b from-card/50 via-primary/10 to-primary rounded-20 flex flex-col flex-shrink-0 w-full h-full px-1 py-2'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={viewportOptions}
			transition={{ duration: 0.5, ease: 'linear' }}>
			<motion.div
				className='flex flex-col text-center py-2'
				initial='hidden'
				whileInView='show'
				viewport={viewportOptions}
				transition={{ ease: 'linear', staggerChildren: 0.5 }}>
				<motion.p className='pb-1 text-2xl' variants={sectionAnimation}>
					{experience.title}
				</motion.p>
				<motion.div className='bg-primary/75 w-full h-1' variants={dividerAnimation}></motion.div>
			</motion.div>
			<div className='relative flex-1 w-full'>
				<motion.div
					id={experience._id}
					className='absolute inset-x-0.5 inset-y-0 flex flex-col'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					transition={{
						ease: 'linear',
						delayChildren: 1,
						staggerChildren: 0.5,
					}}>
					<motion.div className='w-full' variants={sectionAnimation}>
						<p className='italic tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'>{experience.company}</p>
						<p className='font-bold text-xs tablet:text-sm 1024:text-base 1536:text-lg 2560:text-xl'>
							{new Date(experience.startDate).toLocaleDateString()} -{' '}
							{experience.isWorkingHere ? 'Present' : new Date(experience.endDate).toLocaleDateString()}
						</p>
					</motion.div>
					{experience.technologies?.length > 0 && (
						<motion.div className='font-bold tablet:text-lg 1024:text-xl 1536:text-2xl' variants={sectionAnimation}>
							<div className='inline tablet:hidden'>
								<Technologies size={30} technologies={experience.technologies} />
							</div>
							<div className='hidden tablet:inline 2560:hidden'>
								<Technologies size={40} technologies={experience.technologies} />
							</div>
							<div className='hidden 2560:inline'>
								<Technologies size={50} technologies={experience.technologies} />
							</div>
						</motion.div>
					)}
					{experience.points && (
						<motion.div
							className='flex flex-col w-full h-full'
							variants={sectionAnimation}
							onAnimationComplete={() => document.getElementById(experience._id)?.classList.add('overflow-y-auto')}>
							<p className='font-bold tablet:text-lg 1024:text-xl 1536:text-2xl'>Responsibilities:</p>
							<div className='relative flex-1 min-h-32'>
								<div className='absolute inset-x-2 top-0.5 bottom-1 overflow-y-auto'>
									<ul className='marker:text-white list-disc list-outside pl-4 1024:pl-6 pr-2 text-sm tablet:text-base 1024:text-lg 1536:text-xl'>
										{experience.points.map((point, i) => {
											return <li key={`${experience._id}-point-${i + 1}`}>{point}</li>;
										})}
									</ul>
								</div>
							</div>
						</motion.div>
					)}
				</motion.div>
			</div>
		</motion.div>
	);
}

export default ExperienceCard;
