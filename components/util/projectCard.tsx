import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VScode from '@/public/images/vscode.png';
import Technologies from './technologies';

function ProjectCard() {
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
		<div className="flex flex-col flex-shrink-0 justify-between w-full h-full py-2 rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary">
			{/* TODO: Image sizing */}
			<div className="relative w-full h-10 1024:h-16 1920:h-20">
				<Image src={VScode.src} fill alt="Spotify" />
			</div>
			<div className="flex w-full overflow-x-hidden px-2 justify-center text-center text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl">
				<p
					className="p-2 truncate tablet:whitespace-normal"
					onClick={() => setData('Very long job title')}>
					Very long Project Title that will overflow
				</p>
			</div>
			<div className="h-1 bg-primary/75"></div>
			<div className="relative flex flex-col flex-1 px-2">
				<div className="flex flex-col flex-1">
					<p className="tablet:text-lg 1024:text-xl 1536:text-2xl font-bold">
						Project description:
					</p>
					<div className="flex-1 relative text-sm tablet:text-base 1024:text-lg 1536:text-xl">
						<div className="absolute inset-0 overflow-y-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur repudiandae placeat error asperiores quod tempore
							accusamus atque hic deleniti quos, ea quasi? Animi dolores ipsa
							incidunt unde inventore necessitatibus maxime!
						</div>
					</div>
				</div>
				<div className="tablet:text-lg 1024:text-xl 1536:text-2xl font-bold">
					<Technologies />
				</div>
				<div
					className={`${
						!show && 'opacity-0'
					} 1024:hidden absolute bottom-0 left-0 right-0 z-10 bg-red-900 transition-all ease-in-out duration-500 text-center text-black`}>
					{text}
				</div>
			</div>

			<div className="space-y-1">
				<div className="h-1 bg-primary/75"></div>
				<div className="flex flex-row justify-center space-x-2 w-full h-full">
					<Link href="#skills">
						<button className="w-20 tablet:w-30 1280:w-40 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm 1024:text-lg 1280:text-xl">
							Source code
						</button>
					</Link>
					<Link href="#skills">
						<button className="w-20 tablet:w-30 1280:w-40 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm 1024:text-lg 1280:text-xl">
							Live Demo
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
