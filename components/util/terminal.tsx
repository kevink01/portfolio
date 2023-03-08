import React from 'react';
import Link from 'next/link';
import { Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

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
			<div className="relative flex flex-row items-center w-full h-8 px-2 my-auto rounded-t-xl bg-[#2F2F2F]">
				<div className="absolute flex flex-row space-x-2">
					<div className="w-4 h-4 rounded-full bg-[#FE5E56]"></div>
					<div className="w-4 h-4 rounded-full bg-[#FCBC2D]"></div>
					<div className="w-4 h-4 rounded-full bg-[#26C940]"></div>
				</div>
				<span className="flex justify-center w-full h-full text-xl">
					Kevin Kulich
				</span>
			</div>
			<div className="flex flex-1 flex-col w-full pt-2 px-2 space-y-2">
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
				<div>
					<span className="text-primary">$</span>
					<Cursor cursorColor="#B77A03" />
				</div>
			</div>
			<div className="w-full h-1 bg-primary"></div>
			<div className="flex flex-row justify-between items-center w-full h-16 px-2 rounded-b-xl">
				<Link href="#experience">
					<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
						Experience
					</button>
				</Link>
				<Link href="#projects">
					<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
						Projects
					</button>
				</Link>
				<Link href="#skills">
					<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
						Skills
					</button>
				</Link>
				<Link href="#contact">
					<button className="w-30 h-10 rounded-20 bg-secondary transition duration-500 ease-in-out hover:scale-110 hover:bg-secondaryHover">
						Contact
					</button>
				</Link>
			</div>
		</motion.div>
	);
}

export default Terminal;
