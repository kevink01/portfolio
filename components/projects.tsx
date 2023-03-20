import React, { useState } from 'react';
import ProjectCard from './util/projectCard';
import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

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
		<div className="flex flex-col items-center p-2 24:space-y-10 w-screen h-screen text-white">
			<h1 className="flex items-end h-10 1024:h-12 text-xl tablet:text-2xl 1024:text-3xl 24:text-4xl tracking-widest text-slate-300">
				Projects
			</h1>
			<div className="flex flex-1 24:flex-grow-0 flex-row justify-center space-x-2 w-full h-auto 24:h-160">
				<div className="flex items-center">
					<button onClick={prev} className="carousel-button">
						<ArrowLeftCircleIcon />
					</button>
				</div>
				{/* Tutorial found on: https://youtu.be/XJSOgV4VELk*/}
				<div className="relative flex items-center overflow-hidden">
					<div
						className={`flex w-52 tablet:w-80 1024:w-120 1280:w-144 24:w-160 h-104 tablet:h-160 transition-transform ease-out duration-500`}
						style={{ transform: `translateX(-${index * 100}%)` }}>
						<ProjectCard key={1} />
						<ProjectCard key={2} />
						<ProjectCard key={3} />
					</div>
				</div>
				<div className="flex items-center">
					<button onClick={next} className="carousel-button">
						<ArrowRightCircleIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Projects;
