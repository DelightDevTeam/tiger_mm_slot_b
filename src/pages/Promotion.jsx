import React from "react";
import '../assets/css/login.css';

import promo1 from '../assets/img/promotion1.png';
import promo2 from '../assets/img/promotion2.jpg';
import promo3 from '../assets/img/promotion3.png';

const Promotion = () => {
    const promotions = [promo2, promo1, promo3];
    return (
        <>
            <div className="mt-5  text-center mb-5">
                <h3 className="my-3 gradient-text">PROMOTION</h3>
                {
                    promotions.map((promo) => {
                        return (
                            <img src={promo} alt="" className="w-100 rounded-lg my-2 px-sm-5 px-2" />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Promotion