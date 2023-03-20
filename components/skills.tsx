import React from 'react';

function Skills() {
	return (
		<div className="flex flex-col items-center p-2 space-y-2 w-screen h-screen text-white">
			<h1 className="flex items-end h-10 text-xl tablet:text-2xl 1920:text-4xl tracking-widest text-slate-300">
				Skills
			</h1>
			{/* TODO: Fix graph (use absolute for outline)*/}
			<div className="flex flex-col w-full h-full rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary">
				<div className="flex flex-row w-full h-9/10">
					<div className="flex flex-col justify-between py-2 pl-2 w-1/4 h-full text-sm tablet:text-base 1920:text-2xl overflow-hidden">
						<span className="skill-label">TypeScript</span>
						<span className="skill-label">Java</span>
						<span className="skill-label">Excel</span>
						<span className="skill-label">Firebase</span>
						<span className="skill-label">TypeScript</span>
						<span className="skill-label">Java</span>
						<span className="skill-label">Excel</span>
						<span className="skill-label">Firebase</span>
						<span className="skill-label">TypeScriptTypeScript</span>
						<span className="skill-label">Java</span>
					</div>
					<div className="flex flex-col flex-1 justify-between pl-1 pr-2 py-2 border-l-2 border-b-2">
						<div className="w-[90%] h-10 rounded-r-xl bg-primary motion-safe:hover:bg-primary/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">90%</span>
						</div>
						<div className="w-[80%] h-10 rounded-r-xl bg-orange-500 motion-safe:hover:bg-orange-500/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">80%</span>
						</div>
						<div className="w-[85%] h-10 rounded-r-xl bg-green-500 motion-safe:hover:bg-green-500/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">85%</span>
						</div>
						<div className="w-[60%] h-10 rounded-r-xl bg-yellow-500 motion-safe:hover:bg-yellow-500/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">60%</span>
						</div>
						<div className="w-[90%] h-10 rounded-r-xl bg-primary motion-safe:hover:bg-primary/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">90%</span>
						</div>
						<div className="w-[80%] h-10 rounded-r-xl bg-orange-500 motion-safe:hover:bg-orange-500/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">80%</span>
						</div>
						<div className="w-[85%] h-10 rounded-r-xl bg-green-500 hover:bg-green-500/70 hover:scale-[101%] transition ease-in-out duration-500">
							<span className="skill-value-label">85%</span>
						</div>
						<div className="w-[60%] h-10 rounded-r-xl bg-yellow-500 hover:bg-yellow-500/70 hover:scale-[101%] transition ease-in-out duration-500">
							<span className="skill-value-label">60%</span>
						</div>
						<div className="w-[90%] h-10 rounded-r-xl bg-primary motion-safe:hover:bg-primary/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">90%</span>
						</div>
						<div className="w-[80%] h-10 rounded-r-xl bg-orange-500 motion-safe:hover:bg-orange-500/70 motion-safe:hover:scale-[101%] motion-safe:transition ease-in-out motion-safe:duration-500">
							<span className="skill-value-label">80%</span>
						</div>
					</div>
				</div>
				{/* TODO Fix progress bars */}
				<div className="flex flex-row h-[10%]">
					<div className="w-1/4 h-full"></div>
					<div className="flex flex-1 justify-end items-end pr-2 h-full text-xs 1920:text-lg">
						<span className="skill-progress-label">10%</span>
						<span className="skill-progress-label">20%</span>
						<span className="skill-progress-label">30%</span>
						<span className="skill-progress-label">40%</span>
						<span className="skill-progress-label">50%</span>
						<span className="skill-progress-label">60%</span>
						<span className="skill-progress-label">70%</span>
						<span className="skill-progress-label">80%</span>
						<span className="skill-progress-label">90%</span>
						<span className="skill-progress-label">100%</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
