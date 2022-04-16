import React from 'react';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Review from './review';

const Testimonials: React.FC = () => (
    <Carousel className='bg-black text-white py-10 lg:py-20 '>
        <CarouselItem index={0}>
           <Review by="Axel (Showtime)">
               Vania and Showtime both share the love for high quality, high-end, and high-performance web aplications.
           </Review>
        </CarouselItem>
        <CarouselItem index={1}>
           <Review by="Pink (PinkPanda)">
           Great piece of software, I use it on my smallest projects and when I'm not in my main terminal.   
           </Review>
        </CarouselItem>
        <CarouselItem index={2}>
           <Review by="Adam (JSMastery)">
           My experience had been great with you guys I love the features, and how you took time to design a website that is easy and very professional looking!     
           </Review>
        </CarouselItem>
        <CarouselItem index={3}>
           <Review by="Axel (Dev Community)">
           I love how you put each step together with guidance to create an awesome website for new and more experience business owners.
           </Review>
        </CarouselItem>
    </Carousel>
)

export default Testimonials;