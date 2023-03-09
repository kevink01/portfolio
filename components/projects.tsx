import React from 'react';
import ProjectCard from './util/projectCard';

function Projects() {
	return (
		<>
			<div className="flex flex-col items-center p-2 space-y-2 h-screen text-white">
				<h1 className="flex items-end h-10 text-4xl tracking-widest text-slate-300">
					Projects
				</h1>
				<div className="flex flex-row justify-start space-x-8 px-5 pt-2 pb-5 w-full h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory">
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
		</>
	);
}

export default Projects;
