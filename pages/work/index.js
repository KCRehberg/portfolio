import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { NextSeo } from 'next-seo';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import WorkSlider from '../../components/WorkSlider';

const Work = () => {
	return (
		<>
			<NextSeo
				title="KCRehberg | Work"
				description="Examples of applications and websites that I have built on my web development journy."
			/>
			<div className="h-full bg-primary/30 py-36 flex items-center">
				<Circles />
				<div className='container mx-auto'>
					<div className='flex flex-col xl:flex-row gap-x-8'>
						<div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
							<motion.h2
								variants={fadeIn('up', 0.2)}
								initial='hidden'
								animate='show'
								exit='hidden'
								className='h2 mt-12 md:mt-0 xl:mt-12'
							>
								My work <span className='text-accent'>.</span>
							</motion.h2>
							<motion.p
								variants={fadeIn('up', 0.4)}
								initial='hidden'
								animate='show'
								exit='hidden'
								className='hidden md:block mb-4 max-w-[400px] mx-auto lg:mx-0'
							>
								From concept to deployment, my portfolio encapsulates the journey of crafting and refining
								innovative web solutions, harnessing the potential of modern software tools, libraries and frameworks.
							</motion.p>
						</div>
						<motion.div
							variants={fadeIn('down', 0.6)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='w-full xl:max-w-[65%]'
						>
							<WorkSlider />
						</motion.div>
					</div>
				</div>
				<Bulb />
			</div>
		</>
	)
};

export default Work;
