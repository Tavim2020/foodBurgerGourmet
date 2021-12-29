import React from 'react';
import { LocalizacaoContainer } from './style/LocalizacaoStyle';
import LocalizacaoIcon from '../../../assets/localizacao/localizationIcon.svg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconMap from '../../../assets/localizacao/burgerMarkerBlueColor.webp';
import { GlobalContext } from '../../../Context/GlobalContext';

const Localizacao = () => {

    const { 
        localizationContainer,
        stateOne, setStateOne,
        stateTwo, setStateTwo,
        stateThree, setStateThree
    } = React.useContext(GlobalContext);


    const mapIdentification = React.useRef();
    const mapIdentification2 = React.useRef();
    const mapIdentification3 = React.useRef();

    const token = process.env.REACT_APP_ACCESS_TOKEN;


    
    React.useEffect(()=>{
        
        if(mapIdentification.current && stateOne){
            
            const mapLeaflet = L.map(mapIdentification.current)
                .setView([-23.5648025, -46.6536583,17], 13);
   
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/navigation-day-v1',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: `${token}`
            }).addTo(mapLeaflet);

            const markerIcon = L.icon({
                iconUrl: iconMap,

                iconSize: [54, 72]
            })
            
            L.marker([-23.5648025, -46.6536583,17],  {icon: markerIcon}).addTo(mapLeaflet);
        }

        if(mapIdentification2.current && stateTwo){
            
            const mapLeaflet = L.map(mapIdentification2.current)
                .setView([-19.955609, -43.944058], 13);
   
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/navigation-day-v1',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: `${token}`
            }).addTo(mapLeaflet);

            const markerIcon = L.icon({
                iconUrl: iconMap,

                iconSize: [54, 72]
            })
            
            L.marker([-19.955609, -43.944058],  {icon: markerIcon}).addTo(mapLeaflet);
        }

        if(mapIdentification3.current && stateThree){
            
            const mapLeaflet = L.map(mapIdentification3.current)
                .setView([-27.5932972, -48.5158339], 13);
   
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/navigation-day-v1',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: `${token}`
            }).addTo(mapLeaflet);

            const markerIcon = L.icon({
                iconUrl: iconMap,

                iconSize: [54, 72]
            })
            
            L.marker([-27.5932972, -48.5158339],  {icon: markerIcon}).addTo(mapLeaflet);
        }
        
    }, [mapIdentification, mapIdentification2, mapIdentification3 , token, stateOne,
        stateTwo, stateThree]);

  

    function moveToLocal(event){

       if(Number(event.target.id) === 0){
           setStateOne(true);
           setStateTwo(false);
           setStateThree(false);
       }
       else if(Number(event.target.id) === 1){
        setStateOne(false);
        setStateTwo(true);
        setStateThree(false);
       }
       else if(Number(event.target.id) === 2){
        setStateOne(false);
        setStateTwo(false);
        setStateThree(true);
       }

    }


    return (
        <LocalizacaoContainer ref={localizationContainer} id="localizacao">

            <div className="CentralizedContainer">

                <h1>Nossa Localização</h1>

                <div className="mapAndLocalization">

                    <div className="localization">

                        <h3>Saiba Aonde nos Encontrar!</h3>

                        <div className="WrapperLocalization">

                            <div className="sp">

                                <h4 
                                    id="0" 
                                    onClick={moveToLocal}
                                >
                                    Em São Paulo
                                </h4>


                                <div>

                                    <p 
                                        id="0"
                                        onClick={moveToLocal}>
                                        Restaurante Food Burger 1100, 
                                        Av. Paulista, 
                                        <br></br>Brasil
                                    </p>

                                    <img  
                                        id="0"
                                        onClick={moveToLocal}
                                        src={LocalizacaoIcon} 
                                        alt="Localização_Icon" 
                                    />

                                </div>

                            </div>



                            <div className="bh">

                                <h4
                                    id="1"
                                    onClick={moveToLocal}
                                >
                                    Em Belo Horizonte
                                </h4>

                                <div>

                                    <p
                                        id="1"
                                        onClick={moveToLocal}
                                    >
                                        Restaurante Food Burger 1350,
                                        Rua Engenheiro Bernardo Sayão, 
                                        <br></br>Brasil
                                    </p>

                                    <img 
                                        id="1"
                                        onClick={moveToLocal}
                                        src={LocalizacaoIcon} 
                                        alt="Localização_Icon" 
                                    />

                                </div>

                            </div>



                            <div className="sc">

                                
                                <h4
                                    id="2"
                                    onClick={moveToLocal}
                                >
                                    Em Florianópolis
                                </h4>

                                <div>

                                    <p
                                        id="2"
                                        onClick={moveToLocal}
                                    >
                                        Restaurante Food Burger 1432,
                                        Rua Marco Alberto Galvão, 
                                        <br></br>Brasil
                                    </p>

                                    <img 
                                        id="2"
                                        onClick={moveToLocal}
                                        src={LocalizacaoIcon} 
                                        alt="Localização_Icon" 
                                    />

                                </div>

                            </div>


                        </div>

                    </div>


                    <div className="WrapperMap">

                        {
                            stateOne && (

                                <div 
                                    id="map"
                                    style={{ width: '25vw', height: '35vw' }}
                                    ref={mapIdentification}
                                >

                                </div>
                            )
                        }


                        {
                            stateTwo && (

                                <div 
                                    id="map"
                                    style={{ width: '25vw', height: '35vw' }}
                                    ref={mapIdentification2}
                                >

                                </div>
                            )
                        }


                        {
                            stateThree && (

                                <div 
                                    id="map"
                                    style={{ width: '25vw', height: '35vw' }}
                                    ref={mapIdentification3}
                                >

                                </div>
                            )
                        }

                    </div>
                  

                </div>

            </div>
            
        </LocalizacaoContainer>
    )
}

export default Localizacao;
