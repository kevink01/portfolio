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
			<div className="flex flex-col items-center justify-center w-full h-screen text-white">
				<div className="flex flex-col items-center space-y-3 w-120 h-9/10 px-1">
					<div className="space-y-1 text-center">
						<h1 className="mt-10 text-3xl">Heard enough?</h1>
						<h3 className="text-2xl">Contact me!</h3>
					</div>
					<div className="flex flex-col items-center space-y-5 w-full">
						<div className="flex space-x-2 h-10 2xl:h-12">
							<PhoneIcon className="h-full text-secondary" />
							<span className="flex items-center h-full text-xl">
								+1 (507) 512-9191
							</span>
						</div>
						<div className="flex space-x-2 h-10 2xl:h-12">
							<AtSymbolIcon className="h-full text-secondary" />
							<span className="flex items-center h-full text-xl">
								kakulich01@gmail.com
							</span>
						</div>
					</div>
					<div className="flex w-full h-full">
						<form
							onSubmit={handleSubmit(sendEmail)}
							className="flex flex-col space-y-2 w-full h-fit p-5 rounded-20 bg-card">
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
							<div className="form-field">
								<label className="form-field-label">Message</label>
								<textarea
									placeholder="I liked your portfolio!"
									{...register('message', { required: true })}
									className="form-message h-52"></textarea>
							</div>
							<div className="flex justify-center items-end">
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
				<div className="w-full h-[10%] bg-card"></div>
			</div>
		</>
	);
}

export default Contact;
