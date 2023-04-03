import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Technologies from './technologies';
import Picture from '@/public/images/spotify.png';

function ProjectCard() {
	return (
		<div className='flex flex-col flex-shrink-0 w-full h-full py-2 rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary'>
			<div className='flex flex-col flex-1'>
				{/* TODO Image sizing */}
				<div className='relative w-1/2 h-1/5 mx-auto'>
					<Image src={Picture.src} fill alt='Spotify' />
				</div>
				<div className='w-full px-2 text-center text-xl'>
					<p className='p-2'>Very long Project Title that will overflow</p>
				</div>
				<div className='h-1 bg-primary/75'></div>
				<div className='relative flex-1'>
					<div className='absolute inset-0 overflow-y-auto'>
						<div>
							<p className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'>
								Project description:
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consectetur repudiandae placeat error asperiores quod tempore
								accusamus atque hic deleniti quos, ea quasi? Animi dolores ipsa
								incidunt unde inventore necessitatibus maxime!
							</p>
						</div>
						<div className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'>
							<Technologies size={30} />
						</div>
					</div>
				</div>
			</div>
			<div className='space-y-1'>
				<div className='h-1 bg-black/75'></div>
				<div className='flex flex-row justify-center space-x-2 w-full h-full'>
					<Link href='#skills'>
						<button className='w-20 tablet:w-30 1536:w-40 2560:w-60 h-10 2560:h-12 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
							Source code
						</button>
					</Link>
					<Link href='#skills'>
						<button className='w-20 tablet:w-30 1536:w-40 2560:w-60 h-10 2560:h-12 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
							Live Demo
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
