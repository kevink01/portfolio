import Head from 'next/head';
import Welcome from '@/components/welcome';
import Projects from '@/components/projects';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
	return (
		<div className='main'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<div className='h-px'></div> {/* Header for snapping */}
				{/* <section id='home' className='section'>
					<Welcome />
				</section> */}
				<section id='experience' className='section'>
					<Experiences />
				</section>
				<section id='projects' className='section'>
					<Projects />
				</section>
				{/* <section id="skills" className="section">
					<Skills />
				</section>
				<section id="contact" className="section">
					<Contact />
				</section> */}
				<div className='h-px'></div> {/* Footer for snapping */}
			</main>
		</div>
	);
}
