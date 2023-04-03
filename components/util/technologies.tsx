import Image from 'next/image';
import React from 'react';
import VScode from '@/public/images/vscode.png';

type Props = {
	size: number;
};

function Technologies({ size }: Props) {
	return (
		<div>
			<p>Technologies used:</p>
			<div className='flex flex-row flex-wrap mobile:justify-start w-full 1920:space-x-2'>
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
				<Image src={VScode.src} width={size} height={size} alt='Tech' />
			</div>
		</div>
	);
}

export default Technologies;
