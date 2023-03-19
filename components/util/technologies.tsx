import Image from 'next/image';
import React from 'react';
import VScode from '@/public/images/vscode.png';

function Technologies() {
	return (
		<>
			<p>Technologies used:</p>
			<div className="flex flex-row flex-wrap justify-between mobile:justify-start w-full 24:space-x-2">
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
			</div>
		</>
	);
}

export default Technologies;
