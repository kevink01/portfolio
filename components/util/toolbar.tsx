import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

function Toolbar() {
	return (
		<motion.div
			className="sticky top-0 flex items-start justify-between max-w-7xl h-16 mx-auto pt-2 z-50 drop-shadow-2xl"
			animate={{
				y: [-200, 200, 0],
				opacity: [0, 0.5, 1],
				scale: [0.4, 1.5, 1],
			}}
			transition={{ duration: 1.5 }}>
			<div className="space-x-3">
				<SocialIcon
					url="https://github.com/kevink01"
					target="_blank"
					style={{ height: 50, width: 50 }}
				/>
				<SocialIcon
					url="https://github.com/kevink01"
					target="_blank"
					style={{ height: 50, width: 50 }}
				/>
				<SocialIcon
					url="https://github.com/kevink01"
					target="_blank"
					style={{ height: 50, width: 50 }}
				/>
			</div>

			<div className="flex flex-row justify-between space-x-4">
				<SocialIcon
					network="email"
					bgColor="#007FFF"
					fgColor="#ffffff"
					className="cursor-pointer hover:opacity-70"
				/>
				<button className="rounded-lg p-2 bg-[#007FFF] text-white hover:bg-[#0080ffb6]">
					Email me!
				</button>
			</div>
		</motion.div>
	);
}

export default Toolbar;
