import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Resume from '@/public/images/resume.png';

type Props = {
	size: number;
};

function Socials({ size }: Props) {
	return (
		<div className='flex flex-row py-4 tablet:py-2 px-2 space-x-1 mobile:space-x-2 1024:space-x-4'>
			<div className='w-px h-px'></div> {/* Spacing */}
			<SocialIcon
				url='https://www.linkedin.com/in/kevin-kulich/'
				target='_blank'
				style={{ width: size, height: size }}
				bgColor='#B77A03'
				className='social-link'
			/>
			<SocialIcon
				url='https://github.com/kevink01'
				target='_blank'
				style={{ height: size, width: size }}
				bgColor='#B77A03'
				className='social-link'
			/>
			<SocialIcon
				network='email'
				url='#contact'
				style={{ height: size, width: size }}
				bgColor='#B77A03'
				className='social-link'
			/>
			<div style={{ height: size, width: size }}>
				<Link
					download
					href={`/Kevin Kulich Resume.pdf`}
					target='_blank'
					className={`w-[${size}px] h-[${size}px]`}>
					<button
						className='rounded-full bg-secondary motion-safe:transition motion-safe:duration-500 ease-in-out motion-safe:hover:scale-125 motion-safe:hover:opacity-70'
						data-te-toggle='tooltip'
						title='Download Resume'>
						<Image src={Resume.src} width={size} height={size} alt='Resume' />
					</button>
				</Link>
			</div>
			<div className='w-px h-px'></div> {/* Spacing */}
		</div>
	);
}

export default Socials;
