import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Alert = () => {
	return (
		<motion.div
			variants={fadeIn('down', 0.4)}
			initial='hidden'
			animate='show'
			exit='hidden'
			className="absolute top-12 left-2/4 !-translate-x-2/4 flex justify-center mt-2"
		>
			<div className="flex items-center w-full px-6 py-4 text-green-700 bg-green-300 rounded">
				<span><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 " fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
				</svg></span>
				<p className="ml-2 text-black text-medium whitespace-nowrap">Success! I&apos;ll get to your message as soon as possible!</p>
			</div>
		</motion.div>
	)
}

export default Alert;