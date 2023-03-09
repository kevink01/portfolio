import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import VScode from '@/public/images/vscode.png';

function Project() {
	return (
		<div className="flex flex-col flex-shrink-0 content-between w-104 xl:w-120 2xl:w-150 h-104 xl:h-120 2xl:h-150 p-2 rounded-3xl text-sm bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer snap-start">
			<div className="space-y-3 h-full text-white">
				<div className="relative w-full h-20">
					<Image src={VScode.src} fill alt="Spotify" />
				</div>
				<h1 className="mt-2 text-center text-2xl font-bold">Spotify++</h1>
				<div>
					<span className="text-lg font-semibold">Technologies used:</span>
					<div className="flex flex-row space-x-1">
						<Image src={VScode.src} width={24} height={24} alt="Tech" />
						<Image src={VScode.src} width={24} height={24} alt="Tech" />
						<Image src={VScode.src} width={24} height={24} alt="Tech" />
						<Image src={VScode.src} width={24} height={24} alt="Tech" />
						<Image src={VScode.src} width={24} height={24} alt="Tech" />
					</div>
				</div>
				<p className="flex text-justify">
					Spotify++ is a clone of the spotify application. Utilizes the Spotify
					API to display your account information.
				</p>
				<div>
					<p className="text-lg font-semibold">Key points</p>
					<ul className="relative list-disc list-inside h-fit overflow-hidden">
						<li>Control the music you&apos;re playing on an active device</li>
						<li>Create & modify playlist details and contents</li>
						<li>View recently played songs</li>
						<li>View artist and album details</li>
					</ul>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full h-1 mb-1 bg-yellow-700"></div>
				<div className="flex justify-center space-x-2 w-full">
					<Link href="https://github.com/kevink01/SpotifyAngular">
						<button className="px-6 py-2 rounded-xl bg-yellow-700">
							Source code
						</button>
					</Link>
					<Link href="https://github.com/kevink01/SpotifyAngular">
						<button className="px-6 py-2 rounded-xl bg-yellow-700">
							Live demo
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Project;
