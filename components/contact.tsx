import Image from 'next/image';
import Link from 'next/link';
import { Variants, motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AtSymbolIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import Code from '@/public/images/Code.png';
import Figma from '@/public/images/Figma.png';
import { PageInfo } from '@/typings';
import { springAnimation, viewportOptions } from '@/utilities/animations';

type Inputs = {
	name: string;
	subject: string;
	message: string;
};

type Props = {
	pageInfo: PageInfo;
};

function Contact({ pageInfo }: Props) {
	const {
		handleSubmit,
		register,
		reset,
		formState: { isDirty, isValid },
	} = useForm<Inputs>();

	const sendEmail: SubmitHandler<Inputs> = (data) => {
		window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=${data.message}`;
		reset();
	};

	const contactAnimation: Variants = {
		hidden: { opacity: 0, x: 250 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				duration: 1,
			},
		},
	};

	return (
		<div className='flex flex-col overflow-y-hidden w-screen h-screen'>
			<div className='flex-1 flex flex-col items-center w-full px-4'>
				<motion.div
					className='bg-card rounded-20 relative w-full max-w-2xl min-h-32 h-full max-h-240 my-4'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ ease: 'linear', duration: 0.5 }}
					viewport={viewportOptions}>
					<motion.div
						className='absolute inset-x-2 inset-y-0 flex flex-col overflow-x-hidden overflow-y-auto py-2'
						initial='hidden'
						whileInView='show'
						viewport={viewportOptions}
						transition={{ ease: 'linear', staggerChildren: 0.5 }}>
						<motion.div className='text-center space-y-1' variants={contactAnimation}>
							<h1 className='hidden tablet:inline text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl'>
								Heard enough?
							</h1>
							<h3 className='tablet:mt-0 text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl mt-4'>
								Contact me!
							</h3>
						</motion.div>
						<motion.div className='flex-1 w-full h-full mx-auto px-4 pb-2'>
							<form
								onSubmit={handleSubmit(sendEmail)}
								className='bg-card rounded-20 flex flex-col space-y-2 w-full h-full'>
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
								<motion.div className='flex flex-1 form-field' variants={contactAnimation}>
									<label className='form-field-label'>Message</label>
									<textarea
										placeholder='I liked your portfolio!'
										{...register('message', { required: true })}
										className='form-field-input flex-1 min-h-10 resize-none'></textarea>
								</motion.div>
								<motion.div className='flex justify-center items-end h-20 py-2' variants={contactAnimation}>
									<button
										type='submit'
										disabled={!isDirty || !isValid}
										className='bg-secondary rounded-20 w-40 h-12 tablet:text-lg 1024:text-xl 1536:text-2xl 2560:text-3xl hover:bg-secondaryHover disabled:bg-secondary/50 disabled:hover:scale-100 motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500 motion-safe:hover:scale-105'>
										Email
									</button>
								</motion.div>
							</form>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				className='bg-zinc-900 flex justify-center w-full h-full max-h-32'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={viewportOptions}
				transition={{ duration: 0.5, ease: 'linear' }}>
				<motion.div
					className='flex justify-between w-full max-w-2xl overflow-x-hidden px-4 1024:px-2 py-2'
					initial='hidden'
					whileInView='show'
					viewport={viewportOptions}>
					<motion.div className='flex flex-col justify-start' variants={springAnimation(1, 0.5)}>
						<Link href='https://www.linkedin.com/in/kevin-kulich/' target='_blank'>
							<button className='flex items-center space-x-2 h-12 border-b-2 border-gray-500'>
								<UserCircleIcon className='text-secondary h-2/3' />
								<span className='tracking-wide'>LinkedIn</span>
							</button>
						</Link>

						<button
							className='flex items-center space-x-2 h-12 border-b-2 border-gray-500'
							onClick={() => {
								window.location.href = `mailto:${pageInfo.email}`;
							}}>
							<AtSymbolIcon className='text-secondary h-2/3' />
							<span className='tracking-wide'>{pageInfo.email}</span>
						</button>
					</motion.div>
					<motion.div className='flex flex-col justify-start space-y-4' variants={springAnimation(-1, 0.5)}>
						{/* TODO Figma link */}
						{pageInfo?.figmaURL && (
							<Link href={pageInfo.figmaURL} target='_blank'>
								<button className='bg-secondary rounded-20 flex w-40 h-10 p-2 hover:bg-secondaryHover motion-safe:hover:scale-102 motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500'>
									<Image className='mr-1' src={Figma.src} width={24} height={24} alt='Figma' />
									Figma Designs
								</button>
							</Link>
						)}
						<Link href={pageInfo.sourceCodeURL} target='_blank'>
							<button className='bg-secondary rounded-20 flex w-40 h-10 p-2 hover:bg-secondaryHover motion-safe:hover:scale-102 motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500'>
								<Image className='mr-1' src={Code.src} width={24} height={24} alt='Figma' />
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
