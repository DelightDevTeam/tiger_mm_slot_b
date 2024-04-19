import React from 'react'
import Carousel from '../components/Carousel'
import '../assets/css/home.css'
import HomeTabs from '../components/HomeTabs'
import Marquee from '../components/Marquee'
const HomePage = () => {
    return (
        <div>
            <Carousel />
            <Marquee />

            <HomeTabs />
        </div>
    )
}

export default HomePage
