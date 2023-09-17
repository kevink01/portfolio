import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import Resume from '@/public/images/resume.png';
import { PageInfo } from '@/typings';

type Props = {
	pageInfo: PageInfo;
	size: number;
};

function Socials({ pageInfo, size }: Props) {
	return (
		<div className='flex flex-row space-x-1 mobile:space-x-2 1024:space-x-4 px-2 py-2 tablet:py-2'>
			<div className='w-px h-px'></div> {/* Spacing */}
			{pageInfo?.socials.map((social) => {
				return (
					<SocialIcon
						key={social._id}
						url={social.url}
						target='_blank'
						style={{ width: size, height: size }}
						bgColor='#B77A03'
						className='social-link'
					/>
				);
			})}
			<SocialIcon
				network='email'
				url='#contact'
				style={{ width: size, height: size }}
				bgColor='#B77A03'
				className='social-link'
			/>
			<div style={{ width: size, height: size }}>
				<Link download href={pageInfo.resumeURL} target='_blank'>
					<button
						className='bg-secondary rounded-full hover:opacity-70 motion-safe:transition motion-safe:ease-in-out motion-safe:duration-500 motion-safe:hover:scale-125'
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
