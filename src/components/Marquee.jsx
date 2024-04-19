import React from 'react'
import marqueeIcon from '../assets/img/marquee.png';
import useFetch from '../hooks/useFetch';
const Marquee = () => {
    const { data: bannerText, error, loading } = useFetch('https://livesportapi.online/api/bannerText');
    // console.log(bannerText);
    return (<div className="marqueeContainer  mx-2">
        <img src={marqueeIcon} className='soundIcon' />

        <marquee className=' fw-bold  ' behavior="" direction="left">
            <span>{bannerText?.text}</span>
        </marquee>
    </div>

    )
}

export default Marquee
