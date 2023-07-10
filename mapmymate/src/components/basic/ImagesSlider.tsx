'use client';
import React from 'react'
import Image from 'next/image'
import pic1 from "/public/pic1.jpg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import { useEffect, useRef } from "react";

export default function ImageSlider({images}:any) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable:true,
        arrows:true,
      };
    
      const slider = useRef<Slider>(null);
    
      function scroll(e: WheelEvent){
          if (slider === null)
              return 0;
        if(slider.current){
            e.deltaY > 0 ? (
                slider.current.slickNext()
            ) : (
                slider.current.slickPrev()
            );
        }
      };
      useEffect(() => {
          window.addEventListener("wheel", scroll,true);
          return () => {
              window.removeEventListener("wheel", scroll, true);
          };
      }, []);
  return (
    <div className='pt-10 mx-[350px]' >
        {
             <Slider  {...settings} ref={slider}>
                {
                    images.map((image:any)=>
                    {
                     return (
                       <div>
                         <Image className='object-cover' width={180} height={180} alt="" src={image} />
                       </div>
                     );
                    })
                }
             
           </Slider>

        }
       
    </div>
  )
}