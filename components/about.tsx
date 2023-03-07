import React from 'react';
import { motion } from 'framer-motion';
import Kevin from '@/public/images/Kevin.jpg';

function About() {
	return (
		<div className="flex flex-col justify-center items-center space-y-4 h-screen">
			<h1 className="w-full text-center text-4xl tracking-widest text-slate-300">
				About
			</h1>
			<div className="flex justify-center items-center space-x-4 text-white">
				<motion.img
					src={Kevin.src}
					className="w-72 h-96 rounded-2xl"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}
				/>
				<motion.div
					className="max-w-2xl text-justify"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1 } }}
					viewport={{ once: true }}>
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
						personal projects on the side to express my interests in
						programming.
					</p>
					<p>
						Besides programming personal projects, I enjoy playing bowling and
						pool, watch sitcoms, and going on hikes.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default About;
