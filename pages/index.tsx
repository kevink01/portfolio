import Head from 'next/head';
import Welcome from '@/components/welcome';
import Experiences from '@/components/experiences';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import { getExperiences, getPageInfo, getProjects, getSkills } from '@/util';
import { PageInfo } from '@/types/page-info';
import { Skill, type Skills as SkillType } from '@/types/skill';
import { type Experience } from '@/types/experience';
import { type Project } from '@/types/project';

type Props = {
	experiences: Experience[];
	pageInfo: PageInfo;
	projects: Project[];
	skills: SkillType;
};

export default function Home({ experiences, pageInfo, projects, skills }: Props) {
	return (
		<div className='bg-[#121212] font-mono overflow-x-hidden overflow-y-scroll h-screen scrollbar scrollbar-track-gray-900 scrollbar-thumb-primary scroll-smooth snap-y snap-mandatory basis-2/4 select-none'>
			{/* ^^ Solution for snapping: https://css-tricks.com/practical-css-scroll-snapping/ ^^ */}
			<Head>
				<title>Kevin Kulich&apos;s Portfolio</title>
				<meta name='description' content='A web portfolio created with Next JS 13' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='apple' sizes='76x76' href='/portfolio-apple.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/portfolio-favicon-32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/portfolio-favicon-16.png' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<main className='text-white'>
				<div className='h-px' id='header'></div> {/* Header for snapping */}
				<section id='home' className='section'>
					<Welcome pageInfo={pageInfo} />
				</section>
				<section id='experience' className='section'>
					<Experiences experiences={experiences} />
				</section>
				<section id='projects' className='section'>
					<Projects projects={projects} />
				</section>
				<section id='skills' className='section'>
					<Skills skills={skills} />
				</section>
				<section id='contact' className='section'>
					<Contact pageInfo={pageInfo} />
				</section>
				<div className='h-20' id='footer'></div> {/* Footer for snapping */}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	let experiences: Experience[] = [];
	let pageInfo: PageInfo | undefined = undefined;
	let projects: Project[] = [];
	let skills: Skill[] = [];
	await Promise.allSettled([getExperiences(), getPageInfo(), getProjects(), getSkills()]).then((values) => {
		experiences = values[0].status === 'fulfilled' ? values[0].value : [];
		pageInfo = values[1].status === 'fulfilled' ? values[1].value : undefined;
		projects = values[2].status === 'fulfilled' ? values[2].value : [];
		skills = values[3].status === 'fulfilled' ? values[3].value : [];
	});
	return {
		props: {
			experiences,
			pageInfo,
			projects,
			skills,
		},
		revalidate: 60,
	};
}
