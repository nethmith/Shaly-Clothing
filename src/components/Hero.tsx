"use client"

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';

function Hero() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-2.jpg",
            title: "Summer Special Sale",
            mainTitle: "Get up to 60% off",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner-3.jpg",
            title: "Summer Symphony",
            mainTitle: "Get up to 60% off",
            price: "$25"
        },
        {
            id: 2,
            img: "/banner-1.jpg",
            title: "Free Shopping",
            mainTitle: "Get up to 60% off",
            price: "$40"
        }
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((slide) => (
                        <Slide
                            key={slide.id}
                            img={slide.img}
                            title={slide.title}
                            mainTitle={slide.mainTitle}
                            price={slide.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero