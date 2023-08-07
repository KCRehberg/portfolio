import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { BsArrowRight } from 'react-icons/bs';

// data
const workSlides = {
	slides: [
		{
			images: [
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb1.jpg',
					id: 110,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb2.jpg',
					id: 111,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb3.jpg',
					id: 112,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb4.jpg',
					id: 113,
				},
			],
			id: 100,
		},
		{
			images: [
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb4.jpg',
					id: 114,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb1.jpg',
					id: 115,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb2.jpg',
					id: 116,
				},
				{
					title: 'title',
					path: 'https://kcrehberg.github.io/portfolio/thumb3.jpg',
					id: 117,
				},
			],
			id: 101,
		},
	],
};

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='h-[280px] sm:h-[480px]'
		>
			{workSlides.slides.map((slide) => {
				return (
					<SwiperSlide key={slide.id}>
						<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
							{slide.images.map((image) => {
								return (
									<div key={image.id} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
										<div className='flex items-center justify-center relative overflow-hidden'>
											<img src={image.path} alt={image.title} width={500} height={300} />
											<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700' />
											<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
												<div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
													<div className='delay-100'>LIVE</div>
													<div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
													<div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
};

export default WorkSlider;
