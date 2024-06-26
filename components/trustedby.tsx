import React from 'react';
import ClientLogos from './client-logos';
import Testimonials from './testimonials';
import s from '../styles/trusedby.module.css'
import Link from 'next/link';

const TrustedBy: React.FC = () => (
<section
className='bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}'>
    <div className='flex-1'></div>
    <div className='flex flex-col items-center justify-center'>
        <h3 className='mb-10 text-xl font-bold text-center'>
            <span className='whitespace-nowrap'> Created
             By VaniaD</span> {'  '}
            <span className='whitespace-nowrap'> Some of our Art Projects 
            </span>
        </h3>
        <Link 
        className='text-xl underline'
        href="https://wirestock.io/vaniad555">Click me to see more art 
        </Link>
    </div>
    <ClientLogos />
    <div className='flex flex-col items-center justify-center'>
    <div className='container mx-auto lg:max-w-[70%] lg:px-10'>
        <h3 className='text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]'>
        We believe in communication and a transparent development process.
        We believe in communication and a transparent development process.
        We believe in communication and a transparent development process.
        </h3>
    </div>
</div>
<Testimonials />

</section>
);

export default TrustedBy;