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

function Terminal() {
	return (
		<motion.div
			className="flex flex-col w-full h-full rounded-xl bg-[#262626] text-white"
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
				opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
			}}
			transition={{
				ease: 'linear',
				duration: 1.5,
			}}>
			<div className="relative flex flex-row items-center w-full px-2 rounded-t-xl bg-[#2F2F2F]">
				<div className="absolute flex flex-row space-x-2">
					<div className="w-2 tablet:w-4 h-2 tablet:h-4 rounded-full bg-[#FE5E56]"></div>
					<div className="w-2 tablet:w-4 h-2 tablet:h-4 rounded-full bg-[#FCBC2D]"></div>
					<div className="w-2 tablet:w-4 h-2 tablet:h-4 rounded-full bg-[#26C940]"></div>
				</div>
				<span className="flex justify-center items-center w-full text-xs tablet:text-xl">
					Kevin Kulich
				</span>
			</div>
			<div className="inline 1920:flex 1024:flex-1 1920:flex-col w-full pt-px 1920:pt-2 px-px 1920:px-2 space-y-1 1920:space-y-2 text-xs mobile:text-base tablet:text-lg 1024:text-xl 1920:text-2xl h-3/4 1024:h-auto overflow-y-auto">
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
			<div className="text-xs mobile:text-base tablet:text-lg 1024:text-xl 1920:text-2xl">
				<span className="text-primary">$</span>
				<Cursor cursorColor="#B77A03" />
			</div>
			<div className="w-full h-1 bg-primary"></div>
			<div className="flex flex-row justify-between items-center w-full h-16 px-2 rounded-b-xl">
				<Link href="#experience">
					<button className="w-10 tablet:w-24 1024:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover 1024:text-lg">
						<p className="hidden tablet:inline">Experience</p>
						<BuildingOfficeIcon
							className="inline tablet:hidden w-3/5 h-3/5"
							aria-label="Experience"
						/>
					</button>
				</Link>
				<Link href="#projects">
					<button className="w-10 tablet:w-24 1024:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover 1024:text-lg">
						<p className="hidden tablet:inline">Projects</p>
						<ComputerDesktopIcon
							className="inline tablet:hidden w-3/5 h-3/5"
							aria-label="Projects"
						/>
					</button>
				</Link>
				<Link href="#skills">
					<button className="w-10 tablet:w-24 1024:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover 1024:text-lg">
						<p className="hidden tablet:inline">Skills</p>
						<WrenchScrewdriverIcon
							className="inline tablet:hidden w-3/5 h-3/5"
							aria-label="Skills"
						/>
					</button>
				</Link>
				<Link href="#contact">
					<button className="w-10 tablet:w-24 1024:w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover 1024:text-lg">
						<p className="hidden tablet:inline">Contact</p>
						<PhoneIcon
							className="inline tablet:hidden w-3/5 h-3/5"
							aria-label="Skills"
						/>
					</button>
				</Link>
			</div>
		</motion.div>
	);
}

export default Terminal;
