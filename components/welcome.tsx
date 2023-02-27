import React from 'react';
import { motion } from 'framer-motion';
import Kevin from '@/public/images/Kevin.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Terminal from './terminal';

function Welcome() {
	const [text, count] = useTypewriter({
		words: [
			'System.out.println("Hello World!");',
			'My name is Kevin Kulich!',
			'<Full-stack developer/>',
			"console.log('TypeScript enjoyer')",
			'🎱-ball enthusiast',
		],
		loop: false,
		typeSpeed: 50,
		deleteSpeed: 20,
		delaySpeed: 2000,
	});

	return (
		<div className="flex flex-col lg:flex-row justify-center w-full text-white mt-20 h-screen">
			<motion.div
				className="flex justify-center items-center relative w-full lg:w-160 mx-auto lg:mx-0 h-160"
				initial={{ visibility: 'hidden', opacity: 0 }}
				animate={{ visibility: 'visible', opacity: [0, 0.1, 0.25, 0.5, 1] }}
				transition={{ duration: 1.5 }}>
				<motion.div
					className="absolute"
					animate={{ scale: [1, 1.2, 1.5, 2.0, 2.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-52 sm:w-64 md:w-80 lg:w-104 xl:w-128 h-52 sm:h-64 md:h-80 lg:h-104 xl:h-128 rounded-full border-2 border-blue-700 text-center text-white"
						animate={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
						transition={{
							// delay: 1.5,
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
				</motion.div>

				<motion.div
					className="absolute"
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-44 sm:w-56 md:w-72 lg:w-96 xl:w-120 h-44 sm:h-56 md:h-72 lg:h-96 xl:h-120 rounded-full border-2 border-blue-900 text-center text-white"
						animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
						transition={{
							// delay: 1.5,
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
				</motion.div>
				<motion.div
					className="absolute"
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-28 sm:w-40 md:w-44 lg:w-48 xl:w-56 h-28 sm:h-40 md:h-44 lg:h-48 xl:h-56 rounded-full border-2 border-orange-900 text-center text-white"
						animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
						transition={{
							// delay: 1.5,
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
				</motion.div>
				<motion.img
					className="w-24 sm:w-36 md:w-40 lg:w-44 xl:w-52 h-24 sm:h-36 md:h-40 lg:h-44 xl:h-52 rounded-full"
					src={Kevin.src}
					initial={{ opacity: 0 }}
					animate={{
						scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
						opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
					}}
					transition={{
						ease: 'linear',
						duration: 1.5,
					}}></motion.img>
				<motion.div
					className="flex justify-center absolute w-40 md:w-48 text-center mt-36 sm:mt-48 md:mt-56 lg:mt-64 xl:mt-80 z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0.1, 0.2, 0.3, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.h1 className="break-normal text-xs md:text-base lg:text-xl xl:text-2xl">
						<span className="text-white">{text}</span>
						<Cursor cursorBlinking={true} cursorColor="#007fff" />
					</motion.h1>
				</motion.div>
			</motion.div>
			<div className="flex flex-col justify-between py-2 px-2 relative w-full lg:w-160 mx-auto lg:mx-0 h-160 rounded-lg ring-2 ring-yellow-700 ring-offset-4 ring-offset-transparent">
				<Terminal />
				<div className="flex justify-between w-full px-3 py-2 space-x-3  border-t-2 border-yellow-700">
					<a href="#about">
						<button className="bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-3 rounded-xl ">
							Click me!
						</button>
					</a>
					<button className="bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-3 rounded-xl ">
						Click me!
					</button>
					<button className="bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-3 rounded-xl ">
						Click me!
					</button>
					<button className="bg-yellow-600 hover:bg-yellow-700 text-black py-3 px-3 rounded-xl ">
						Click me!
					</button>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
