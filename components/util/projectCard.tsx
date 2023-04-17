import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Technologies from './technologies';
import Picture from '@/assets/images/spotify.png';
import { Variants, motion } from 'framer-motion';
import {
	delayDividerAnimation,
	dividerAnimation,
	sectionAnimation,
	viewportOptions,
} from '@/utilities/animations';

type Props = {
	delay: number;
};

function ProjectCard({ delay }: Props) {
	const buttonAnimate: Variants = {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { ease: 'linear', duration: 0.5 },
		},
	};

	return (
		<motion.div
			className='flex flex-col flex-shrink-0 w-full h-full py-2 rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={viewportOptions}
			transition={{ ease: 'linear', duration: 0.5 }}>
			<motion.div
				className='flex flex-col flex-1'
				initial='hidden'
				whileInView='show'
				viewport={viewportOptions}
				transition={{ staggerChildren: 0.5, ease: 'linear' }}>
				<motion.div className='flex justify-center' variants={sectionAnimation}>
					<Image src={Picture.src} alt='Spotify' width={150} height={150} />
				</motion.div>
				<motion.div
					className='w-full px-2 text-center text-xl'
					variants={sectionAnimation}>
					<p className='line-clamp-2'>
						Very long Project Title that will overflow
					</p>
				</motion.div>
				<motion.div
					className='h-1 bg-primary/75'
					variants={dividerAnimation}></motion.div>
				<div className='relative flex-1'>
					<div className='absolute inset-0 overflow-y-auto'>
						<motion.div variants={sectionAnimation}>
							<p className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'>
								Project description:
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consectetur repudiandae placeat error asperiores quod tempore
								accusamus atque hic deleniti quos, ea quasi? Animi dolores ipsa
								incidunt unde inventore necessitatibus maxime!
							</p>
						</motion.div>
						<motion.div
							className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'
							variants={sectionAnimation}>
							<Technologies size={30} />
						</motion.div>
					</div>
				</div>
			</motion.div>
			<div className='space-y-1'>
				<motion.div
					className='h-1 bg-black/75'
					variants={delayDividerAnimation(delay)}
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}></motion.div>
				<motion.div
					className='flex flex-row justify-center space-x-2 w-full h-full'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					transition={{
						staggerChildren: 0.5,
						ease: 'linear',
						delayChildren: 1,
					}}>
					<motion.div variants={buttonAnimate}>
						<Link href='#skills'>
							<button className='w-20 tablet:w-30 1536:w-40 2560:w-60 h-10 2560:h-12 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
								Source code
							</button>
						</Link>
					</motion.div>
					<motion.div variants={buttonAnimate}>
						<Link href='#skills'>
							<button className='w-20 tablet:w-30 1536:w-40 2560:w-60 h-10 2560:h-12 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
								Live Demo
							</button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default ProjectCard;
