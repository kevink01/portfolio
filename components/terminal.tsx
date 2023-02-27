import React from 'react';
import { Cursor } from 'react-simple-typewriter';

function Terminal() {
	return (
		<div className="w-full h-full relative">
			<div className="flex items-center relative w-full h-6 rounded-t-xl bg-true-grey">
				<div className="flex flex-row space-x-2 pl-2">
					<div className="w-4 h-4 rounded-full bg-red-500"></div>
					<div className="w-4 h-4 rounded-full bg-yellow-500"></div>
					<div className="w-4 h-4 rounded-full bg-green-500"></div>
				</div>
				<div className="flex justify-center absolute w-full">
					<span>Kevin Kulich</span>
				</div>
			</div>
			<div className="w-full absolute top-0 bottom-1 mt-6 rounded-b-xl bg-terminal-grey">
				<div className="w-full px-1 pt-2 space-y-2">
					<p>
						My name is Kevin Kulich, and I&apos;m a 3rd year computer science
						major at Michigan Technological University.
					</p>
					<p>
						A good programmer is able to write clean code. A great programmer is
						able to understand their code.
					</p>
					<p>Let&apos;s get started</p>
					<span className="text-blue-500">$</span>
					<Cursor cursorColor="#fff077" />
				</div>
			</div>
		</div>
	);
}

export default Terminal;
