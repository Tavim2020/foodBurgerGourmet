import React from 'react';

import { HomeContainer } from './style/HomeStyle';

import CarroChefe from '../../Components/PageHome/CarroChefe/CarroChefe';
import MaisFoodBurger from '../../Components/PageHome/MaisFoodBurger/MaisFoodBurger';
import ButtonToTop from '../../Components/PageHome/ButtonToTop/ButtonToTop';
import Localizacao from '../../Components/PageHome/Localizacao/Localizacao';
import BackgroundHome from '../../Components/PageHome/BackgroundHome/BackgroundHome';
import OsQueridinhosDaSemana from '../../Components/PageHome/OsQueridinhosDaSemana/OsQueridinhosDaSemana';
import PageLoading from '../../Components/PageHome/PageLoading/PageLoading';

import { GlobalContext } from '../../Context/GlobalContext';



const Home = () => {

    const { 
        setHeader, 
        textPagePrincipalChange,
        setHome,
        setFooter
    } = React.useContext(GlobalContext);

    
    
    const [changeHome, setChangeHome] = React.useState(false);

    React.useEffect(()=>{
        if(textPagePrincipalChange.current){
            setTimeout(function change(){
                textPagePrincipalChange.current.style.transition = 'opacity 1s';
                textPagePrincipalChange.current.style.opacity = '0';

                setTimeout(()=>{
                    textPagePrincipalChange.current.textContent = 'Ingredientes selecionados e tudo feito com muito amor.';
                    textPagePrincipalChange.current.style.opacity = '1';

                    setTimeout(()=>{
                        textPagePrincipalChange.current.style.transition = 'opacity 1s';
                        textPagePrincipalChange.current.style.opacity = '0';
    
                        setTimeout(()=>{
                            textPagePrincipalChange.current.textContent = 'A delicia do gourmet você é quem faz.';
                            textPagePrincipalChange.current.style.opacity = '1';

                            setTimeout(change, 5000);

                        }, 1000)
                        
    
                    }, 5000);

                }, 1000)


            }, 5000)
        }
    });


    React.useEffect(()=>{
        setTimeout(()=>{

            setHome(true);

            setTimeout(()=>{
                setHeader(true);
                setChangeHome(true);
                setFooter(true);
            }, 40);

        }, 7000) 
    })

    return (
        <>
            
            <PageLoading />

            {
                changeHome && (

                    <HomeContainer>

                        <BackgroundHome />

                        <OsQueridinhosDaSemana />

                        <ButtonToTop />

                        <CarroChefe />

                        <MaisFoodBurger />

                        <Localizacao />

                    </HomeContainer>
                )
            }
   
        </>
    )
}

export default Home;
