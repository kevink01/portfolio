import { motion } from 'framer-motion';
import Skill from './skill';
import { Skill as SkillType } from '@/typings';
import { viewportOptions } from '@/util/animations';

type Props = {
	skills: SkillType[];
};

function Skills({ skills }: Props) {
	return (
		<div className='flex flex-col items-center overflow-hidden px-2 pt-2 pb-10 space-y-2 w-screen h-screen'>
			<h1 className='text-slate-300 py-1 1024:py-4 tracking-widest text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
				Skills
			</h1>
			<div className='bg-gradient-to-b from-card/50 via-primary/30 to-primary rounded-20 flex flex-col flex-1 overflow-x-hidden overflow-y-auto scrollbar scrollbar-track-gray-900 scrollbar-thumb-secondary w-full h-full px-4'>
				{skills.length > 0 && (
					<motion.div
						className='flex flex-col justify-between w-full h-full py-4 text-xs 1024:text-base 1536:text-lg 2560:text-xl'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={viewportOptions}
						transition={{ ease: 'linear', staggerChildren: 0.2 }}>
						{skills.map((skill, i) => {
							return <Skill key={skill._id} delay={i} skill={skill} />;
						})}
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default Skills;
