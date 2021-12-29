import React from 'react';
import { FooterContainer } from './style/FooterStyle';
import logo from '../../assets/logo/logo.svg';
import whatsapp from '../../assets/pageInitial/whatsapp.svg';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';



const Footer = () => {

    const { 
        localizationContainer,
        setStateOne,
        setStateTwo,
        setStateThree
    } = React.useContext(GlobalContext);


    function moveToLocalization(){

        if(localizationContainer.current){
            window.scroll({
                top: localizationContainer.current.offsetTop,
                behavior: "smooth"
            })
        }
    }

    function move(event){

        const id = event.target.id;

        if(localizationContainer.current){

            window.scroll({
                top: localizationContainer.current.offsetTop,
                behavior: "smooth"
            });


            if(Number(id) === 0){
                setStateOne(true);
                setStateTwo(false);
                setStateThree(false);
            }
    
            if(Number(id) === 1){
                setStateOne(false);
                setStateTwo(true);
                setStateThree(false);
            }
    
            if(Number(id) === 2){
                setStateOne(false);
                setStateTwo(false);
                setStateThree(true);
            }

        }

    }


    function moveTel(event) {
        const tel = event.target.id;

        window.location.href = `tel:${tel}`;
    };

    return (
        <FooterContainer>

            <div className="centralizedContainer">

                <div className="logo">

                    <img 
                        src={logo} 
                        alt="Logo_Icon" 
                        title="Food Burger Gourmet"
                    />

                </div>

                <div className="textAndMenuExpostoFooter">

                    <h3>Restaurante Especializado em Lanches Gourmet Dos Mais Variados Tipos</h3>


                    <div className="menuFooter">

                        <div className="column">

                            <div className="ListCardapio">

                                <h4>Cardápio</h4>

                                <nav>

                                    <ul>
                                        <Link to="/cardapio#vegan">

                                            <li>Vegan</li>

                                        </Link>



                                        <Link to="/cardapio#steak">

                                            <li>Steak(Picanha)</li>

                                        </Link>


                                        <Link to="/cardapio#chicken">

                                            <li>Chicken</li>

                                        </Link>


                                        <Link to="/cardapio#onionRings">

                                            <li>Onion Rings</li>

                                        </Link>



                                        <Link to="/cardapio#filetMignon">

                                            <li>Filet Mignon</li>

                                        </Link>



                                        <Link to="/cardapio#cheese">

                                            <li>Cheese</li>

                                        </Link>


                                        <Link to="/cardapio#custonBurger">

                                            <li className="red">Custon Burger</li>

                                        </Link>


                                    </ul>

                                </nav>

                            </div>

                            <span className="bar"></span>

                        </div>


                        <div className="column">

                            <div className="localization">

                                <h4 onClick={moveToLocalization}>
                                    Localização
                                </h4>

                                <div>

                                        <h5 
                                            onClick={move}
                                            id="0"
                                        >
                                            São Paulo - Restaurante Food Burger 1100, 
                                            Av. Paulista, Brasil
                                        </h5>


                                        <h5 
                                            onClick={move}
                                            id="1"
                                        >
                                            Belo Horizonte - Restaurante Food Burger 1350,
                                            Rua Engenheiro Bernardo Sayão, Brasil
                                        </h5>


                                        <h5 
                                            onClick={move}
                                            id="2"
                                        >
                                            Florianópolis - Restaurante Food Burger 1432,
                                            Rua Marco Alberto Galvão, Brasil
                                        </h5>
                                    
                                </div>

                            </div>

                            <span className="bar"></span>

                        </div>


                        <div className="column">

                            <div className="contato">

                                <h4>Contato</h4>

                                <div>

                                    <div className="telAndDelivery">

                                        <h5 
                                            onClick={moveTel}
                                            id="1134224400"
                                        >
                                            Tel: SP(11)3422-4400
                                        </h5>

                                        <div className="delivery">

                                            <h5 
                                                onClick={moveTel}
                                                id="1134224400"
                                            >
                                                Disk Delivery
                                            </h5>

                                            <img 
                                                src={whatsapp} 
                                                alt="Whatsapp_Icon" 
                                                onClick={moveTel} 
                                                id="1134224400"
                                            />

                                        </div>

                                    </div>


                                    <div className="telAndDelivery">

                                        <h5 
                                            onClick={moveTel}
                                            id="13139415000"
                                        >
                                            Tel: BH(31)3941-5000
                                        </h5>

                                        <div className="delivery">

                                            <h5 
                                                onClick={moveTel}
                                                id="13139415000"
                                            >
                                                Disk Delivery
                                            </h5>

                                            <img  
                                                onClick={moveTel}
                                                id="13139415000"
                                                src={whatsapp} 
                                                alt="Whatsapp_Icon" 
                                            />

                                        </div>

                                    </div>

                                    

                                    <div className="telAndDelivery">

                                        <h5 
                                            onClick={moveTel}
                                            id="4931462266"
                                        >
                                            Tel: FL(49)3146-2266
                                        </h5>

                                        <div className="delivery">

                                            <h5 
                                                onClick={moveTel}
                                                id="4931462266"
                                            >
                                                Disk Delivery
                                            </h5>

                                            <img  
                                                onClick={moveTel}
                                                id="4931462266"
                                                src={whatsapp} 
                                                alt="Whatsapp_Icon" 
                                            />

                                        </div>

                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
            
        </FooterContainer>
    )
}

export default Footer;
