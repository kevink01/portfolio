import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Kevin from '@/public/images/Kevin.jpg';
import Socials from './socials';

function Profile() {
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
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="flex justify-center items-center relative w-full mx-auto 15:mx-0 h-full">
				<motion.div
					className="absolute"
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-28 24:w-56 h-28 24:h-56 rounded-full border-2 border-blue-700"
						animate={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
						transition={{
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
				</motion.div>
				<motion.div
					className="absolute"
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-48 24:w-72 h-48 24:h-72 rounded-full border-4 border-blue-700"
						animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
						transition={{
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
				</motion.div>
				<motion.img
					className="w-24 mobile:w-36 tablet:w-40 15:w-44 21:w-52 h-24 mobile:h-36 tablet:h-40 15:h-44 21:h-52 rounded-full"
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
			</div>
			<motion.div
				className="flex flex-col justify-center items-center text-center mb-1 24:mb-5 space-y-4"
				animate={{
					scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
					opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
				}}
				transition={{
					ease: 'linear',
					duration: 1.5,
				}}>
				<h1 className="px-2 text-xs mobile:text-base 24:text-xl text-white">
					<span>{text}</span>
					<Cursor cursorBlinking={true} cursorColor="#007fff" />
				</h1>
				<div className="flex items-center">
					<div className="inline mobile:hidden">
						<Socials size={30} />
					</div>
					<div className="hidden mobile:inline">
						<Socials size={50} />
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Profile;
