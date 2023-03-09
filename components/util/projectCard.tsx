import React from 'react';
import Image from 'next/image';
import VScode from '@/public/images/vscode.png';
import Technologies from './technologies';
import Link from 'next/link';

function ProjectCard() {
	return (
		<div className="flex flex-col flex-shrink-0 justify-between w-100 h-full rounded-20 bg-card">
			<div className="flex-1">
				<div className="relative w-full h-20">
					<Image src={VScode.src} fill alt="Spotify" />
				</div>
				<div className="flex justify-center text-2xl">Project title</div>
				<div className="h-1 bg-primary"></div>
				<div className="p-2 h-full">
					<div>
						<p className="text-xl font-bold">Project description:</p>
						<p className="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
							quas expedita voluptatum obcaecati iusto officiis ipsa, laudantium
							iure quasi mollitia eos, quae eveniet animi quisquam cupiditate
							maiores delectus labore asperiores.
						</p>
					</div>
					<Technologies />
				</div>
			</div>
			<div>
				<div className="w-full h-1 mb-1 bg-primary"></div>
				<div className="flex flex-row justify-center space-x-2 w-full h-full mb-2">
					<Link href="#skills">
						<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
							Source code
						</button>
					</Link>
					<Link href="#skills">
						<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
							Live Demo
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
