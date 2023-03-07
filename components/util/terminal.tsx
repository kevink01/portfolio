import React from 'react';
import { Cursor } from 'react-simple-typewriter';
import styles from '@/styles/Home.module.css';
import { motion } from 'framer-motion';

function Terminal() {
	return (
		<div className={styles.terminal}>
			<motion.div
				className="flex flex-col items-center text-white"
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
					opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
				}}
				transition={{
					ease: 'linear',
					duration: 1.5,
				}}>
				<div className="w-96 relative py-2 px-2 rounded-lg ring-2 ring-yellow-700 ring-offset-4 ring-offset-transparent">
					<div className="flex items-center relative w-full h-6 rounded-t-xl bg-true-grey">
						<div className="flex flex-row space-x-2 pl-2">
							<div className="w-4 h-4 rounded-full bg-red-500"></div>
							<div className="w-4 h-4 rounded-full bg-yellow-500"></div>
							<div className="w-4 h-4 rounded-full bg-green-500"></div>
						</div>
						<div className="flex justify-center absolute w-full">
							<span>Kevin Kulich</span>
						</div>
					</div>
					<div className="w-full h-72 rounded-b-xl bg-terminal-grey mb-2">
						<div className="w-full px-1 pt-2 space-y-2">
							<p>
								My name is Kevin Kulich, and I&apos;m a 3rd year computer
								science major at Michigan Technological University.
							</p>
							<p>
								A good programmer is able to write clean code. A great
								programmer is able to understand their code.
							</p>
							<p>Let&apos;s get started</p>
							<span className="text-blue-500">$</span>
							<Cursor cursorColor="#fff077" />
						</div>
					</div>
					<div className="flex justify-between items-center w-full px-3 py-2 space-x-3 border-t-2 border-yellow-700">
						<a href="#about">
							<button className="w-16 py-3 flex justify-center rounded-xl bg-yellow-600 hover:bg-yellow-700 text-black text-xs lg:text-xs">
								About
							</button>
						</a>
						<a href="#projects">
							<button className="w-16 py-3 flex justify-center rounded-xl bg-yellow-600 hover:bg-yellow-700 text-black text-xs lg:text-xs">
								Projects
							</button>
						</a>
						<a href="#experience">
							<button className="w-20 py-3 flex justify-center rounded-xl bg-yellow-600 hover:bg-yellow-700 text-black text-xs lg:text-xs">
								Experience
							</button>
						</a>
						<a href="skills">
							<button className="w-16 py-3 flex justify-center rounded-xl bg-yellow-600 hover:bg-yellow-700 text-black text-xs lg:text-xs">
								Skills
							</button>
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Terminal;
