import React from 'react';
import Technologies from './technologies';

function ExperienceCard() {
	return (
		<div className="flex flex-col flex-shrink-0 w-100 h-112 rounded-20 bg-card">
			<div className="flex justify-center text-2xl">Job title</div>
			<div className="h-1 bg-primary"></div>
			<div className="flex flex-col pl-2 space-y-1 h-full">
				<div>
					<p className="italic">Employer name</p>
					<p className="font-bold">1/1/2022 - 12/31/2022</p>
				</div>
				<Technologies />
				<div>
					<p className="text-xl font-bold">Responsibilities</p>
					<div className="w-full h-3/5 overflow-y-auto">
						<ul className="list-disc list-inside">
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reiciendis ab suscipit commodi similique.
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
						</ul>
					</div>
				</div>
				{/* <div>
					<p className="text-xl font-bold">Responsibilities</p>
					<div className="flex-1 overflow-y-auto scroll-smooth">
						<ul className="list-disc list-inside">
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reiciendis ab suscipit commodi similique.
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
							<li>Lorem ipsum dolor sit amet</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
								autem officiis saepe inventore cupiditate beatae
							</li>
						</ul>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default ExperienceCard;
