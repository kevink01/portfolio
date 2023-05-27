import Image from 'next/image';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import Technologies from './technologies';
import { delayDividerAnimation, dividerAnimation, sectionAnimation, viewportOptions } from '@/utilities/animations';
import { createURL } from '@/sanity';
import { Project } from '@/typings';

type Props = {
	delay: number;
	project: Project;
};

function ProjectCard({ delay, project }: Props) {
	const buttonAnimate: Variants = {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'linear' },
		},
	};

	return (
		<motion.div
			className='relative bg-gradient-to-b from-card/10 via-primary/30 to-primary rounded-20 flex flex-col flex-shrink-0 w-full h-full py-2'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={viewportOptions}
			transition={{ duration: 0.5, ease: 'linear' }}>
			<div className='absolute inset-x-0.5 inset-y-0 flex flex-col overflow-y-auto py-2'>
				<motion.div
					className='flex flex-col flex-1'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}
					transition={{ ease: 'linear', staggerChildren: 0.5 }}>
					<motion.div className='flex justify-center' variants={sectionAnimation}>
						<Image
							className='rounded-2xl'
							src={createURL(project.image).url()}
							alt='Project Logo'
							width={150}
							height={150}
						/>
					</motion.div>
					<motion.div className='text-center w-full px-2 text-xl' variants={sectionAnimation}>
						<p className='line-clamp-2'>{project.name}</p>
					</motion.div>
					<motion.div className='bg-primary/75 h-1' variants={dividerAnimation}></motion.div>
					<div className='relative flex-1 min-h-32'>
						<div className='absolute inset-x-2 inset-y-0 overflow-y-auto'>
							{project.summary && (
								<motion.div variants={sectionAnimation}>
									<p className='font-bold tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'>
										Project description:
									</p>
									<p>{project.summary}</p>
								</motion.div>
							)}
							{project.technologies?.length > 0 && (
								<motion.div
									className='font-bold tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'
									variants={sectionAnimation}>
									<Technologies size={30} technologies={project.technologies} />
								</motion.div>
							)}
						</div>
					</div>
				</motion.div>
				<div className='space-y-1'>
					<motion.div
						className='bg-black/75 h-1'
						variants={delayDividerAnimation(delay)}
						initial='hidden'
						whileInView='show'
						viewport={viewportOptions}></motion.div>
					<motion.div
						className='flex justify-center space-x-2 1024:space-x-4 w-full h-full'
						initial='hidden'
						whileInView='show'
						viewport={viewportOptions}
						transition={{
							staggerChildren: 0.5,
							ease: 'linear',
							delayChildren: 1,
						}}>
						<motion.div variants={buttonAnimate}>
							<Link href={project.sourceCodeURL}>
								<button className='bg-secondary rounded-20 w-28 tablet:w-40 1536:w-44 h-10 2560:h-12 tablet:text-lg 1024:text-lg 1536:text-xl hover:bg-secondaryHover motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500 motion-safe:hover:scale-110'>
									Source code
								</button>
							</Link>
						</motion.div>
						{project.liveDemoURL && (
							<motion.div variants={buttonAnimate}>
								<Link href={project.liveDemoURL}>
									<button className='bg-secondary rounded-20 w-28 tablet:w-40 1536:w-44 h-10 2560:h-12 tablet:text-lg 1024:text-lg 1536:text-xl hover:bg-secondaryHover motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500 motion-safe:hover:scale-110'>
										Live Demo
									</button>
								</Link>
							</motion.div>
						)}
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectCard;
