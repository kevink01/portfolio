import Head from 'next/head';
import Welcome from '@/components/welcome';
import Projects from '@/components/projects';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
	return (
		<div className='bg-[#121212] font-mono overflow-scroll h-screen scroll-smooth snap-y snap-mandatory basis-2/4 select-none'>
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
				<div className='h-px'></div> {/* Header for snapping */}
				<section id='home' className='section'>
					<Welcome />
				</section>
				<section id='experience' className='section'>
					<Experiences />
				</section>
				<section id='projects' className='section'>
					<Projects />
				</section>
				<section id='skills' className='section'>
					<Skills />
				</section>
				<section id='contact' className='section'>
					<Contact />
				</section>
				<div className='h-px'></div> {/* Footer for snapping */}
			</main>
		</div>
	);
}
