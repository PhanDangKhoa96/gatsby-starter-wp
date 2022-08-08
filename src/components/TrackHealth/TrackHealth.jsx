import { isEmpty } from 'lodash'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const TrackHealth = ({ data: { title, description, content } }) => {

    const sliderSettings = {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: "fraction",
        },
        loop: true,
        navigation: {
            nextEl: ".phone-slider-next",
            prevEl: ".phone-slider-prev",
        },
    }

    return (
        <section class="text-center gap-x-24 xl:grid xl:grid-cols-[0.7fr_1fr] xl:text-left xl:relative">
            <div class="container mb-9 md:w-3/5 xl:w-full xl:pl-[calc((255%-1140px)/2)]">
                <span class="flex flex-col justify-center items-center mb-6 gap-x-3 gap-y-4 md:flex-row xl:justify-start">
                    <span class="block w-[14px] h-[2px] bg-foreground"></span>
                </span>
                <h2 class="mb-4">{title || 'Track Your Health History Periodically'}</h2>

                <p class="mb-7">{description || 'A more fluid communication reduces the risk of errors and enhances your protection from a forensic point of view'}</p>

                <a href="#" class="text-primary font-bold text-sm !inline-flex items-center gap-x-4 justify-center">
                    <span>LEARN MORE </span>
                    <i class="ri-arrow-right-line"></i>
                </a>
            </div>
            {!isEmpty(content) &&
                <>
                    <div class="h-[515px] relative overflow-hidden w-full mb-9 xl:h-[640px]">
                        <div class="absolute left-1/2 w-full h-full bg-[rgba(21,101,216,0.1)] rounded-lg md:left-[calc(50%-210px)]"></div>

                        <img src="https://wtsd.saigondigital.dev/wp-content/themes/wtsd/assets/images/phone-frame.png" alt="" class="absolute left-1/2 -translate-x-[109px] translate-y-7 w-[205px] aspect-[180/385] md:left-[26px] md:translate-x-0 md:w-[calc((100%-30px*3)/3+14px)] md:h-[440px] xl:h-[564px]" />

                        <div class="absolute left-1/2 w-[calc(50%+96px)] -translate-x-24 translate-y-14 md:ml-10 md:w-[calc(100%-40px)] md:left-0 md:translate-x-0">
                            <Swiper class="swiper phoneSlider" {...sliderSettings}>

                                {content.map((item, index) => {
                                    return (
                                        <SwiperSlide class="swiper-slide asdcdf !w-[180px] !aspect-[180/400] md:!w-[calc((100%-30px*3)/3)] md:!aspect-auto md:!h-[400px] xl:!h-[520px]" key={index}>
                                            <img src={item.image?.sourceUrl || 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png'} alt="" class="w-full h-full object-cover" />
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                    </div>

                    <div class="gap-x-6 xl:flex xl:items-center xl:absolute xl:bottom-1/3 xl:left-[calc((100%-1140px)/2)]">
                        <div class="swiper-pagination after:content-['_screen'] font-bold !static mb-7 xl:order-2 xl:m-0"></div>
                        <div class="flex gap-x-6 justify-center">
                            <button class="phone-slider-prev rounded-full w-14 aspect-square border border-solid border-[#183B56] grid place-items-center"><i class="ri-arrow-left-line text-2xl"></i></button>
                            <button class="phone-slider-next rounded-full w-14 aspect-square border border-solid border-[#183B56] grid place-items-center"><i class="ri-arrow-right-line text-2xl"></i></button>
                        </div>
                    </div>
                </>
            }

        </section>
    )
}

export default TrackHealth

