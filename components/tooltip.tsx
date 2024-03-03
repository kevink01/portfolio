import React, { useState } from 'react';

type Props = {
	children: React.ReactNode;
	text: string;
	alignment: 'left' | 'right';
};

function Tooltip({ alignment, children, text }: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className='group relative inline-block' onClick={toggleOpen}>
			{children}
			<span
				className={`tooltip ${open ? 'visible opacity-100' : 'invisible opacity-0'} ${
					alignment === 'left' ? 'left-0' : 'right-0'
				}`}>
				{text}
			</span>
		</div>
	);
}

export default Tooltip;
