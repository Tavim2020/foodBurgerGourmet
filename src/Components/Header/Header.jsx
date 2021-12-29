import React from 'react';

import { 
    CarContainer, 
    HeaderContainer, 
    LogoContainer, 
    Menu, 
    MenuOpenUser 
} from './style/HeaderStyle';

import Logo from '../../assets/logo/logo.svg';
import Burger from '../../assets/header/burger.svg';

import { Link } from 'react-router-dom';

import { GlobalContext } from '../../Context/GlobalContext';

import Car from './ComponentsInHeader/Car/Car';
import LoginAndRegisterContainer from './ComponentsInHeader/LoginAndRegisterContainer/LoginAndRegisterContainer';

const Header = () => {

    const { 
        bag, 
        car, setCar,
        carUserOpen, setCarUserOpen,
        localizationContainer,
        openLoginAndRegisterContainer, setOpenLoginAndRegisterContainer,
        setLogin,
        setRegister,
        setNameRegister,
        setEmailRegister,
        setEnderecoRegister,
        setComplementoRegister,
        setBairroRegister,
        setCepRegister,
        setTelefoneRegister,
        setEmail,
        setPassword
    } = React.useContext(GlobalContext);

    
    const [ numberItems, setNumberItems ] = React.useState('');

    

    React.useEffect(()=>{

        if(bag.length >= 1){
            setCar(true);

            const totalValuesInArray = [];

            for(let i = 0; i<bag.length; i++){
                totalValuesInArray.push(bag[i].quantidade);
            }

            const filterTotalValues = totalValuesInArray.filter(position => position !== undefined);

            const total = filterTotalValues.reduce((acc, value) => acc + value, 0);

            setNumberItems(total);

        }

    }, [bag, setCar]);

    const textLoginButton = React.useRef();

    function textChange(){
        if(textLoginButton.current){
            textLoginButton.current.textContent = "Click to enter";
        }
    }

    function openCarUser(){

        setCarUserOpen(!carUserOpen);

    }

    function textChangeReverse(){
        if(textLoginButton.current){
            textLoginButton.current.textContent = "Login";
        }
    }


    function moveToLocalizacao(){
        if(localizationContainer.current){
            window.scroll({
                top: localizationContainer.current.offsetTop,
                behavior: "smooth"
            })
        }
    }


    function openLoginOrRegister(event){
        setCarUserOpen(false);
        setOpenLoginAndRegisterContainer(true);

        const textCliqued = event.target.textContent;

        if(textCliqued === "Cadastre-se Aqui!"){
            setLogin(false);
            setRegister(true);
            setNameRegister("")
            setEmailRegister("")
            setEnderecoRegister("")
            setComplementoRegister("")
            setBairroRegister("")
            setCepRegister("")
            setTelefoneRegister("")
            setEmail("")
            setPassword("")
        }
        else{
            setRegister(false);
            setLogin(true);
            setNameRegister("")
            setEmailRegister("")
            setEnderecoRegister("")
            setComplementoRegister("")
            setBairroRegister("")
            setCepRegister("")
            setTelefoneRegister("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <HeaderContainer>

            <div className="centralizedContainer">

                <LogoContainer>

                    <img 
                        src={Logo} 
                        alt="Logo_Image" 
                        title="Food Burger Gourmet" 
                    />

                </LogoContainer>


                <MenuOpenUser>

                    <div className="LoginAndSingIn">

                        <button 
                            onMouseOver={textChange}
                            onMouseOut={textChangeReverse}
                            ref={textLoginButton}
                            onClick={openLoginOrRegister}
                        >
                            Login

                        </button>

                        <h5 onClick={openLoginOrRegister}>
                            Cadastre-se Aqui!
                        </h5>

                        {
                            openLoginAndRegisterContainer && (

                                <LoginAndRegisterContainer />

                            )
                        }


                    </div>


                    <CarContainer>

                        <img  
                            className="burgerIconCar" 
                            src={Burger} 
                            alt="My_Burger_Icons" 
                            title="My Burger Selected" 
                            onClick={openCarUser}
                        />

                        {
                            car && bag.length >=1 && (

                                <div 
                                    className="numberInCar"
                                    onClick={openCarUser}
                                >

                                    <p>{numberItems}</p>

                                </div>
                            )
                        }

                        {
                            carUserOpen && bag.length >= 1 && (
                                <>

                                    <div className="detalheContainer">

                                    </div>

                                    <Car />

                                </>
                            )
                        }

                    </CarContainer>


                    <Menu>

                        <ul>

                            <Link to='/cardapio'>

                                <li>Cardápio</li>

                            </Link>


                            <Link to='restaurante'>

                                <li>Restaurente de Lanche Gourmet</li>

                            </Link>


                            

                            <li onClick={moveToLocalizacao}>Localização</li>

                           


                            <Link to='/contato'>

                                <li>Contato</li>

                            </Link>

                        </ul>

                    </Menu>


                </MenuOpenUser>

            </div>

        </HeaderContainer>
    )
}

export default Header;
