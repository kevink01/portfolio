import React, { useState } from 'react';
import Technologies from './technologies';

function ExperienceCard() {
	const [show, setShow] = useState<boolean>(false);
	const [text, setText] = useState<string>('');

	function setData(str: string) {
		if (show === true) {
			setShow(false);
			return;
		}
		setText(str);
		setShow(true);
	}

	return (
		<div className="relative flex flex-col flex-shrink-0 w-full h-full rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary">
			<div className="flex flex-col text-center text-lg 1280:text-xl 24:text-2xl">
				<div className="flex-1 w-full h-full overflow-x-hidden px-3">
					{/* TODO Fix experience title height*/}
					<p
						className="pt-2 pb-1 truncate"
						onClick={() => setData('Very long job title')}>
						Information Technology Intern and Consultant
					</p>
				</div>
				<div className="w-full h-1 bg-primary/75"></div>
			</div>
			{/* TODO: Make text sizes proper to their emphasis */}
			<div className="px-2 w-full text-sm tablet:text-lg 1024:text-xl 24:text-2xl">
				<p
					className="italic"
					onClick={() => setData('Very long employer name')}>
					Going to try to wrap text for this employer
				</p>
				<p className="font-bold">1/1/2022 - 12/31/2022</p>
			</div>
			<div className="px-2 text-lg 1024:text-xl 1280:text-2xl font-bold">
				<Technologies />
			</div>
			<div className="flex-1 relative px-2 w-full mb-10">
				<p className="text-lg tablet:text-xl 1280:text-2xl font-bold">
					Responsibilities:
				</p>
				<div className="absolute pl-2 inset-x-0 inset-y-1 mt-6 w-full h-full overflow-y-auto">
					<ul className="marker:text-white list-disc list-inside text-xs tablet:text-base 1024:text-lg 24:text-xl">
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
			<div
				className={`${
					!show && 'opacity-0'
				} 1024:hidden absolute bottom-0 left-0 right-0 z-10 bg-red-900 transition-all ease-in-out duration-500 text-center text-black`}>
				{text}
			</div>
		</div>
	);
}

export default ExperienceCard;
