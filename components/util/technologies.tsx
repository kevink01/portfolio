import Image from 'next/image';
import React from 'react';
import VScode from '@/public/images/vscode.png';

function Technologies() {
	return (
		<div>
			<p className="text-xl font-bold">Technologies used:</p>
			<div className="flex flex-row space-x-2">
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
				<Image src={VScode.src} width={30} height={30} alt="Tech" />
			</div>
		</div>
	);
}

export default Technologies;
