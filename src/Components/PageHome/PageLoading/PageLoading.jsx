import React from 'react';
import { PageLoadingContainer } from './style/PageLoadingStyled';

import FoodImg from '../../../assets/loadingPage/Food.webp';
import BurgerImg from '../../../assets/loadingPage/Burger.webp';
import GourmetImg from '../../../assets/loadingPage/Gourmet.webp';
import { GlobalContext } from '../../../Context/GlobalContext';

const PageLoading = () => {

    const { 
        textPagePrincipalChange,
        home
    } = React.useContext(GlobalContext);

    return (
        <PageLoadingContainer hometrue={home}>

            <div className="Imagens">

                <img 
                    className="food" 
                    src={FoodImg} 
                    alt="Food_Image" 
                    title="Food Burger Gourmet"
                />

                <img 
                    className="burger" 
                    src={BurgerImg} 
                    alt="Burger_Image" 
                    title="Food Burger Gourmet"
                />

                <img 
                    className="gourmet" 
                    src={GourmetImg} 
                    alt="Gourmet_Image" 
                    title="Food Burger Gourmet"
                />


                <h2 
                    className="textForImage"
                    ref={textPagePrincipalChange}>
                    A delicia do gourmet você é quem faz.
                </h2>

            </div>

            <div className="textLoading">

                <p className="pont 2pont 3pont">
                    Loading.
                </p>

            </div>

        </PageLoadingContainer>
    )
}

export default PageLoading;
