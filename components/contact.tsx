import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AtSymbolIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import {
	contactAnimation,
	profileAnimation,
	viewportOptions,
} from '@/utilities/animations';
import Figma from '@/assets/images/Figma.png';
import Code from '@/assets/images/Code.png';
import Image from 'next/image';
import Link from 'next/link';

type Inputs = {
	name: string;
	subject: string;
	message: string;
};

function Contact() {
	const {
		handleSubmit,
		register,
		reset,
		formState: { isDirty, isValid },
	} = useForm<Inputs>();

	const sendEmail: SubmitHandler<Inputs> = (data) => {
		window.location.href = `mailto:kakulich01@gmail.com?subject=${data.subject}&body=${data.message}`;
		reset();
	};

	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen text-white overflow-y-hidden'>
			<div className='flex flex-col items-center justify-center flex-1 w-full px-4'>
				<motion.div
					className='relative w-full max-w-2xl min-h-32 h-full max-h-240 my-4 bg-card rounded-20'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ ease: 'linear', duration: 0.5 }}
					viewport={viewportOptions}>
					<div className='absolute inset-y-0 inset-x-2 flex flex-col py-2 overflow-y-auto overflow-x-hidden'>
						<motion.div
							className='space-y-1 text-center'
							initial={{ opacity: 0, x: 500 }}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							viewport={{ once: true, amount: 'some' }}
							transition={{
								type: 'spring',
								stiffness: 100,
								duration: 1,
								delay: 0.5,
							}}>
							<h1 className='hidden tablet:inline text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
								Heard enough?
							</h1>
							<h3 className='mt-4 tablet:mt-0 text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
								Contact me!
							</h3>
						</motion.div>
						<motion.div
							className='flex-1 w-9/10 h-full mx-auto pb-2'
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 'all' }}
							transition={{ staggerChildren: 0.35, delayChildren: 1 }}>
							<form
								onSubmit={handleSubmit(sendEmail)}
								className='flex flex-col space-y-2 w-full h-full p-5 rounded-20 bg-card'>
								<motion.div className='form-field' variants={contactAnimation}>
									<label className='form-field-label'>Name</label>
									<input
										type='text'
										placeholder='John Smith'
										{...register('name', { required: true })}
										className='form-field-input'></input>
								</motion.div>
								<motion.div className='form-field' variants={contactAnimation}>
									<label className='form-field-label'>Subject</label>
									<input
										type='text'
										placeholder='XYZ Company Recruiter'
										{...register('subject', { required: true, maxLength: 50 })}
										className='form-field-input'></input>
								</motion.div>
								<motion.div
									className='flex flex-1 form-field'
									variants={contactAnimation}>
									<label className='form-field-label'>Message</label>
									<textarea
										placeholder='I liked your portfolio!'
										{...register('message', { required: true })}
										className='flex-1 min-h-10 form-message'></textarea>
								</motion.div>
								<motion.div
									className='flex justify-center items-end h-20 py-2'
									variants={contactAnimation}>
									<button
										type='submit'
										disabled={!isDirty || !isValid}
										className='form-button'>
										Email
									</button>
								</motion.div>
							</form>
						</motion.div>
					</div>
				</motion.div>
			</div>
			<motion.div
				className='flex justify-center w-full h-full max-h-32 bg-zinc-900'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 'all' }}
				transition={{ ease: 'linear', duration: 0.5 }}>
				<motion.div
					className='flex flex-row justify-between w-full max-w-2xl py-2 px-4 1024:px-2 overflow-x-hidden'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}>
					<motion.div
						className='flex flex-col justify-start'
						variants={profileAnimation(1)}>
						<Link
							href='https://www.linkedin.com/in/kevin-kulich/'
							target='_blank'>
							<button className='flex items-center space-x-2 h-12 border-b-2 border-gray-500'>
								<UserCircleIcon className='h-2/3 text-secondary' />
								<span className='flex items-center h-full tracking-wider'>
									LinkedIn
								</span>
							</button>
						</Link>

						<button
							className='flex items-center space-x-2 h-12 border-b-2 border-gray-500'
							onClick={() => {
								window.location.href = 'mailto:kakulich01@gmail.com';
							}}>
							<AtSymbolIcon className='h-2/3 text-secondary' />
							<span className='flex items-center h-full tracking-wider'>
								kakulich01@gmail.com
							</span>
						</button>
					</motion.div>
					<motion.div
						className='flex flex-col items-center justify-start space-y-4'
						variants={profileAnimation(-1)}>
						{/* TODO Figma link */}
						<Link
							href="https://www.figma.com/file/okDNkHgGuEHoguZQ8VZRRU/Kevin-Kulich's-Web-Portfolio?t=gRQGzkHrlrEuHqcm-6"
							target='_blank'>
							<button className='flex flex-row items-center justify-between p-2 w-40 h-10 rounded-20 bg-secondary motion-safe:hover:scale-105 hover:bg-secondaryHover motion-safe:transition ease-in-out motion-safe:duration-500'>
								<Image src={Figma.src} width={24} height={24} alt='Figma' />
								Figma Designs
							</button>
						</Link>
						<Link href='https://github.com/kevink01/portfolio' target='_blank'>
							<button className='flex flex-row items-center justify-between p-2 w-40 h-10 rounded-20 bg-secondary motion-safe:hover:scale-105 hover:bg-secondaryHover motion-safe:transition ease-in-out motion-safe:duration-500'>
								<Image src={Code.src} width={24} height={24} alt='Figma' />
								Source code
							</button>
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Contact;
