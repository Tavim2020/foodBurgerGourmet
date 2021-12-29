import React from 'react';
import { FoodBurgerContainer } from './style/MaisFoodBurgerStyle';
import ListBurger from '../ListMaisBurgerHome/ListBurger';
import burger from '../../../assets/maisFood/ThePurpleChicken.webp';
import { Link } from 'react-router-dom';

const MaisFoodBurger = () => {
    return (
        <FoodBurgerContainer>

            <div className="TitleContainer">

                <h1>+ Food </h1>

                <h1>Burger </h1>

                <h1>Para Você!</h1>

            </div>

            <div>

                <ListBurger 
                    title="The Purple Chicken"
                    ingredient="Pão coberto de gergilim, 
                    Alface, Um delicioso Chicken Crocante e Suculento, 
                    Cheddar, Cebola Roxa, Molho Adocicado de Alho 
                    com Requeijão Cremoso" 
                    value="25,00"
                    img={burger}
                />


                <ListBurger 
                    title="The Purple Chicken"
                    ingredient="Pão coberto de gergilim, 
                    Alface, Um delicioso Chicken Crocante e Suculento, 
                    Cheddar, Cebola Roxa, Molho Adocicado de Alho 
                    com Requeijão Cremoso" 
                    value="25,00"
                    img={burger}
                />


                <ListBurger 
                    title="The Purple Chicken"
                    ingredient="Pão coberto de gergilim, 
                    Alface, Um delicioso Chicken Crocante e Suculento, 
                    Cheddar, Cebola Roxa, Molho Adocicado de Alho 
                    com Requeijão Cremoso" 
                    value="25,00"
                    img={burger}
                />


                <ListBurger 
                    title="The Purple Chicken"
                    ingredient="Pão coberto de gergilim, 
                    Alface, Um delicioso Chicken Crocante e Suculento, 
                    Cheddar, Cebola Roxa, Molho Adocicado de Alho 
                    com Requeijão Cremoso" 
                    value="25,00"
                    img={burger}
                />


            </div>

            <div className="buttonContainerCardapio">

                <Link to="/cardapio">

                    <button>
                        Ver Cardápio Completo!
                    </button>

                </Link>

            </div>
            
        </FoodBurgerContainer>
    )
}

export default MaisFoodBurger;
