import React from 'react';
import Technologies from './technologies';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Socials from './socials';
import Kevin from '@/public/images/Kevin.jpg';

function Test() {
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
		<div className='flex flex-col justify-center items-center w-full h-full overflow-y-hidden'>
			<div className='flex flex-1 justify-center items-center w-full h-full'>
				<div className='relative flex items-center justify-center aspect-square min-h-32 h-4/5 max-h-150'>
					<motion.div
						className='absolute inset-0'
						animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
						transition={{ ease: 'linear', duration: 1.5 }}>
						<motion.div
							className='w-full h-full rounded-full border-2 border-primary'
							animate={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
							transition={{
								duration: 3,
								repeat: Infinity,
							}}></motion.div>
					</motion.div>
					<motion.div
						className='absolute inset-5'
						animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
						transition={{ ease: 'linear', duration: 1.5 }}>
						<motion.div
							className='w-full h-full rounded-full border-2 border-primary'
							animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
							transition={{
								duration: 3,
								repeat: Infinity,
							}}></motion.div>
					</motion.div>
					<motion.img
						className='w-auto h-2/3 rounded-full'
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
			</div>
			<motion.div
				className='flex flex-col items-center justify-center w-full mb-1 1920:mb-5 space-y-4'
				animate={{
					scale: [1, 0.95, 0.9, 0.75, 0.25, 1],
					opacity: [0, 0.1, 0.2, 0.3, 0.5, 1],
				}}
				transition={{
					ease: 'linear',
					duration: 1.5,
				}}>
				<h1 className='flex items-end justify-center text-center px-2 text-xs mobile:text-base tablet:text-lg 1024:text-2xl 1536:text-3xl 2560:text-4xl text-white w-full h-10 1024:h-20'>
					<span>{text}</span>
					<Cursor cursorBlinking={true} cursorColor='#222BFF' />
				</h1>
				<div className='flex justify-center w-full'>
					<div className='inline mobile:hidden'>
						<Socials size={30} />
					</div>
					<div className='hidden mobile:inline tablet:hidden'>
						<Socials size={40} />
					</div>
					<div className='hidden tablet:inline 1536:hidden'>
						<Socials size={50} />
					</div>
					<div className='hidden 1536:inline'>
						<Socials size={60} />
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Test;
