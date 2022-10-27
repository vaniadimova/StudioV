import React from 'react';
import Image from 'next/image';
import { Tile, TileBackground, TileContent,  TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkLink, WorkRight } from './work';



const Works = () => (
<TileWrapper numOfPages={3}>
<TileBackground>
<WorkBackground/>
</TileBackground>
<TileContent>
<Tile page={0} 
renderContent={({ progress }) => (
<WorkContainer>
    <WorkLeft progress={progress}>
<div></div>
    <div>This Admin Panel includes one Dashboard, Three Pages, 
    Four Apps, and Seven fully functional charts!
</div>
            <div className='text-4xl font-semibold tracking-tight md:text-5xl'>
          <WorkLink href="https://dashboard-ten-lime.vercel.app/">ShopperFeed</WorkLink> </div>
    </WorkLeft>
   <WorkRight progress={progress}>
        <Image  src="/assets/works/pinkpanda.png" layout ="responsive" width={840} height={1620} alt="Pink Panda" />          
   </WorkRight>
</WorkContainer> )}></Tile>
<Tile
    page={1} 
    renderContent={({ progress }) => (
    <WorkContainer>
    <WorkLeft progress={progress}>
    <div>Medium is a place to write, read, and connect</div>
    <div>Free to post your blogs on any topic and connect with the rest of the world.</div>
     <div className='text-4xl font-semibold tracking-tight md:text-5xl'> 
     <WorkLink href="https://blogsanity-dun.vercel.app/">Medium</WorkLink>
     </div>               
    </WorkLeft>
    <WorkRight progress={progress}>
        <Image src="/assets/works/steakwallet.png"  layout ="responsive"width={840} height={1620} alt="Steakwallet" />       
</WorkRight>
</WorkContainer>
          )} ></Tile>

<Tile 
    page={2} 
    renderContent={({ progress }) => (
 <WorkContainer>
     <WorkLeft progress={progress}>
        <div>Whether you're starting your first job or advancing to a higher position, getting employed at 
    a dream company in your desired position can be a rewarding experience.</div>
        <div className='text-4xl font-semibold tracking-tight md:text-5xl'>
        <WorkLink href="https://vaniad.vercel.app/">Professional Portfolio</WorkLink>      
                </div>                            
    </WorkLeft>
    <WorkRight progress={progress}>
            <Image src="/assets/works/showtime.png" layout ="responsive" width={840} height={1620} alt="Showtime"
            />       
</WorkRight>
</WorkContainer>      
 )} ></Tile>
</TileContent>
</TileWrapper>
)

export default Works;

