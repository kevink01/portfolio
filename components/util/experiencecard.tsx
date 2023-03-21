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
		<div className='relative flex flex-col flex-shrink-0 w-full h-full rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary'>
			<div className='flex flex-col text-center text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
				<div className='overflow-x-hidden tablet:overflow-x-visible px-3'>
					<p
						className='pt-2 pb-2 truncate tablet:whitespace-normal'
						onClick={() => setData('Very long job title')}>
						Information Technology Intern and Consultant blah blah
					</p>
				</div>
				<div className='w-full h-1 bg-primary/75'></div>
			</div>
			<div className='flex flex-col flex-1 space-y-2 px-2 pb-2'>
				<div className='w-full'>
					<p
						className='italic tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'
						onClick={() => setData('Very long employer name')}>
						Going to try to wrap text for this employer
					</p>
					<p className='font-bold text-xs tablet:text-sm 1024:text-base 1536:text-lg 2560:text-xl'>
						1/1/2022 - 12/31/2022
					</p>
				</div>
				<div className='tablet:text-lg 1024:text-xl 1536:text-2xl font-bold'>
					<div className='inline tablet:hidden'>
						<Technologies size={30} />
					</div>
					<div className='hidden tablet:inline 2560:hidden'>
						<Technologies size={40} />
					</div>
					<div className='hidden 2560:inline'>
						<Technologies size={50} />
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<p className='tablet:text-lg 1024:text-xl 1536:text-2xl font-bold'>
						Responsibilities:
					</p>
					<div className='relative flex-1'>
						<div className='absolute inset-x-0 top-0.5 bottom-1 w-full overflow-y-auto'>
							<ul className='marker:text-white list-disc list-inside text-sm tablet:text-base 1024:text-lg 1536:text-xl'>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Reiciendis ab suscipit commodi similique.
								</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
								<li>Lorem ipsum dolor sit amet</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Debitis autem officiis saepe inventore cupiditate beatae
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Debitis autem officiis saepe inventore cupiditate beatae
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Debitis autem officiis saepe inventore cupiditate beatae
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Debitis autem officiis saepe inventore cupiditate beatae
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</li>
								<li>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Reiciendis ab suscipit commodi similique.
								</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
								<li>Lorem ipsum dolor sit amet</li>
								<li>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Excepturi possimus consequuntur dicta quidem quos officiis
									itaque reprehenderit, aut temporibus expedita fuga. Nemo porro
									error inventore tempora corporis, illo placeat quos.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`${
					!show && 'opacity-0'
				} 1024:hidden absolute bottom-0 left-0 right-0 z-10 bg-primary transition-all ease-in-out duration-500 text-center text-white`}>
				{text}
			</div>
		</div>
	);
}

export default ExperienceCard;
