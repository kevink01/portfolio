import React, { useState } from 'react';
import ExperienceCard from './util/experienceCard';
import {
	ArrowLeftCircleIcon,
	ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';

function Experiences() {
	const max: number = 3;
	const [index, setIndex] = useState<number>(0);

	const next = () => {
		setIndex(index === max - 1 ? 0 : index + 1);
	};

	const prev = () => {
		setIndex(index === 0 ? max - 1 : index - 1);
	};
	return (
		<div className="flex flex-col items-center p-2 1920:space-y-10 w-screen h-screen text-white">
			<h1 className="py-1 1024:py-4 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl tracking-widest text-slate-300">
				Experience
			</h1>
			<div className="flex-1 1024:flex-initial flex flex-row justify-center items-center">
				<div className="flex justify-center mr-2">
					<button onClick={prev} className="carousel-button">
						<ArrowLeftCircleIcon />
					</button>
				</div>
				{/* Tutorial found on: https://youtu.be/XJSOgV4VELk*/}
				<div className="flex items-center overflow-hidden">
					<div
						className={`flex w-52 mobile:w-60 tablet:w-96 1024:w-128 1280:w-144 1536:w-160 1920:w-180 2560:w-300 h-104 tablet:h-150 1024:h-160 1920:h-180 2560:h-240 transition-transform ease-out duration-500`}
						style={{ transform: `translateX(-${index * 100}%)` }}>
						<ExperienceCard key={1} />
						<ExperienceCard key={2} />
						<ExperienceCard key={3} />
					</div>
				</div>
				<div className="flex justify-center ml-2">
					<button onClick={next} className="carousel-button">
						<ArrowRightCircleIcon />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Experiences;
