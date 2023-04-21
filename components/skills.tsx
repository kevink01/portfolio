import React from 'react';
import Skill from './util/skill';
import { motion } from 'framer-motion';
import { viewportOptions } from '@/utilities/animations';

function Skills() {
	return (
		<div className='flex flex-col items-center px-2 pt-2 pb-4 space-y-2 w-screen h-screen'>
			<h1 className='text-slate-300 py-1 1024:py-4 tracking-widest text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
				Skills
			</h1>
			<div className='bg-gradient-to-b from-card/50 via-primary/10 to-primary rounded-20 flex flex-col overflow-x-hidden overflow-y-auto w-full h-full px-4'>
				<motion.div
					className='flex flex-col justify-between w-full h-full py-4 text-xs 1024:text-base 1536:text-lg 2560:text-xl'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={viewportOptions}
					transition={{ ease: 'linear', staggerChildren: 0.2 }}>
					<Skill name='TypeScript' progress={100} color='222bff' delay={0} />
					<Skill name='C++' progress={80} color='3b82f6' delay={1} />
					<Skill name='Firebase' progress={60} color='eab308' delay={2} />
					<Skill name='Java' progress={70} color='f97316' delay={3} />
					<Skill name='TypeScript' progress={90} color='222bff' delay={4} />
					<Skill name='C++' progress={80} color='3b82f6' delay={5} />
					<Skill name='Firebase' progress={60} color='eab308' delay={6} />
					<Skill name='Java' progress={70} color='f97316' delay={7} />
				</motion.div>
			</div>
		</div>
	);
}

export default Skills;
