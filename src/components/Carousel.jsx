import React from 'react'
import b1 from '../assets/img/banner1.png';
import b2 from '../assets/img/banner2.png';
import b3 from '../assets/img/banner3.png';
import b4 from '../assets/img/banner4.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import useFetch from '../hooks/useFetch';

const Carousel = () => {
    // const banners = [b1, b2, b3, b4, b1];
    const { data: banners, error, loading } = useFetch('https://livesportapi.online/api/banner');
    // console.log('banner', banners)
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >

                {banners?.map((item, index) => {
                    return <SwiperSlide key={index} className='p-2 p-sm-3'>
                        <img className='bannerImg  rounded-4' src={item.img_url} />
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}

export default Carousel
