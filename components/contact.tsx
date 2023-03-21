import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid';

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
		<>
			<div className="flex flex-col items-center justify-center w-screen h-screen text-white">
				<div className="flex flex-col items-center space-y-3 w-full max-w-xl h-9/10 px-5 1920:px-1">
					<div className="space-y-1 text-center">
						<h1 className="mt-10 text-xl tablet:text-2xl 1024:text-3xl 1536:text-4xl 2560:text-5xl">
							Heard enough?
						</h1>
						<h3 className="text-lg tablet:text-xl 1024:text-2xl 1536:text-3xl 2560:text-4xl">
							Contact me!
						</h3>
					</div>
					<div className="flex flex-col items-center space-y-5 w-full text-sm tablet:text-base 1024:text-lg 1536:text-xl 2560:text-2xl">
						<div className="flex space-x-2 h-6 1920:h-12">
							<PhoneIcon className="h-full text-secondary" />
							<span className="flex items-center h-full">
								+1 (507) 512-9191
							</span>
						</div>
						<div className="flex space-x-2 h-6 1920:h-12">
							<AtSymbolIcon className="h-full text-secondary" />
							<span className="flex items-center h-full tracking-wider">
								kakulich01@gmail.com
							</span>
						</div>
					</div>
					<div className="flex w-full h-full max-h-150 2560:max-h-180">
						<form
							onSubmit={handleSubmit(sendEmail)}
							className="flex flex-col space-y-2 w-full h-full p-5 rounded-20 bg-card">
							<div className="form-field">
								<label className="form-field-label">Name</label>
								<input
									type="text"
									placeholder="John Smith"
									{...register('name', { required: true })}
									className="form-field-input"></input>
							</div>
							<div className="form-field">
								<label className="form-field-label">Subject</label>
								<input
									type="text"
									placeholder="XYZ Company Recruiter"
									{...register('subject', { required: true, maxLength: 50 })}
									className="form-field-input"></input>
							</div>
							<div className="flex flex-1 form-field">
								<label className="form-field-label">Message</label>
								<textarea
									placeholder="I liked your portfolio!"
									{...register('message', { required: true })}
									className="flex flex-1 form-message"></textarea>
							</div>
							<div className="flex justify-center items-end h-20">
								<button
									type="submit"
									disabled={!isDirty || !isValid}
									className="form-button">
									Email
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="w-full mt-4 h-1/10 bg-card"></div>
			</div>
		</>
	);
}

export default Contact;
