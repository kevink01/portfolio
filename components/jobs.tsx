import React from 'react';
import ExperienceCard from './util/experiencecard';

function Jobs() {
	return (
		<div className="flex flex-col items-center px-1 pt-1 space-y-2 h-screen text-white">
			<h1 className="mt-10 text-4xl tracking-widest text-slate-300">
				Experience
			</h1>
			<div className="flex flex-row justify-start space-x-8 w-full px-5 pb-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
				<ExperienceCard />
			</div>
		</div>
	);
}

export default Jobs;
