import React from 'react';
import Technologies from './technologies';

function ExperienceCard() {
	return (
		<div className="flex flex-col flex-shrink-0 w-full h-full rounded-20 bg-card">
			<div className="flex flex-col h-1/6 24:h-1/10">
				<div className="flex flex-1 items-center justify-center text-lg 24:text-2xl">
					Job title
				</div>
				<div className="h-1 bg-primary"></div>
			</div>
			<div className="pl-2 h-1/6 24:h-1/10">
				<p className="italic 24:text-2xl">Employer name</p>
				<p className="font-bold text-sm 24:text-base">1/1/2022 - 12/31/2022</p>
			</div>
			<div className="text-lg 24:text-xl font-bold">
				<div className="px-2 h-1/6 24:h-full">
					<Technologies />
				</div>
			</div>

			<div className="relative px-2 w-full h-1/2 24:h-7/10 mb-10">
				<p className="text-lg 24:text-xl font-bold">Responsibilities</p>
				<div className="absolute pl-2 inset-x-0 inset-y-1 mt-6 w-full h-full overflow-y-auto">
					<ul className="list-disc list-inside text-xs 24:text-base">
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
		</div>
	);
}

export default ExperienceCard;
