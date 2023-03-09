import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Kevin from '@/public/images/Kevin.jpg';
import Resume from '@/public/images/resume.png';

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
			<div className="flex justify-center items-center relative w-full mx-auto lg:mx-0 h-full">
				<motion.div
					className="absolute"
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className="w-56 h-56 rounded-full border-2 border-blue-700"
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
						className="w-72 h-72 rounded-full border-4 border-blue-700"
						animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
						transition={{
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
			</div>
			<motion.div
				className="flex flex-col justify-center items-center text-center mb-5 space-y-4"
				animate={{
					scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
					opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
				}}
				transition={{
					ease: 'linear',
					duration: 1.5,
				}}>
				<h1 className="text-xl text-white">
					<span>{text}</span>
					<Cursor cursorBlinking={true} cursorColor="#007fff" />
				</h1>
				<div className="flex items-center space-x-3">
					<SocialIcon
						url="https://www.linkedin.com/in/kevin-kulich/"
						target="_blank"
						style={{ height: 50, width: 50 }}
						bgColor="#B77A03"
						className="transition duration-500 ease-in-out hover:scale-125"
					/>
					<SocialIcon
						url="https://github.com/kevink01"
						target="_blank"
						style={{ height: 50, width: 50 }}
						bgColor="#B77A03"
						className="transition duration-500 ease-in-out hover:scale-125"
					/>
					<SocialIcon
						network="email"
						url="#contact"
						style={{ height: 50, width: 50 }}
						bgColor="#B77A03"
						className="transition duration-500 ease-in-out hover:scale-125"
					/>
					<Link download href={`/Kevin Kulich Resume.pdf`} target="_blank">
						<button
							className="w-50 h-50 rounded-full bg-secondary transition duration-500 ease-in-out hover:scale-125"
							data-te-toggle="tooltip"
							title="Download Resume">
							<Image
								src={Resume.src}
								width={Resume.width}
								height={Resume.height}
								alt="Resume"
							/>
						</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
}

export default Profile;
