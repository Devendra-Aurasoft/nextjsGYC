import React from 'react'
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
function index() {
    return (
        <>
            {/* -----------------------------------------------
            ============== Carousel Start ===================
            ----------------------------------------------- */}
            <Carousel className='Home_Slider'>
                <Carousel.Item>
                    <Image src="/Image/home/sliders1.png" width="1440px" height="600px" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/Image/home/sliders2.png" width="1440px" height="600px" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/Image/home/sliders3.png" width="1440px" height="600px" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="/Image/home/sliders4.png" width="1440px" height="600px" />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default index