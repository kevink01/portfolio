import React from 'react';
import { motion } from 'framer-motion';
import Kevin from '@/public/images/Kevin.jpg';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Terminal from './util/terminal';
import styles from '@/styles/Home.module.css';

function Welcome() {
	const [text] = useTypewriter({
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
		<div className={styles.welcome}>
			<motion.div
				className="flex justify-center items-center relative w-128 mx-auto lg:mx-0 h-full"
				initial={{ visibility: 'hidden', opacity: 0 }}
				animate={{ visibility: 'visible', opacity: [0, 0.1, 0.25, 0.5, 1] }}
				transition={{ duration: 1.5 }}>
				<motion.div
					className="absolute"
					animate={{ scale: [1, 1.2, 1.5, 2.0, 2.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80 rounded-full border-2 border-blue-700 text-center text-white"
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
						className="w-44 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-44 sm:h-56 md:h-72 lg:h-80 xl:h-96 rounded-full border-2 border-blue-900 text-center text-white"
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
					className="flex justify-center absolute w-40 md:w-48 lg:w-96 text-center mt-36 sm:mt-48 md:mt-52 lg:mt-56 xl:mt-64 z-10"
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0.1, 0.2, 0.3, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.h1 className="break-normal text-xs md:text-base lg:text-xl xl:text-2xl">
						<span className="text-white">{text}</span>
						<Cursor cursorBlinking={true} cursorColor="#007fff" />
					</motion.h1>
				</motion.div>
			</motion.div>
			<Terminal />
		</div>
	);
}

export default Welcome;
