import React from 'react';
import { OsMaisQueridinhosDaSemanaContainer } from './style/OsQueridinhosDaSemanaStyle';
import Queridinho from '../Queridinho/Queridinho';
import DoubleBeefCatupiry from '../../../assets/hamburgers/doubleBeef.webp';

const OsQueridinhosDaSemana = () => {
    return (
        <OsMaisQueridinhosDaSemanaContainer>

            <div className="Container">

                <div className="TitleQueridinhos">
                    <h1>Os Queridinhos Da Semana</h1>
                </div>

                <div className="Queridinhos">

                    <Queridinho 
                        img={DoubleBeefCatupiry} 
                        title="Double Beef Catupiry"
                        value="47,00"
                        id="10"
                        ingredient=
                        {"Pão, Queijo, Hamburger de Picanha de 150g, Fatias de Salame, Cebola, O Dobro de Catupiry Cremoso, Tomate e Alface."}
                        objectPosition="0 -20vw"
                    />

                    <Queridinho 
                        img={DoubleBeefCatupiry} 
                        title="Double Beef Catupiry"
                        ingredient=
                        {"Pão, Queijo, Hamburger de Picanha de 150g, Fatias de Salame, Cebola, O Dobro de Catupiry Cremoso, Tomate e Alface."}
                        value="47,00"
                        id="11"
                        objectPosition="0 -20vw"
                    />


                    <Queridinho 
                        img={DoubleBeefCatupiry} 
                        title="Double Beef Catupiry"
                        value="47,00"
                        ingredient=
                        {"Pão, Queijo, Hamburger de Picanha de 150g, Fatias de Salame, Cebola, O Dobro de Catupiry Cremoso, Tomate e Alface."}
                        id="12"
                        objectPosition="0 -20vw"
                    />

                    <Queridinho 
                        img={DoubleBeefCatupiry} 
                        title="Double Beef Catupiry"
                        value="47,00"
                        id="13"
                        ingredient=
                        {"Pão, Queijo, Hamburger de Picanha de 150g, Fatias de Salame, Cebola, O Dobro de Catupiry Cremoso, Tomate e Alface."}
                        objectPosition="0 -20vw"
                    />

                    <Queridinho 
                        img={DoubleBeefCatupiry} 
                        title="Double Beef Catupiry"
                        value="47,00"
                        id="14"
                        ingredient=
                        {"Pão, Queijo, Hamburger de Picanha de 150g, Fatias de Salame, Cebola, O Dobro de Catupiry Cremoso, Tomate e Alface."}
                        objectPosition="0 -20vw"
                    />

                </div>

            </div>


        </OsMaisQueridinhosDaSemanaContainer>
    )
}

export default OsQueridinhosDaSemana;
