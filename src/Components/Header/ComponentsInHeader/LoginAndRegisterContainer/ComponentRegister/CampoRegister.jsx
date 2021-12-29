import React from 'react';
import { Campo } from './style/CampoRegisterStyle';
import hamburgerIcon from '../../../../../assets/register/hamburgerIcon.png';

const CampoRegister = ({
        label, variable, setVariable, 
        minimolength, maximoLength, typeInput
    }) => {

    const [showIcon,setShowIcon] = React.useState(false);

    function showBurger(event){
        setShowIcon(true);

        if(event.type === "click" && event.target.textContent === variable){
            moveSeletor(event.target);
        }
        else if(event.type === "mouseover" && event.target.textContent === variable){
            return
        }
        else if(event.type === "mouseover" && event.target === event.target.parentNode.children[0]){
            return
        }
        else{
            moveSeletor(event.target);
        }
    }

    
    function moveSeletor(target){
        const fatherElement = target;
        console.log(fatherElement.parentNode)


        if(fatherElement.classList === "father"){
            fatherElement.children[0].style.transition = '0.5s';
            fatherElement.children[0].style.transform = 'initial';
        }
        else{
            target.parentNode.parentNode.children[0].style.transition = '0.5s';
            target.parentNode.parentNode.children[0].style.transform = 'initial';
        }
            
    }

    function resetSeletor(event){
        const fatherElement = event.target.parentNode.parentNode;

        if(event.target.value.length === 0){
           fatherElement.children[0]
           .style.transform = 'translateY(2.4vw) translateX(0.9vw) scale3d(1.1, 1.1, 1)';
        }
    }
    
    function removeBurger(){
        setShowIcon(false);
    }

    return (
        <Campo 
            onMouseOut={removeBurger}
            className="father"
        >

            <label 
                htmlFor="name"
                onClick={showBurger}
                onMouseOver={showBurger}
            >
                {label}
            </label>

            <div className="flex">

                <input 
                    type={typeInput} 
                    id="name"
                    name="name"
                    maxLength={maximoLength}
                    minLength={minimolength}
                    value={variable}
                    onChange={({target}) => setVariable(target.value)}
                    onClick={showBurger}
                    onMouseOver={showBurger}
                    onFocus={showBurger}
                    onBlur={resetSeletor}
                />

                {
                    showIcon && (

                        <img 
                            src={hamburgerIcon} 
                            alt="Icone_Burger" 
                        />

                    )
                }



            </div>
            
        </Campo>
    )
}

export default CampoRegister;
