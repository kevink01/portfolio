import Image from 'next/image';
import Tooltip from './tooltip';
import { type Technologies as Tech } from '@/types/experience';
import { getImage } from '@/util/getImage';

type Props = {
	alignment: 'left' | 'right';
	id: string;
	size: number;
	technologies: Tech;
};

function Technologies({ alignment, id, size, technologies }: Props) {
	return (
		<div>
			<p>Technologies used:</p>
			<div className='flex flex-row flex-wrap mobile:justify-start space-x-1 1920:space-x-2 w-full'>
				{technologies.map((technology) => {
					return (
						<Tooltip alignment={alignment} text={technology.name} key={`${id}-${technology.name}`}>
							<Image src={getImage(technology.image_url)} width={size} height={size} alt={technology.name} />
						</Tooltip>
					);
				})}
			</div>
		</div>
	);
}

export default Technologies;
