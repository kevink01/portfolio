import { motion } from 'framer-motion';
import Profile from './welcomeProfile';
import Terminal from './welcomeTerminal';
import { PageInfo } from '@/typings';
import { viewportOptions } from '@/utilities/animations';

type Props = {
	pageInfo: PageInfo;
};

function Welcome({ pageInfo }: Props) {
	return (
		<div className='flex items-center justify-center h-screen'>
			<motion.div
				className='bg-card rounded-xl flex flex-col 1024:flex-row w-4/5 max-w-8xl h-9/10 min-h-32 max-h-360'
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: [0.1, 0.5, 1] }}
				viewport={viewportOptions}
				transition={{ duration: 1, ease: 'linear' }}>
				<div className='flex jusitfy-center items-center overflow-hidden w-full 1024:w-2/5 h-1/2 1024:h-full'>
					<Profile pageInfo={pageInfo} />
				</div>
				<div className='flex justify-center items-center overflow-hidden w-full 1024:w-3/5 h-1/2 1024:h-full p-2'>
					<Terminal pageInfo={pageInfo} />
				</div>
			</motion.div>
		</div>
	);
}

export default Welcome;
