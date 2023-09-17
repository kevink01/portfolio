import Image from 'next/image';
import { createURL } from '@/sanity';
import { Skill, Tool } from '@/typings';

type Props = {
	size: number;
	technologies: Skill[] | Tool[];
};

function Technologies({ size, technologies }: Props) {
	return (
		<div>
			<p>Technologies used:</p>
			<div className='flex flex-row flex-wrap mobile:justify-start space-x-1 1920:space-x-2 w-full'>
				{technologies?.map((technology) => {
					return (
						<Image key={technology._id} src={createURL(technology.image).url()} width={size} height={size} alt='Tech' />
					);
				})}
			</div>
		</div>
	);
}

export default Technologies;
