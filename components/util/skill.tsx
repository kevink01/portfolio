import React from 'react';
type Props = {
	name: string;
	progress: number;
	color: string;
};

function Skill({ name, progress, color }: Props) {
	return (
		<div className="flex flex-row space-x-3">
			<div className="flex items-center justify-end w-1/4 overflow-x-hidden text-right h-full pr-2">
				<span className="w-full overflow-x-hidden truncate">{name}</span>
			</div>
			<div className="w-3/4">
				<div
					className={`skill-progress-bar`}
					style={{ backgroundColor: `#${color}`, width: `${progress}%` }}>
					<span className="skill-value-label">{progress}%</span>
				</div>
			</div>
		</div>
	);
}

export default Skill;
