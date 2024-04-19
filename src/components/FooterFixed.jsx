import React from 'react'
import '../assets/css/footer.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuGift } from "react-icons/lu";
import { GoLog } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import home from '../assets/img/home.png';
import promotion from '../assets/img/promotion.png';
import gameLog from '../assets/img/gameLog.png';
import history from '../assets/img/history.png';
import profile from '../assets/img/profile.png';

const FooterFixed = () => {
    const footer = [
        { id: 1, title: 'Home', icon: <IoHomeOutline color='#BC45C2' size={21} />, link: '/' },
        { id: 2, title: 'Promotion', icon: <LuGift color='#BC45C2' size={21} />, link: '/promotion' },
        { id: 3, title: 'Game Log', icon: <GoLog color='#BC45C2' size={21} />, link: '/gamelog' },
        { id: 4, title: 'History', icon: <FaRegClock color='#BC45C2' size={21} />, link: '/history' },
        { id: 5, title: 'Profile', icon: <FaRegCircleUser color='#BC45C2' size={21} />, link: '/profile' },
    ]

    return (
        <div className='footerFixed d-flex d-lg-none align-items-center justify-content-between shadow-lg py-3 px-1 px-sm-3'>
            {footer.map((item) => {
                return <NavLink className={'d-flex flex-column align-items-center'} to={item.link} key={item.id}>
                    {item.icon}
                    <small className='footerFixedTitle'>{item.title}</small>
                </NavLink>
            })}
        </div>
    )
}

export default FooterFixed
