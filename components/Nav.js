import { HiHome, HiUser, HiCommandLine, HiViewColumns, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router'

//  links
const links = [
	{ name: 'home', label: 'The home page', path: '/', icon: <HiHome /> },
	{ name: 'about', label: 'The about page', path: '/about', icon: <HiUser /> },
	{ name: 'capabilities', label: 'The capabilities page', path: '/capabilities', icon: <HiCommandLine /> },
	{ name: 'work', label: 'The work page', path: '/work', icon: <HiViewColumns /> },
	{
		name: 'contact',
		label: 'the contact page',
		path: '/contact',
		icon: <HiEnvelope />,
	},
];

const Nav = () => {
	const router = useRouter();
	const pathname = router.pathname;
	return (
		<nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
			<div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
				{links.map((link) => {
					return (
						<Link
							className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
							href={link.path}
							aria-label={link.name}
							key={link.name}
						>
							<div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
								<div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
									<div className='text-[12px] leading-none font-semibold capitalize'>{link.name}</div>
									<div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2' />
								</div>
							</div>
							<div>{link.icon}</div>
						</Link>
					)
				})}
			</div>
		</nav>
	);
};

export default Nav;
