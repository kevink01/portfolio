import React from 'react';

function Contact() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-red-500">
			<div className="flex flex-col items-center space-y-3 w-120 h-9/10 px-1 bg-blue-500">
				<div className="space-y-1 text-center">
					<h1 className="mt-10 text-3xl">Heard enough?</h1>
					<h3 className="text-2xl">Contact me!</h3>
				</div>
				<div className="flex w-full h-96 p-5 rounded-20 bg-card">
					<form className="flex flex-col space-y-2 w-full">
						<div className="form-field">
							<label className="form-field-label">Email</label>
							<input
								placeholder="johnsmith@example.com"
								className="form-field-input"></input>
						</div>
						<div className="form-field">
							<label className="form-field-label">Subject</label>
							<input
								placeholder="XYZ Company Recruiter"
								className="form-field-input"></input>
						</div>
						<div className="form-field">
							<label className="form-field-label">Message</label>
							<textarea
								rows={5}
								cols={30}
								placeholder="I liked your portfolio!"
								className="form-message h-52"></textarea>
						</div>
						<div className="flex flex-1 justify-center items-end">
							<button className="bg-secondary w-40 h-12">Email</button>
						</div>
					</form>
				</div>
			</div>
			<div className="w-full h-[10%] bg-green-500"></div>
		</div>
	);
}

export default Contact;
