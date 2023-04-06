import React from 'react';
import Profile from './util/profile';
import Terminal from './util/terminal';
import { motion } from 'framer-motion';
import Test from './util/test';

function Welcome() {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-white overflow-y-hidden'>
			<motion.div
				className='flex flex-col 1024:flex-row w-4/5 max-w-8xl min-h-32 h-9/10 max-h-360 rounded-xl bg-card'
				animate={{ scale: [0.7, 0.6, 0.5, 0.4, 0.25, 1] }}
				transition={{ ease: 'linear', duration: 1.5 }}>
				<div className='flex flex-1 flex-col jusitfy-center items-center w-full 1024:w-2/5 h-3/5 1024:h-full'>
					<Profile />
				</div>
				<div className='flex flex-1 justify-center items-center w-full 1024:w-3/5 h-2/5 1024:h-full p-2 overflow-y-hidden'>
					<Terminal />
				</div>
			</motion.div>
		</div>
	);
}

export default Welcome;
