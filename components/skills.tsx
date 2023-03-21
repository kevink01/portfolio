import React from 'react';
import Skill from './util/skill';

function Skills() {
	return (
		<div className='flex flex-col items-center px-2 pt-2 pb-4 space-y-2 w-screen h-screen text-white'>
			<h1 className='py-1 1024:py-4 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl tracking-widest text-slate-300'>
				Skills
			</h1>
			<div className='flex flex-col w-full h-full rounded-20 p-2 bg-gradient-to-b from-card/50 via-primary/10 to-primary'>
				<div className='flex flex-col justify-between w-full h-9/10 py-2 text-xs 1024:text-base 1536:text-lg 2560:text-xl'>
					<Skill name='TypeScript' progress={90} color='222bff' />
					<Skill name='C++' progress={80} color='3b82f6' />
					<Skill name='Firebase' progress={60} color='eab308' />
					<Skill name='Java' progress={70} color='f97316' />
					<Skill name='TypeScript' progress={90} color='222bff' />
					<Skill name='C++' progress={80} color='3b82f6' />
					<Skill name='Firebase' progress={60} color='eab308' />
					<Skill name='Java' progress={70} color='f97316' />
					<Skill name='TypeScript' progress={90} color='222bff' />
					<Skill name='C++' progress={80} color='3b82f6' />
					<Skill name='Firebase' progress={60} color='eab308' />
					<Skill name='Java' progress={70} color='f97316' />
					<Skill
						name='React / NextJS / TypeScript'
						progress={90}
						color='222bff'
					/>
					<Skill name='C++' progress={80} color='3b82f6' />
					<Skill name='Firebase' progress={60} color='eab308' />
					<Skill name='Java' progress={70} color='f97316' />
				</div>
				<div className='h-1/10 ml-[25%]'>
					{/* TODO Fix progress bar */}
					<div className='flex flex-1 justify-end items-end h-full text-xs 1920:text-lg'>
						<span className='skill-progress-label'>10%</span>
						<span className='skill-progress-label'>20%</span>
						<span className='skill-progress-label'>30%</span>
						<span className='skill-progress-label'>40%</span>
						<span className='skill-progress-label'>50%</span>
						<span className='skill-progress-label'>60%</span>
						<span className='skill-progress-label'>70%</span>
						<span className='skill-progress-label'>80%</span>
						<span className='skill-progress-label'>90%</span>
						<span className='skill-progress-label'>100%</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
