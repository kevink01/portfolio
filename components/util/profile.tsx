import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Kevin from '@/assets/images/Kevin.jpg';
import Socials from './socials';
import { profileAnimation, viewportOptions } from '@/utilities/animations';

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
		<motion.div
			className='flex flex-col items-center overflow-hidden w-full h-full'
			variants={profileAnimation(1)}
			initial='hidden'
			whileInView='show'
			viewport={viewportOptions}>
			<div className='flex justify-center items-center w-full h-full'>
				<div className='relative flex justify-center items-center aspect-square min-h-32 h-4/5 max-h-96 1536:max-h-150'>
					<div className='absolute inset-0'>
						<motion.div
							className='w-full h-full rounded-full border-2 border-primary'
							whileInView={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
							viewport={viewportOptions}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: 2,
							}}></motion.div>
					</div>
					<div className='absolute inset-5'>
						<motion.div
							className='w-full h-full rounded-full border-2 border-primary'
							whileInView={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
							viewport={viewportOptions}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: 2,
							}}></motion.div>
					</div>
					<motion.img
						className='w-auto h-2/3 tablet:h-1/2 1280:h-2/3 rounded-full'
						src={Kevin.src}
						animate={{ opacity: [0, 0.1, 0.9, 1] }}
						transition={{ ease: 'linear', duration: 2 }}></motion.img>
				</div>
			</div>
			<div className='flex flex-col w-full mb-1 1920:mb-5 space-y-1'>
				<h1 className='flex justify-center items-end text-center w-full h-10 1024:h-20 px-2 text-xs mobile:text-base tablet:text-lg 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
					<span>{text}</span>
					<Cursor cursorBlinking={true} cursorColor='#222BFF' />
				</h1>
				<div className='flex justify-center w-full'>
					<div className='inline mobile:hidden'>
						<Socials size={30} />
					</div>
					<div className='hidden mobile:inline 1024:hidden'>
						<Socials size={40} />
					</div>
					<div className='hidden 1024:inline 1536:hidden'>
						<Socials size={50} />
					</div>
					<div className='hidden 1536:inline'>
						<Socials size={60} />
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Profile;
