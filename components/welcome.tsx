import React from 'react';
import Profile from './util/profile';
import Terminal from './util/terminal';
import { motion } from 'framer-motion';

function Welcome() {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-white'>
			<motion.div
				className='flex flex-col 1024:flex-row w-4/5 max-w-8xl min-h-32 h-9/10 max-h-360 rounded-xl bg-card'
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: [0.1, 0.2, 0.35, 0.5, 0.75, 1] }}
				transition={{ ease: 'linear', duration: 1 }}>
				<div className='flex flex-1 flex-col jusitfy-center items-center w-full 1024:w-2/5 h-3/5 1024:h-full overflow-hidden'>
					<Profile />
				</div>
				<div className='flex flex-1 justify-center items-center w-full 1024:w-3/5 h-2/5 1024:h-full p-2 overflow-hidden'>
					<Terminal />
				</div>
			</motion.div>
		</div>
	);
}

export default Welcome;
