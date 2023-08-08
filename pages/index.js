import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { NextSeo } from 'next-seo';

const Home = () => {
	return (
		<>
			<NextSeo
				title="KCRehberg | Home"
				description="Portfolio website for KC Rehberg. A Full Stack Web Developer who's passion is building user friendly, scalable, and performant web applications."
			/>
			<div className='bg-primary/60 h-full'>
				<div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
					<div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
						<motion.h1
							variants={fadeIn('down', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h1 z-20'>
							Building the Web <br /> of{' '}
							<span className='text-accent'>Tomorrow</span>
						</motion.h1>
						<motion.p
							variants={fadeIn('down', 0.3)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-20'
						>
							Passionate full-stack web developer with a flair for crafting seamless digital experiences. From front-end magic to back-end mastery,
							I bring creativity and precision to every line of code, delivering innovative solutions for the web.
						</motion.p>
						<motion.div
							variants={fadeIn('down', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className="hidden md:flex"
						>
							<ProjectsBtn />
						</motion.div>
					</div>
				</div>
				<div className='w-full h-full absolute right-0 bottom-0'>
					<div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0' />
					<ParticlesContainer />
				</div>
			</div>
		</>
	);
};

export default Home;
