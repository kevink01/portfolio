import React, { useState } from 'react';
import ProjectCard from './util/projectCard';
import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import Test from '@/components/util/test';

function Projects() {
	const max: number = 3;
	const [index, setIndex] = useState<number>(0);

	const next = () => {
		setIndex(index === max - 1 ? 0 : index + 1);
	};

	const prev = () => {
		setIndex(index === 0 ? max - 1 : index - 1);
	};

	return (
		<div className='flex flex-col items-center p-2 1920:space-y-10 w-screen h-screen text-white'>
			<h1 className='py-1 1024:py-4 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl tracking-widest text-slate-300'>
				Projects
			</h1>
			<div className='flex-1 flex flex-row justify-center items-center w-full px-2 max-w-2xl'>
				<div className='flex items-center mr-2'>
					<button onClick={prev} className='carousel-button'>
						<ArrowLeftCircleIcon />
					</button>
				</div>
				{/* Tutorial found on: https://youtu.be/XJSOgV4VELk*/}
				<div className='relative flex flex-row flex-1 h-full items-center overflow-hidden'>
					<div
						className='flex w-full h-full max-h-150 transition-transform ease-out duration-500'
						style={{ transform: `translateX(-${index * 100}%)` }}>
						<ProjectCard key={1} />
						<ProjectCard key={2} />
						<ProjectCard key={3} />
					</div>
				</div>
				<div className='flex items-center ml-2'>
					<button onClick={next} className='carousel-button'>
						<ArrowRightCircleIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Projects;
