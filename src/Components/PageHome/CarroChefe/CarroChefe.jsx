import React from 'react';
import { CarroChefeContainer } from './style/CarroChefeStyle';

import HamburgerChefe from '../../../assets/carroChefe/burgerChefe.jpg';
import { Link } from 'react-router-dom';

const CarroChefe = () => {
    return (
        <CarroChefeContainer> 

            <h1>Nosso Carro Chefe -- &#62; Custon Burger</h1>

            <div className="BannerAndText">

                <img 
                    src={HamburgerChefe} 
                    alt="Burger_Chefe"  
                />

                <div className="ContainerTextBurgerChefe">

                    <p>
                        Aqui você escolhe os ingredientes e a gente 
                        cuida para que tudo fique perfeito e que 
                        você tenha uma experiência única ao escolher
                        o que vai ou não no seu lanche e pagar somente
                        o selecionado. 
                    </p>

                    <Link to="/cardapio#custonBurger">

                        <button>

                            Vamos La?!

                        </button>

                    </Link>


                </div>

            </div>
            
        </CarroChefeContainer>
    )
}

export default CarroChefe;
