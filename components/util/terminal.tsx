import React from 'react';
import Link from 'next/link';
import { Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import {
	BuildingOfficeIcon,
	ComputerDesktopIcon,
	PhoneIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/solid';
import { profileAnimation, viewportOptions } from '@/utilities/animations';

function Terminal() {
	return (
		<motion.div
			className='flex flex-col w-full h-full rounded-xl bg-[#262626] text-white'
			variants={profileAnimation(-1)}
			initial='hidden'
			whileInView='show'
			viewport={viewportOptions}>
			<div className='relative flex flex-row items-center w-full px-2 rounded-t-xl bg-[#2F2F2F]'>
				<div className='absolute flex flex-row space-x-2 1536:space-x-3'>
					<div className='terminal-icon bg-[#FE5E56]'></div>
					<div className='terminal-icon bg-[#FCBC2D]'></div>
					<div className='terminal-icon bg-[#26C940]'></div>
				</div>
				<span className='flex justify-center items-center w-full text-xs mobile:text-base tablet:text-lg 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
					Kevin Kulich
				</span>
			</div>
			<div className='inline 1920:flex 1024:flex-1 1920:flex-col w-full pt-px px-px 1920:px-2 space-y-1 1920:space-y-2 text-xs mobile:text-base tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl h-3/4 1024:h-auto overflow-y-auto'>
				<p>
					Hello, my name is Kevin Kulich and I&apos;m currently a 3rd year
					computer science major at Michigan Technological University, with a
					minor in Mathematics.
				</p>
				<p>
					I have been a programmer for over 4 years, with a passion for
					front-end development. I have a wide range of programming languages
					that I&apos;m familiar with, including Python (my first language),
					Java, and TypeScript (my favorite language). I like to program some
					personal projects on the side to express my interests in programming.
				</p>
				<p>
					Besides programming personal projects, I enjoy playing bowling and
					pool, watching sitcoms, and going on hikes.
				</p>
			</div>
			<div className='text-xs mobile:text-base tablet:text-lg 1024:text-xl 1920:text-2xl'>
				<span>$</span>
				<Cursor cursorColor='#222BFF' />
			</div>
			<div className='w-full h-1 bg-primary'></div>
			<div className='flex flex-row justify-between items-center w-full h-16 px-2 rounded-b-xl'>
				<Link href='#experience'>
					<button className='terminal-button truncate overflow-hidden'>
						<BuildingOfficeIcon
							className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto mx-2 h-3/5 1280:h-1/2'
							aria-label='Experience'
						/>
						<p className='hidden tablet:inline'>Experience</p>
					</button>
				</Link>
				<Link href='#projects'>
					<button className='terminal-button'>
						<ComputerDesktopIcon
							className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto mx-2 h-3/5 1280:h-1/2'
							aria-label='Projects'
						/>
						<p className='hidden tablet:inline'>Projects</p>
					</button>
				</Link>
				<Link href='#skills'>
					<button className='terminal-button'>
						<WrenchScrewdriverIcon
							className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto mx-2 h-3/5 1280:h-1/2'
							aria-label='Skills'
						/>
						<p className='hidden tablet:inline'>Skills</p>
					</button>
				</Link>
				<Link href='#contact'>
					<button className='terminal-button'>
						<PhoneIcon
							className='inline tablet:hidden 1280:inline w-3/5 1280:w-auto mx-2 h-3/5 1280:h-1/2'
							aria-label='Skills'
						/>
						<p className='hidden tablet:inline'>Contact</p>
					</button>
				</Link>
			</div>
		</motion.div>
	);
}

export default Terminal;
