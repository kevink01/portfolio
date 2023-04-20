import React from 'react';
import Profile from './util/profile';
import Terminal from './util/terminal';
import { motion } from 'framer-motion';
import { viewportOptions } from '@/utilities/animations';

function Welcome() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<motion.div
				className='bg-card rounded-xl flex flex-col 1024:flex-row w-4/5 max-w-8xl h-9/10 min-h-32 max-h-360'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: [0.1, 0.5, 1] }}
				viewport={viewportOptions}
				transition={{ ease: 'linear', duration: 1 }}>
				<div className='flex jusitfy-center items-center overflow-hidden w-full 1024:w-2/5 h-3/5 1024:h-full'>
					<Profile />
				</div>
				<div className='flex justify-center items-center overflow-hidden w-full 1024:w-3/5 h-2/5 1024:h-full p-2'>
					<Terminal />
				</div>
			</motion.div>
		</div>
	);
}

export default Welcome;
