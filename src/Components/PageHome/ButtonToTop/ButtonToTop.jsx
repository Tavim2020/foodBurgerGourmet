import React from 'react';
import { ButtonToTopContainer } from './style/ButtonToTopStyle';

import ArrowToTop from '../../../assets/buttonToTop/ArrowToTop.svg';

const ButtonToTop = () => {

    function MoveToTop(){
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <ButtonToTopContainer
            onClick={MoveToTop}
        >

            <img 
                src={ArrowToTop} 
                alt="Arrow-To-Top-Icon" 
                title="ToTop"
            />
            
        </ButtonToTopContainer>
    )
}

export default ButtonToTop;
