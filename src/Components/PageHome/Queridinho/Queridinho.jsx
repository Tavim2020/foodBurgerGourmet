import React from 'react';
import { CadaQueridinho } from './style/QueridinhoStyle';

import Car from '../../../assets/hamburgers/car/car.svg';
import Heart from '../../../assets/hamburgers/heart/coracao.svg';
import { GlobalContext } from '../../../Context/GlobalContext';

const Queridinho = ({img, title, value, ingredient, id, objectPosition}) => {

    
    const { bag, setBag } = React.useContext(GlobalContext);


    const [animation, setAnimation] = React.useState(false);
    const timeAnimation = React.useRef(null);

    function addToCar(){

        if(timeAnimation.current){
            clearTimeout(timeAnimation.current)

        }
        setAnimation(true);

        timeAnimation.current = setTimeout(()=>{
            setAnimation(false);
        }, 1000);


        const burger = {
            img,
            title,
            ingredient,
            quantidade: 1,
            value,
            id,
            objectPosition
        }

        if(bag.length === 0){

            setBag(bag => [...bag, burger]);

        }
        else{
            
            const produto = bag.find(produto => produto.title === burger.title);
            const position = bag.indexOf(produto);
            console.log(position)
            
            
            if(position !== -1){
                bag[position].quantidade++
                setBag([...bag]);
            }

            else{
                setBag(bag => [...bag, burger]);
            }

        }
    }


    return (
        <CadaQueridinho animation={animation}>

            <div className="image-Container-Hamburger">

                <img 
                    src={img} 
                    alt="Double_Beef_Catupiry" 
                />

                </div>

            <div className="textAndValues">

                <h4>{title}</h4>

                <div className="containerHeart">

                    <img 
                        src={Heart} 
                        alt="Heart_Image" 
                    />


                    <img 
                        src={Heart} 
                        alt="Heart_Image" 
                    />


                    <img 
                        src={Heart} 
                        alt="Heart_Image" 
                    />


                    <img 
                        src={Heart} 
                        alt="Heart_Image" 
                    />


                    <img 
                        src={Heart} 
                        alt="Heart_Image" 
                    />


                </div>

                <p>R$ {value}</p>

            </div>

            <div className="ContainerCar" >

                <div 
                    className="CarButton"
                    onClick={addToCar}
                >

                    <p>Add To</p>

                    <img 
                        src={Car} 
                        alt="Car_Image" 
                    />

                </div>

            </div>

        </CadaQueridinho>
    )
}

export default Queridinho;