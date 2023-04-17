import React from 'react';
import Technologies from './technologies';
import { motion } from 'framer-motion';
import {
	dividerAnimation,
	sectionAnimation,
	viewportOptions,
} from '@/utilities/animations';

function ExperienceCard() {
	return (
		<motion.div
			className='flex flex-col flex-shrink-0 w-full h-full px-1 py-2 rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={viewportOptions}
			transition={{ ease: 'linear', duration: 0.5 }}>
			<motion.div
				className='flex flex-col py-2 text-center'
				initial='hidden'
				whileInView='show'
				viewport={viewportOptions}
				transition={{ staggerChildren: 0.5, ease: 'linear' }}>
				<motion.p className='pb-1' variants={sectionAnimation}>
					Information Technology Intern and Consultant blah blah
				</motion.p>
				<motion.div
					className='w-full h-1 bg-primary/75'
					variants={dividerAnimation}></motion.div>
			</motion.div>
			<div className='relative flex-1 w-full'>
				<motion.div
					className='absolute flex flex-col inset-0 overflow-y-hidden'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					transition={{
						staggerChildren: 0.5,
						ease: 'linear',
						delayChildren: 1,
					}}>
					<motion.div className='w-full' variants={sectionAnimation}>
						<p className='italic tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'>
							Going to try to wrap text for this employer
						</p>
						<p className='font-bold text-xs tablet:text-sm 1024:text-base 1536:text-lg 2560:text-xl'>
							1/1/2022 - 12/31/2022
						</p>
					</motion.div>
					<motion.div
						className='tablet:text-lg 1024:text-xl 1536:text-2xl font-bold'
						variants={sectionAnimation}>
						<div className='inline tablet:hidden'>
							<Technologies size={30} />
						</div>
						<div className='hidden tablet:inline 2560:hidden'>
							<Technologies size={40} />
						</div>
						<div className='hidden 2560:inline'>
							<Technologies size={50} />
						</div>
					</motion.div>
					<motion.div
						className='flex flex-col w-full h-full'
						variants={sectionAnimation}>
						<p className='tablet:text-lg 1024:text-xl 1536:text-2xl font-bold'>
							Responsibilities:
						</p>
						<div className='relative flex-1'>
							<div className='absolute inset-x-0 top-0.5 bottom-1 w-full overflow-y-auto'>
								<ul className='marker:text-white list-disc list-inside text-sm tablet:text-base 1024:text-lg 1536:text-xl'>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Reiciendis ab suscipit commodi similique.
									</li>
									<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
									<li>Lorem ipsum dolor sit amet</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Debitis autem officiis saepe inventore cupiditate beatae
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Debitis autem officiis saepe inventore cupiditate beatae
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Debitis autem officiis saepe inventore cupiditate beatae
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Debitis autem officiis saepe inventore cupiditate beatae
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</li>
									<li>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Reiciendis ab suscipit commodi similique.
									</li>
									<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
									<li>Lorem ipsum dolor sit amet</li>
									<li>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Excepturi possimus consequuntur dicta quidem quos officiis
										itaque reprehenderit, aut temporibus expedita fuga. Nemo
										porro error inventore tempora corporis, illo placeat quos.
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default ExperienceCard;
