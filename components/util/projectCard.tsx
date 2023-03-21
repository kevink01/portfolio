import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Picture from '@/public/images/picture.jpg';
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
		<div className='flex flex-col flex-shrink-0 justify-between w-full h-full py-2 rounded-20 bg-gradient-to-b from-card/50 via-primary/10 to-primary'>
			<div className='flex justify-center'>
				<div className='relative w-32 mobile:w-40 tablet:w-56 1024:w-64 1280:w-72 1920:w-80 2560:w-96 h-16 mobile:h-20 tablet:h-28 1024:h-32 1280:h-36 1920:h-40 2560:h-48'>
					<Image src={Picture.src} fill alt='Spotify' />
				</div>
			</div>
			<div className='flex w-full overflow-x-hidden px-2 justify-center text-center text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
				<p
					className='p-2 truncate tablet:whitespace-normal'
					onClick={() => setData('Very long job title')}>
					Very long Project Title that will overflow
				</p>
			</div>
			<div className='h-1 bg-primary/75'></div>
			<div className='relative flex flex-col flex-1 px-2'>
				<div className='flex flex-col flex-1'>
					<p className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'>
						Project description:
					</p>
					<div className='flex-1 relative text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
						<div className='absolute inset-0 overflow-y-auto'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur repudiandae placeat error asperiores quod tempore
							accusamus atque hic deleniti quos, ea quasi? Animi dolores ipsa
							incidunt unde inventore necessitatibus maxime!
						</div>
					</div>
				</div>
				<div className='tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl font-bold'>
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
				<div
					className={`${
						!show && 'opacity-0'
					} 1024:hidden absolute bottom-0 left-0 right-0 z-10 bg-red-900 transition-all ease-in-out duration-500 text-center text-black`}>
					{text}
				</div>
			</div>

			<div className='space-y-1'>
				<div className='h-1 bg-primary/75'></div>
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
