import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import classes from "./AssociatedInstitutions.module.css"
import { Container, Row } from 'react-bootstrap';
function index({data}) {
    const settings = {
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },

        ]
    };

    return (
        <>
            <h3 className={`${classes.heading}`}>Associated Institutions </h3>
            <Container>
                <Slider {...settings} className=" ">
                    {data.colleges && data.colleges.map((college) => {
                        return (
                            <Row className={`${classes.Associated_row}`} key={college.college_id}>
                                <div className={`${classes.Associated_col}`} style={{ width: "100%" }} >
                                    <img className=' p-0 ' style={{ width: "100%" }} src={college.logo_path + college.college_logo} alt="Our Client" />
                                </div>
                            </Row>
                        )
                    })
                    }
                </Slider>
            </Container>
        </>
    )
}

export default index