import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiShopify, SiTypescript, SiCypress, SiSelenium, SiJasmine, SiJest } from 'react-icons/si';
import { FaGolang, FaRust } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { NextSeo } from 'next-seo';
import CountUp from 'react-countup';
import Circles from '../../components/Circles';

const aboutData = [
	{
		id: 20,
		title: 'skills',
		info: [
			{
				id: 31,
				title: 'Front End Development',
				icons: [
					<FaHtml5 key={1000} />,
					<FaCss3 key={1001} />,
					<FaJs key={1002} />,
					<FaReact key={1003} />,
					<SiNextdotjs key={1004} />,
					<SiShopify key={1005} />,
					<FaWordpress key={1006} />,
				],
			},
			{
				id: 32,
				title: 'Back End Development',
				icons: [
					<FaNodeJs key={1007} />,
					<SiTypescript key={1008} />,
					<SiNextdotjs key={1009} />,
					<FaGolang key={1010} />,
					<FaRust key={1011} />,
				],
			},
			{
				id: 33,
				title: 'Testing',
				icons: [
					<SiCypress key={1012} />,
					<SiSelenium key={1013} />,
					<SiJasmine key={1014} />,
					<SiJest key={1015} />,
				],
			},
		],
	},
	{
		id: 21,
		title: 'experience',
		info: [
			{
				id: 34,
				title: 'Full Stack Web Developer - Anarchy Studio',
				stage: '2021 - 2023',
			},
			{
				id: 35,
				title: 'Wordpress Developer - Rabid Minds',
				stage: '2019 - 2021',
			},
			{
				id: 36,
				title: 'Student - Zero To Mastery',
				stage: '2017 - 2019',
			},
		],
	},
	{
		id: 22,
		title: 'credentials',
		info: [
			{
				id: 37,
				title: 'AWS Cloud Practitioner - AWS, Seattle, WA',
				stage: '2023',
			},
			{
				id: 38,
				title: 'ETH NYC Hackathon Cash Prize - ETHGlobal, New York, NY',
				stage: '2022',
			},
		],
	},
];

const About = () => {
	const [index, setIndex] = useState(0);
	return (
		<>
			<NextSeo
				title="KCRehberg | About"
				description="About me and the skills, experience and credientials that I have obtained throughout my career."
			/>
			<div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
				<Circles />
				<div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
					<div className='flex-1 flex flex-col justify-center'>
						<motion.h2
							variants={fadeIn('right', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2'
						>
							Bridging the Gap Between <span className='text-accent'>Design</span> and <span className='text-accent'>Functionality</span>
						</motion.h2>
						<motion.p
							variants={fadeIn('right', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
						>
							6 Years ago I began my journey as a Web Developer and Programmer. Since then I&apos;ve built and managed wordpress websites
							for clients, contributed to a large variety of software challenges for a web3 start up, and programmed countless of my own personal projects.
						</motion.p>
						<div>
							<motion.div
								variants={fadeIn('right', 0.6)}
								initial='hidden'
								animate='show'
								exit='hidden'
								className='hidden xl:flex xl:gap-x-4'>
								<div className='relative text-start flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={4} duration={5} /> +
									</div>
									<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
								</div>
								<div className='relative text-start flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={1500} duration={5} /> +
									</div>
									<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Commits</div>
								</div>
								<div className='relative text-start flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
									<div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
										<CountUp start={0} end={20000} duration={5} /> +
									</div>
									<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Lines of code</div>
								</div>
							</motion.div>
						</div>
					</div>
					<motion.div
						variants={fadeIn('left', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
					>
						<div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
							{aboutData.map((item, itemIndex) => {
								return (
									<div
										key={item.id}
										className={`${index === itemIndex && 'text-accent after:w-[100%] after:!bg-accent after:transition-all duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
										onClick={() => setIndex(itemIndex)}
									>
										{item.title}
									</div>
								)
							})}
						</div>
						<div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
							{aboutData[index].info.map((item, itemIndex) => {
								return (
									<div key={item.id} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
										<div className='font-light mb-2 md:mb-0'>{item.title}</div>
										<div className='hidden md:flex'>-</div>
										<div>{item.stage}</div>
										<div className='flex gap-x-4'>
											{item.icons?.map((icon) => {
												return <div key={icon.key} className='text-2xl'>{icon}</div>
											})}
										</div>
									</div>
								)
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default About;
