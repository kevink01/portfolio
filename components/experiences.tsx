import React, { useState } from 'react';
import ExperienceCard from './util/experiencecard';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';

function Experiences() {
	const max: number = 3;
	const [transitioning, setTransitioning] = useState<boolean>(false);
	const [index, setIndex] = useState<number>(0);

	const next = () => {
		setIndex(index === max - 1 ? 0 : index + 1);
		setTransitioning(true);
		setTimeout(() => {
			setTransitioning(false);
		}, 500);
	};

	const prev = () => {
		setIndex(index === 0 ? max - 1 : index - 1);
		setTransitioning(true);
		setTimeout(() => {
			setTransitioning(false);
		}, 500);
	};

	return (
		<div className='flex flex-col items-center p-2 1920:space-y-10 w-screen h-screen'>
			<h1 className='text-slate-300 py-1 1024:py-4 tracking-widest text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
				Experience
			</h1>
			<div className='flex-1 flex flex-row items-center w-full max-w-2xl px-2'>
				<div className='flex mr-2'>
					<button onClick={prev} className='carousel-button' disabled={transitioning}>
						<ArrowLeftCircleIcon />
					</button>
				</div>
				{/* Tutorial found on: https://youtu.be/XJSOgV4VELk*/}
				<div className='relative flex-1 flex items-center overflow-hidden h-full'>
					<div
						className={`flex w-full h-full max-h-176 motion-safe:transition-transform motion-safe:ease-out motion-safe:duration-500`}
						style={{ transform: `translateX(-${index * 100}%)` }}>
						<ExperienceCard />
						<ExperienceCard />
						<ExperienceCard />
					</div>
				</div>
				<div className='flex ml-2'>
					<button onClick={next} className='carousel-button' disabled={transitioning}>
						<ArrowRightCircleIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Experiences;
