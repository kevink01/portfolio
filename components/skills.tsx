import React from 'react';
import Skill from './util/skill';
import { motion } from 'framer-motion';

function Skills() {
	const skillAnimate = {
		offscreen: { opacity: 0 },
		onscreen: {
			opacity: 1,
			duration: 1,
		},
	};

	return (
		<div className='flex flex-col items-center px-2 pt-2 pb-4 space-y-2 w-screen h-screen text-white'>
			<h1 className='py-1 1024:py-4 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl tracking-widest text-slate-300'>
				Skills
			</h1>
			<div className='flex flex-col w-full h-full rounded-20 p-2 bg-gradient-to-b from-card/50 via-primary/10 to-primary overflow-y-auto'>
				<motion.div
					className='flex flex-col justify-between h-full w-full py-2 text-xs 1024:text-base 1536:text-lg 2560:text-xl'
					initial={'offscreen'}
					whileInView={'onscreen'}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ staggerChildren: 0.3 }}>
					<motion.div variants={skillAnimate}>
						<Skill name='TypeScript' progress={90} color='222bff' delay={0} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='C++' progress={80} color='3b82f6' delay={1} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='Firebase' progress={60} color='eab308' delay={2} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='Java' progress={70} color='f97316' delay={3} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='TypeScript' progress={90} color='222bff' delay={4} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='C++' progress={80} color='3b82f6' delay={5} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='Firebase' progress={60} color='eab308' delay={6} />
					</motion.div>
					<motion.div variants={skillAnimate}>
						<Skill name='Java' progress={70} color='f97316' delay={7} />
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default Skills;
