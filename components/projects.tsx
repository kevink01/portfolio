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
		<>
			<div className="flex flex-col items-center p-2 space-y-2 w-full h-screen text-white">
				<h1 className="flex items-end h-10 text-4xl tracking-widest text-slate-300">
					Projects
				</h1>
				<div className="flex justify-center w-full h-160">
					<div className="flex flex-row justify-center space-x-2 w-full h-full">
						<div className="flex items-center h-full">
							<button onClick={prev} className="carousel-button">
								<ArrowLeftCircleIcon />
							</button>
						</div>
						{/* Tutorial found on: https://youtu.be/XJSOgV4VELk*/}
						<div className="flex items-center">
							<div className="overflow-hidden relative">
								<div
									className={`flex w-160 transition-transform ease-out duration-500`}
									style={{ transform: `translateX(-${index * 100}%)` }}>
									<ProjectCard key={1} />
									<ProjectCard key={2} />
									<ProjectCard key={3} />
								</div>
							</div>
						</div>
						<div className="flex items-center h-full">
							<button onClick={next} className="carousel-button">
								<ArrowRightCircleIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
