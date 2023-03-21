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
		<div className='flex flex-col flex-1 items-center justify-center pt-2 w-full h-full'>
			<div className='relative flex flex-1 justify-center items-center w-full mx-auto 1280:mx-0 h-full'>
				<motion.div
					className='absolute inset-0 flex items-center justify-center'
					animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
					transition={{ ease: 'linear', duration: 1.5 }}>
					<motion.div
						className='w-36 mobile:w-52 tablet:w-64 1024:w-68 1280:w-72 1536:w-76 1920:w-84 2560:w-96 h-36 mobile:h-52 tablet:h-64 1024:h-68 1280:h-72 1536:h-76 1920:h-84 2560:h-96 rounded-full border-2 border-blue-700'
						animate={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
						transition={{
							duration: 3,
							repeat: Infinity,
						}}></motion.div>
					<motion.div
						className='absolute inset-0 flex items-center justify-center'
						animate={{ scale: [1, 0.95, 0.9, 0.75, 0.5, 1] }}
						transition={{ ease: 'linear', duration: 1.5 }}>
						<motion.div
							className='w-48 mobile:w-60 tablet:w-80 1024:w-88 1536:w-92 1920:w-100 2560:w-112 h-48 mobile:h-60 tablet:h-80 1024:h-88 1536:h-92 1920:h-100 2560:h-112 rounded-full border-4 border-blue-700'
							animate={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
							transition={{
								duration: 3,
								repeat: Infinity,
							}}></motion.div>
					</motion.div>
					<div className='absolute inset-0 flex items-center justify-center '>
						<motion.img
							className='w-32 mobile:w-48 tablet:w-60 1024:w-64 1280:w-68 1536:w-72 1920:w-80 2560:w-92 h-32 mobile:h-48 tablet:h-60 1024:h-64 1280:h-68 1536:h-72 1920:h-80 2560:h-92 rounded-full'
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
				</motion.div>
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
					<Cursor
						cursorBlinking={true}
						cursorColor='#222BFF'
					/>
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

export default Profile;
