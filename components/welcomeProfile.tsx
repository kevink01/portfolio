import { motion } from 'framer-motion';
import { createURL } from '@/sanity';
import Socials from './socials';
import { PageInfo } from '@/typings';
import { springAnimation, viewportOptions } from '@/utilities/animations';

type Props = {
	pageInfo: PageInfo;
};

function Profile({ pageInfo }: Props) {
	return (
		<motion.div
			className='flex flex-col items-center overflow-x-hidden overflow-y-auto w-full h-full'
			variants={springAnimation(1, 1)}
			initial='hidden'
			whileInView='show'
			viewport={viewportOptions}>
			<div className='flex justify-center items-center w-full h-full'>
				<div className='relative flex justify-center items-center aspect-square min-h-32 h-4/5 max-h-80 1536:max-h-144'>
					<div className='absolute inset-0'>
						<motion.div
							className='w-full h-full rounded-full border-2 border-primary'
							whileInView={{ opacity: [0.1, 0.2, 0.25, 0.2, 0.1] }}
							viewport={viewportOptions}
							transition={{
								delay: 2,
								duration: 3,
								repeat: Infinity,
							}}></motion.div>
					</div>
					<div className='absolute inset-5'>
						<motion.div
							className='w-auto h-full rounded-full border-2 border-primary'
							whileInView={{ opacity: [0.9, 0.5, 0.1, 0.5, 0.9] }}
							viewport={viewportOptions}
							transition={{
								delay: 2,
								duration: 3,
								repeat: Infinity,
							}}></motion.div>
					</div>
					{pageInfo?.profilePic && (
						<motion.img
							className='w-auto h-2/3 tablet:h-1/2 1280:h-2/3 rounded-full'
							src={createURL(pageInfo?.profilePic).url()}
							alt='Kevin'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: [0, 0.1, 0.9, 1] }}
							viewport={viewportOptions}
							transition={{ duration: 2, ease: 'linear' }}></motion.img>
					)}
				</div>
			</div>

			<div className='flex justify-center w-full py-2'>
				<div className='inline mobile:hidden'>
					<Socials pageInfo={pageInfo} size={30} />
				</div>
				<div className='hidden mobile:inline 1024:hidden'>
					<Socials pageInfo={pageInfo} size={40} />
				</div>
				<div className='hidden 1024:inline 1536:hidden'>
					<Socials pageInfo={pageInfo} size={50} />
				</div>
				<div className='hidden 1536:inline'>
					<Socials pageInfo={pageInfo} size={60} />
				</div>
			</div>
		</motion.div>
	);
}

export default Profile;
