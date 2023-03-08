import React from 'react';
import Project from './util/project';

function Projects() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-4 h-screen">
				<h1 className="w-full text-center text-4xl tracking-widest text-slate-300">
					Projects
				</h1>
				<div className="flex flex-row justify-start space-x-8 w-full p-5 overflow-x-scroll scroll-smooth snap-x snap-mandatory scroll-mt-10">
					<Project />
					<Project />
					<Project />
					<Project />
					<Project />
				</div>
			</div>
		</>
	);
}

export default Projects;
