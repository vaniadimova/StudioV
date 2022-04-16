import React from 'react';
import SliderContainer, { SliderItem } from './slider';
import  Image from 'next/image'

const ClientLogos: React.FC = () => (
    <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
    <SliderItem width={150}>
    <Image 
        src="/assets/trustedby/auduborn.png" 
        width={150} 
        height={50}
        alt="Auduborn"
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
        <SliderItem width={150}>
        <Image src="/assets/trustedby/exodus.png" 
        width={150} 
        height={50}
        alt="Exodus"
        objectFit='contain'
        />
        </SliderItem>
    </SliderContainer>
    </>
)

export default ClientLogos;