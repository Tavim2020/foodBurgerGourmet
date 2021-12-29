import React from 'react';
import { BackgroundHomeContainer } from './style/BackgroundHomeStyle';
import BurgerBackground from '../../../assets/home/burgerBackground.webp';


const BackgroundHome = () => {
    return (
        <BackgroundHomeContainer>

            <img src={BurgerBackground} alt="Background_Imagem" />
            
        </BackgroundHomeContainer>
    )
}

export default BackgroundHome;
