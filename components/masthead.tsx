import React, { useRef, useContext, useState,  useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollContext } from '../utils/scroll-observer';

const Masthead: React.FC = () => {
    const [ imageLoaded, setImageLoaded ] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;
     if (elContainer) {
         progress = Math.min( 1, scrollY / elContainer.clientHeight );
     }

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true)
    }, [])

    return (
        <div  ref={refContainer}  
        className='sticky top-0 flex flex-col items-center justify-center min-h-screen -z-10' 
        style={{transform: `translateY(-${progress * 20}vh)`}}
        ><video 
            autoPlay 
            loop muted 
            playsInline 
            className="absolute object-cover w-full h-full">
                <source src='/assets/masthead-bg.m4v' type='video/mp4; codecs=hvc1' />
                <source src='/assets/masthead-bg.webm' type='video/webm; codecs=vp9' />
            </video>
            <div className={`flex-grow-0 pt-10 transition-opacity 
            duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                <Image 
                src={'/assets/logo.svg'} alt='logo' width={140} height={220}  />
            </div>
            <div className='p-12 font-bold  z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>Creative</h1>
                <h1 className='mb-6 text-4xl xl:text-5xl'> Studio V</h1>
                <h2 className='mb-2 text-2xl tracking-tight xl:text-3xl'>
                    <span>Digital Art </span> <span> and </span>
                </h2>
                <h2 className='mb-2 text-2xl tracking-tight xl:text-3xl'>
                    <span>&</span> <span>Web Development</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-20  md:pb-10 transition-all duration-1000 ${
                imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
            }`}>
            
            
         <Link href={'/'}>
         
         <Image 
            src={'/assets/arrow-down.png'} 
            alt='scroll down' 
            width="56" height="60"
            
            onLoad={handleImageLoad}
            />      
         </Link>   
            
            
            </div>
     </div>
    )
}

export default Masthead;