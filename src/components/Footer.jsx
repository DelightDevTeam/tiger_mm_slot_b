import React from 'react'
import '../assets/css/footer.css';
import { NavLink } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import all from '../assets/img/all.png';
import slot from '../assets/img/slot.png';
import casino from '../assets/img/casino.png';
import sport from '../assets/img/sport.png';
import fish from '../assets/img/fish.png';
import OwlCarousel from 'react-owl-carousel';
import { FaFacebookF } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const menu = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Promotion', link: '/promotion' },
        { id: 3, title: 'Game Log', link: '/gamelog' },
        { id: 4, title: 'History', link: '/history' },
        { id: 5, title: 'Profile', link: '/profile' },
    ];
    const games = [
        { id: 1, title: 'All Games', img: all, link: '/' },
        { id: 2, title: 'Slots', img: slot, link: '/' },
        { id: 3, title: 'Casinos', img: casino, link: '/' },
        { id: 4, title: 'Sport Book', img: sport, link: '/' },
        { id: 5, title: 'Fishing', img: fish, link: '/' },
    ]
    const follow = [
        { id: 1, title: 'Facebook', icon: <FaFacebookF size={22} color='#2B1C40 ' />, link: '/' },
        { id: 2, title: 'Telegram', icon: <FaTelegramPlane size={22} color='#2B1C40 ' />, link: '/' },
        { id: 3, title: 'Instagram', icon: <FaInstagram size={22} color='#2B1C40 ' />, link: '/' },
    ];
    return (<footer className='pt-5 pb-4 px-2 px-md-5 mb-5 mb-lg-0'>
        <div className=" ">
            <h2 className='mb-4 footerTitle'>Live Sports Slot</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum nesciunt reprehenderit amet ipsam ullam, sit maxime deleniti tempora dolorem pariatur voluptas tenetur at ut atque quisquam corrupti unde repellat omnis.</p>
            <NavLink to={'/login'}><button className='py-2 px-5'>LOGIN</button></NavLink>
        </div>
        <div className=" ">
            <div className=" mt-sm-5 mt-lg-0">
                <div className="mt-4">
                    <h5 className='mb-sm-4 footerTitle'>Games</h5>
                    <div className="d-flex align-items-center gap-4">
                        <OwlCarousel items={3}
                            className="owl-theme"
                            loop
                            autoplayTimeout={900}
                            autoplay={true}
                            margin={15} >
                            {games.map((item) => {
                                return <NavLink className={'footerGame gap-2  d-flex align-items-center justify-content-center '} to={item.link} key={item.id}>
                                    <img src={item.img} />
                                    <p className='pt-3'  >{item.title}</p>
                                </NavLink>
                            })}
                        </OwlCarousel>

                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-6"><h5 className='mb-4 footerTitle'>Menu</h5>
                        <div className="">
                            {menu.map((item) => {
                                return <NavLink to={item.link} key={item.id}>
                                    <p>{item.title}</p>
                                </NavLink>
                            })}
                        </div>
                    </div>
                    <div className="col-6">
                        <h5 className='mb-4 footerTitle'>Follow Us</h5>
                        <div className="d-flex align-items-center gap-2">{follow.map((item) => {
                            return <NavLink className={'shadow-lg'} to={item.link} key={item.id}>
                                <p className='followIcon'>{item.icon}</p>
                            </NavLink>
                        })}</div>
                    </div>
                </div> */}

            </div>
        </div>
        <div className="mt-4 text-center footerTitle m-0 p-0">
            <p className='fw-bold'>2024 All Rights Reserved</p>
        </div>
    </footer>
    )
}

export default Footer
