import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { NextSeo } from 'next-seo';
import Circles from '../../components/Circles';
import Alert from '../../components/Alert';
import emailjs from '@emailjs/browser';

const initialState = {
	"to_name": "Kevin",
	"from_name": "",
	"subject": "",
	"message": "",
	"reply_to": ""
};

const Contact = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [body, setBody] = useState(initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.send('service_0dikgne', 'template_bcauu4l', body, '72p0_8CiQnf2ipNnD');
		setBody(initialState);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 10000);
	};

	return (
		<>
			<NextSeo
				title="KCRehberg | Contact"
				description="Let's connect to discuss how I could help solve the techincal problems and challenges you or your company are facing."
			/>
			<div className='h-full bg-primary/30'>
				<Circles />
				<div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
					<div className='flex flex-col w-full max-w-[700px]'>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2 text-center mb-4 mt-8 md:mb-12 md:mt-0'
							onSubmit={handleSubmit}
						>
							Let&apos;s <span className='text-accent'>connect.</span>
						</motion.h2>
						<motion.form
							variants={fadeIn('up', 0.4)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='flex-1 flex flex-col gap-3 md:gap-6 w-full mx-auto'
							onSubmit={handleSubmit}
							onChange={(e) => setBody({ ...body, [e.target.name]: e.target.value })}
						>
							<div className='flex gap-x-6 w-full'>
								<input value={body.from_name} type='text' placeholder='name' name='from_name' className='input' />
								<input value={body.reply_to} type='email' placeholder='email' name='reply_to' className='input' />
							</div>
							<input value={body.subject} type='text' placeholder='subject' name="subject" className='input' />
							<textarea value={body.message} placeholder='message' name="message" className='textarea' />
							<button type="submit" className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
								<span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
								<BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
							</button>
						</motion.form>
					</div>
				</div>
				{showAlert && <Alert />}
			</div>
		</>
	)
};

export default Contact;
