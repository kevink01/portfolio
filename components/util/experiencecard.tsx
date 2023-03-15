import React from 'react';
import Technologies from './technologies';

function ExperienceCard() {
	return (
		<div className="flex flex-col flex-shrink-0 w-160 h-160 rounded-20 bg-card">
			<div className="flex flex-col h-1/10">
				<div className="flex flex-1 items-center justify-center text-2xl">
					Job title
				</div>
				<div className="h-1 bg-primary"></div>
			</div>
			<div className="pl-2 h-1/10">
				<p className="italic text-2xl">Employer name</p>
				<p className="font-bold">1/1/2022 - 12/31/2022</p>
			</div>
			<div className="pl-2 h-1/10">
				<Technologies />
			</div>
			<div className="relative pl-2 h-7/10">
				<p className="text-xl font-bold">Responsibilities</p>
				<div className="absolute inset-x-1 inset-y-1 mt-6 w-full overflow-y-auto">
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
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis ab suscipit commodi similique.
						</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
						<li>Lorem ipsum dolor sit amet</li>
						<li>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Excepturi possimus consequuntur dicta quidem quos officiis itaque
							reprehenderit, aut temporibus expedita fuga. Nemo porro error
							inventore tempora corporis, illo placeat quos.
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
	);
}

export default ExperienceCard;
