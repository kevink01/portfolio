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
		<div className="flex flex-col flex-shrink-0 justify-between w-full h-full rounded-20 bg-card">
			<div className="relative">
				<div className="relative w-full h-10 24:h-20">
					<Image src={VScode.src} fill alt="Spotify" />
				</div>
				<div className="flex w-full overflow-x-hidden px-2 justify-center text-lg 24:text-2xl">
					<p
						className="py-2 truncate underline tablet:no-underline underline-offset-8 decoration-secondary decoration-2"
						onClick={() => setData('Very long job title')}>
						Very long Project Title
					</p>
				</div>
				<div className="h-1 bg-primary"></div>
				<div className="p-2 w-full h-full">
					<div>
						<p className="text-base 24:text-xl font-bold">
							Project description:
						</p>
						<p className="text-xs 24:text-base 24:text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
							quas expedita voluptatum obcaecati iusto officiis ipsa, laudantium
							iure quasi mollitia eos, quae eveniet animi quisquam cupiditate
							maiores delectus labore asperiores.
						</p>
					</div>
					<Technologies />
				</div>
				<div
					className={`${
						!show && 'opacity-0'
					} tablet:hidden absolute bottom-0 left-0 right-0 z-10 bg-red-900 transition-all ease-in-out duration-500 text-center text-black`}>
					{text}
				</div>
			</div>
			<div>
				<div className="w-full h-1 mb-2 bg-primary"></div>
				<div className="flex flex-row justify-center space-x-2 w-full h-full mb-2">
					<Link href="#skills">
						<button className="w-20 24:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm 24:text-base">
							Source code
						</button>
					</Link>
					<Link href="#skills">
						<button className="w-20 24:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm 24:text-base">
							Live Demo
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
