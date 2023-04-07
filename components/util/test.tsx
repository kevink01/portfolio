import React from 'react';
import Technologies from './technologies';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Socials from './socials';
import Kevin from '@/public/images/Kevin.jpg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/solid';

type Inputs = {
	name: string;
	subject: string;
	message: string;
};

function Test() {
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
		<div className='flex flex-col items-center justify-center w-screen h-screen text-white overflow-y-auto'>
			<div className='flex flex-col items-center justify-center flex-1 w-full px-4 py-10'>
				<div className='relative flex flex-col flex-1 w-full max-w-2xl space-y-2 min-h-32 h-full max-h-240 bg-card rounded-20'>
					<div className='absolute inset-y-0 inset-x-2 flex flex-col pb-2 overflow-y-auto'>
						<div className='space-y-1 text-center'>
							<h1 className='mt-10 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
								Heard enough?
							</h1>
							<h3 className='text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl'>
								Contact me!
							</h3>
						</div>
						<div className='flex-1 w-9/10 h-full mx-auto pb-2'>
							<form
								onSubmit={handleSubmit(sendEmail)}
								className='flex flex-col space-y-2 w-full h-full p-5 rounded-20 bg-card'>
								<div className='form-field'>
									<label className='form-field-label'>Name</label>
									<input
										type='text'
										placeholder='John Smith'
										{...register('name', { required: true })}
										className='form-field-input'></input>
								</div>
								<div className='form-field'>
									<label className='form-field-label'>Subject</label>
									<input
										type='text'
										placeholder='XYZ Company Recruiter'
										{...register('subject', { required: true, maxLength: 50 })}
										className='form-field-input'></input>
								</div>
								<div className='flex flex-1 form-field'>
									<label className='form-field-label'>Message</label>
									<textarea
										placeholder='I liked your portfolio!'
										{...register('message', { required: true })}
										className='flex-1 min-h-10 form-message'></textarea>
								</div>
								<div className='flex justify-center items-end h-20 py-2'>
									<button
										type='submit'
										disabled={!isDirty || !isValid}
										className='form-button'>
										Email
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-full max-h-32 bg-zinc-900'>
				<div className='relative flex flex-col items-center space-y-2 w-full h-full text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl'>
					<div className='flex items-center space-x-2 h-12'>
						<PhoneIcon className='h-2/3 text-secondary' />
						<span className='flex items-center h-full'>+1 (507) 512-9191</span>
					</div>
					<div className='flex items-center space-x-2 h-12'>
						<AtSymbolIcon className='h-2/3 text-secondary' />
						<span className='flex items-center h-full tracking-wider'>
							kakulich01@gmail.com
						</span>
					</div>
					<div className='tablet:absolute tablet:inset-y-0 tablet:inset-x-2 flex items-center justify-end'>
						<button className='w-40 h-6 tablet:h-12 rounded-20 tablet:text-lg bg-secondary hover:scale-105 motion-safe:transition ease-in-out motion-safe:duration-500'>
							Figma Designs
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test;
