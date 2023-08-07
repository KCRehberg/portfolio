import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
	RiHtml5Line,
	RiCss3Line,
	RiJavascriptLine,
} from 'react-icons/ri'
import {
	RxArrowTopRight,
} from 'react-icons/rx'
import {
	TbBrandTypescript,
	TbBrandGolang,
	TbBrandRust,
	TbDatabase,
	TbInfinity
} from "react-icons/tb";

// data
const capabilitiesData = [
	{
		id: 50,
		icon: <RiHtml5Line />,
		title: 'HTML',
		description: 'Structered, semantic and accessible HTML',
	},
	{
		id: 51,
		icon: <RiCss3Line />,
		title: 'CSS',
		description: 'Organized, Responsive and cross-browser CSS',
	},
	{
		id: 52,
		icon: <RiJavascriptLine />,
		title: 'Javascript',
		description: 'Clean, efficient and readable Javascript',
	},
	{
		id: 53,
		icon: <TbBrandTypescript />,
		title: 'Typescript',
		description: 'Robust, safe and maintainable Typescript',
	},
	{
		id: 54,
		icon: <TbBrandGolang />,
		title: 'Golang',
		description: 'Efficient, scalable and performant Golang',
	},
	{
		id: 55,
		icon: <TbBrandRust />,
		title: 'Rust',
		description: 'Powerful, fast and memory safe Rust',
	},
	{
		id: 56,
		icon: <TbDatabase />,
		title: 'Databases',
		description: 'Structured, optimized and scalable databases',
	},
	{
		id: 57,
		icon: <TbInfinity />,
		title: 'DevOps',
		description: 'Automated, integrated and seamless DevOps',
	},
];

const CapabilitiesSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={true}
			pagination={{
				clickable: true
			}}
			modules={[FreeMode, Pagination]}
			className='h-[240px] sm:h-[340px]'
		>
			{capabilitiesData.map((item) => {
				return (
					<SwiperSlide key={item.id}>
						<div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
							<div className='text-4xl text-accent mb-4'>{item.icon}</div>
							<div className='mb-8'>
								<div className='mb-2 text-lg'>{item.title}</div>
								<p className='mx-w-[350px] leading-normal'>{item.description}</p>
							</div>
							<div className='text-3xl'>
								<RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
};

export default CapabilitiesSlider;
