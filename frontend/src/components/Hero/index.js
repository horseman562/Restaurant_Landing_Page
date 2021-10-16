import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn } from './HeroElements'



const Hero = ({toggle, isOpen}) => {
    
    return (
        <HeroContainer>
           
           <Sidebar toggle={toggle} isOpen={isOpen} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Greatest Bread Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
    )
}

export default Hero
