import React from 'react';
import { SliderItem  } from './slider';
import  SliderContainer  from './slider';
import  Image from 'next/image'

const ClientLogos: React.FC = () => (
    <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
    
    <SliderItem width={200}>
        <Image 
        src="/assets/trustedby/auduborn.png" 
        width={200} 
        height={50}
        alt="Auduborn"
        objectFit='contain'
        />
    </SliderItem>

    <SliderItem width={200}>
        <Image src="/assets/trustedby/exodus.png" 
        width={200} 
        height={50}
        alt="Exodus"
        objectFit='contain'
        />
    </SliderItem>

    <SliderItem width={200}>
        <Image src="/assets/trustedby/coinbase.png" 
        width={200} 
        height={50}
        alt="Coinbase"
        objectFit='contain'
        />
    </SliderItem>

    <SliderItem width={200}>
        <Image src="/assets/trustedby/robot.png" 
        width={200} 
        height={50}
        alt="Robot"
        objectFit='contain'
        />
    </SliderItem>

    <SliderItem width={200}>
        <Image src="/assets/trustedby/mask.png" 
        width={200} 
        height={50}
        alt="Mask"
        objectFit='contain'
        />
    </SliderItem>

   

    <SliderItem width={200}>
        <Image src="/assets/trustedby/cat.png" 
        width={200} 
        height={50}
        alt="Cat"
        objectFit='contain'
        />
    </SliderItem>

    <SliderItem width={200}>
        <Image src="/assets/trustedby/redcat.png" 
        width={200} 
        height={50}
        alt="RedCat"
        objectFit='contain'
        />
    </SliderItem>
   
</SliderContainer>
</>
)

export default ClientLogos;