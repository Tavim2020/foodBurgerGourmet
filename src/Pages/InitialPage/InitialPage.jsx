import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { PageInitial, Content, DoChefText, ButtonEntrar, Delivery } from './style/InitialPageStyle';

import BackgroundImage from '../../assets/pageInitial/background.webp';
import Logo from '../../assets/logo/logo.svg';
import GorroMasterChefe from '../../assets/pageInitial/gorroDoChef.svg';
import WhatsAppImg from '../../assets/pageInitial/whatsapp.svg';

import { Link } from 'react-router-dom';

const InitialPage = () => {

    const { setHeader, setFooter } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        setHeader(false);
        setFooter(false);
    });



    function DiskDelivery(){
        window.location.href = 'tel:+55169939367840';
    }

    return (
        <PageInitial>

            <img className="background" src={BackgroundImage} alt="BackgroundImage" />

            <Content>

                <img  className="Logo" src={Logo} alt="Logo-Imagem" />

                <DoChefText>

                    <h2>Do Chefe Para Você!</h2>

                    <img className="Gorro" src={GorroMasterChefe} alt="Gorro-Master-Chefe" />

                </DoChefText>

                <Link to="/home">
                
                    <ButtonEntrar>

                        Entrar

                    </ButtonEntrar>
                
                </Link>

                <Delivery>

                    <p onClick={DiskDelivery}>
                            Disk Delivery
                    </p>

                    <img 
                        onClick={DiskDelivery} 
                        className="WhatsApp" 
                        src={WhatsAppImg} 
                        alt="WhatsApp-Icon" 
                    />

                </Delivery>

            </Content>

        </PageInitial>
    )
}

export default InitialPage;
