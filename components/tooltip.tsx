import React, { useState } from 'react';

type Props = {
	children: React.ReactNode;
	text: string;
};

function Tooltip({ children, text }: Props) {
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => {
		setOpen((prev) => !prev);
	};

	return (
		<div className='group relative inline-block' onClick={toggleOpen}>
			{children}
			<span className={`tooltip ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}>{text}</span>
		</div>
	);
}

export default Tooltip;
