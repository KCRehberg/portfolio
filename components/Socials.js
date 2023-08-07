import Link from "next/link";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri'

const Socials = () => {
	return (
		<div className='flex items-center gap-x-5 text-xl'>
			<Link href='https://github.com/KCRehberg' target="_blank" className='hover:text-accent transition-all duration-300'>
				<RiGithubLine />
			</Link>
			<Link href='https://www.linkedin.com/in/kevin-rehberg-338b40156/' target="_blank" className='hover:text-accent transition-all duration-300'>
				<RiLinkedinLine />
			</Link>
			<Link href='https://twitter.com/skaroeth' target="_blank" className='hover:text-accent transition-all duration-300'>
				<RiTwitterLine />
			</Link>
		</div>
	);
};

export default Socials;
