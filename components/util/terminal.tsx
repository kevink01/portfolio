import React from 'react';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { BuildingOfficeIcon, ComputerDesktopIcon, PhoneIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { springAnimation, viewportOptions } from '@/utilities/animations';

function Terminal() {
	const [text] = useTypewriter({
		words: [
			'System.out.println("Hello World!");',
			'My name is Kevin Kulich!',
			'<Full-stack-developer/>',
			"console.log('TypeScript enjoyer')",
			'🎱-ball enthusiast',
		],
		loop: false,
		typeSpeed: 50,
		deleteSpeed: 20,
		delaySpeed: 2000,
	});
	return (
		<motion.div
			className='bg-[#262626] text-white rounded-xl flex flex-col w-full h-full'
			variants={springAnimation(-1, 1)}
			initial='hidden'
			whileInView='show'
			viewport={viewportOptions}>
			<div className='bg-[#2F2F2F] rounded-t-xl relative flex flex-row items-center w-full px-2'>
				<div className='absolute flex flex-row space-x-2 1536:space-x-3'>
					<div className='bg-[#FE5E56] terminal-icon'></div>
					<div className='bg-[#FCBC2D] terminal-icon'></div>
					<div className='bg-[#26C940] terminal-icon'></div>
				</div>
				<span className='flex justify-center items-center w-full text-xs mobile:text-base tablet:text-lg 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
					Kevin Kulich
				</span>
			</div>
			<div className='1920:flex flex-1 1920:flex-col space-y-1 1920:space-y-2 overflow-y-auto w-full h-3/4 1024:h-auto pt-px px-px 1920:px-2 text-xs mobile:text-base tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl'>
				<p>
					Hello, my name is Kevin Kulich and I&apos;m currently a 3rd year computer science major at Michigan
					Technological University, with a minor in Mathematics.
				</p>
				<p>
					I have been a programmer for over 4 years, with a passion for front-end development. I have a wide range of
					programming languages that I&apos;m familiar with, including Python (my first language), Java, and TypeScript
					(my favorite language). I like to program some personal projects on the side to express my interests in
					programming.
				</p>
				<p>
					Besides programming personal projects, I enjoy playing bowling and pool, watching sitcoms, and going on hikes.
				</p>
			</div>
			<div className='text-xs mobile:text-base tablet:text-lg 1024:text-xl 1920:text-2xl'>
				<span className='text-primary'>$ </span>
				<span>{text}</span>
				<Cursor cursorBlinking={true} cursorColor='#222BFF' />
			</div>
			<div className='w-full h-1 bg-primary'></div>
			<div className='rounded-b-xl flex flex-row justify-between items-center w-full h-16 px-4'>
				<Link href='#experience'>
					<button className='terminal-button'>
						<div className='flex justify-center items-center w-full h-full'>
							<BuildingOfficeIcon
								className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto h-3/5 1280:h-1/2 mx-2'
								aria-label='Experience'
							/>
							<p className='hidden tablet:inline truncate p-2 1280:p-0 1280:pr-1'>Experience</p>
						</div>
					</button>
				</Link>
				<Link href='#projects'>
					<button className='terminal-button'>
						<div className='flex justify-center items-center w-full h-full'>
							<ComputerDesktopIcon
								className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto h-3/5 1280:h-1/2 mx-2'
								aria-label='Projects'
							/>
							<p className='hidden tablet:inline truncate p-2 1280:p-0 1280:pr-1'>Projects</p>
						</div>
					</button>
				</Link>
				<Link href='#skills'>
					<button className='terminal-button'>
						<div className='flex justify-center items-center w-full h-full'>
							<WrenchScrewdriverIcon
								className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto h-3/5 1280:h-1/2 mx-2'
								aria-label='Skills'
							/>
							<p className='hidden tablet:inline truncate p-2 1280:p-0 1280:pr-1'>Skills</p>
						</div>
					</button>
				</Link>
				<Link href='#contact'>
					<button className='terminal-button'>
						<div className='flex justify-center items-center w-full h-full'>
							<PhoneIcon
								className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto h-3/5 1280:h-1/2 mx-2'
								aria-label='Skills'
							/>
							<p className='hidden tablet:inline truncate p-2 1280:p-0 1280:pr-1'>Contact</p>
						</div>
					</button>
				</Link>
			</div>
		</motion.div>
	);
}

export default Terminal;
