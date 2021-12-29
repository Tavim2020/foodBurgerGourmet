import React from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import { ListBurgerContainer } from './style/ListBurgerStyle';


const ListBurger = ({title, ingredient, value, img}) => {

    const { bag, setBag } = React.useContext(GlobalContext);

    const product = {
        title,
        ingredient,
        value,
        img,
        quantidade: 1
    }

    
    function addToCar(event){

        event.target.textContent = 'Thanks!';

        setTimeout(()=>{
            event.target.textContent = 'Pedir';
        }, 1000)

        if(bag.length === 0){

            setBag(bag => [...bag, product]);
        }
        else{
            
            const produto = bag.find(produto => produto.title === product.title);
            const position = bag.indexOf(produto);
            
            
            if(position !== -1){
                bag[position].quantidade++
                setBag([...bag]);
            }

            else{
                setBag(bag => [...bag, product]);
            }

        }
    }

    return (
        <ListBurgerContainer>

            <img src={img} alt="ThePurpleChicken" />

            <div>

                <h3>{title}</h3>

                <p>
                    Ingredientes: {ingredient}.
                </p>

                <p>Valor: R$ {value}</p>

                <button onClick={addToCar}>
                    Pedir
                </button>

            </div>

        </ListBurgerContainer>
    )
}

export default ListBurger;
