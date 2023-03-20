import React from 'react';
import Profile from './util/profile';
import Terminal from './util/terminal';
import { motion } from 'framer-motion';

function Welcome() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-white">
			<motion.div
				className="flex flex-col 15:flex-row w-4/5 h-9/10 rounded-xl bg-card"
				animate={{ scale: [0.7, 0.6, 0.5, 0.4, 0.25, 1] }}
				transition={{ ease: 'linear', duration: 1.5 }}>
				<div className="flex flex-col jusitfy-center items-center w-full 24:w-2/5 h-3/5 1024:h-full">
					<Profile />
				</div>
				<div className="flex justify-center items-center w-full 24:w-3/5 h-2/5 1024:h-full p-2">
					<Terminal />
				</div>
			</motion.div>
		</div>
	);
}

export default Welcome;
