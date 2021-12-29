import styled from 'styled-components';

export const CarContainerUser = styled.section`
        width: 55vw;
        height: max-content;
        background-color: var(--white);
        position: absolute;
        top: 170%;
        z-index: 2;

        .meusPedidos{
            width: 100%;
            background-color: var(--darkBlue);
            height: 4vw;


            .centralizedContainerForCar{
                margin: 0 auto;
                width: 90%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                h5{
                    color: var(--white);
                    font-size: 1.1vw;
                    font-family: var(--oswald);

                }

                img{
                    width: 7vw;
                    cursor: default;
                }
            }
        }

        .showBurger{
            width: 100%;
            height: 26vw;
            display: flex;
            align-items: center;
            background-size: cover;

            .informationMyBurger{
                margin-left: 5%;
                width: 40%;
                height: 80%;
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 1vw;

                h6{
                    font-size: 1vw;
                    font-family: var(--oswald);
                    text-align: center;
                    margin-top: 1vw;
                    margin-bottom: 1vw;
                    color: var(--white);
                }

                .ContainerIngredientes{
                    margin: 0 auto;
                    width: 90%;

                    .subTitle{
                        font-size: 0.93vw;
                        color: var(--white);
                        font-family: var(--oswald);
                        margin-bottom: 0.5vw;
                        font-weight: 500;
                    }

                    .ingredientes{
                        margin-left: 0.5vw;
                        font-size: 0.83vw;
                        font-family: var(--oswald);
                        color: var(--white);
                    }
                }

                .ContainerQuantidade{
                    margin: 0 auto;
                    width: 90%;
                    margin-top: 1.5vw;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .subTitle{
                        font-size: 0.93vw;
                        color: var(--white);
                        font-family: var(--oswald);
                        margin-bottom: 0.5vw;
                        font-weight: 500;
                    }

                    .quantidade{
                        display: flex;
                        align-items: center;
                        width: max-content;

                        img{
                            width: 1.5vw;
                            cursor: pointer;
                        }

                        p{
                            font-size: 1.5vw;
                            color: var(--white);
                            margin-left: 0.3vw;
                            margin-right: 0.3vw;
                            font-family: var(--oswald);
                        }
                    }

                }

                .ContainerValue{
                    margin: 0 auto;
                    width: 90%;
                    margin-top: 1.5vw;

                    .subTitle{
                        font-size: 0.93vw;
                        color: var(--white);
                        font-family: var(--oswald);
                        margin-bottom: 0.5vw;
                        font-weight: 500;
                        text-align: center;
                    }

                    .value{
                        font-size: 1.85vw;
                        color: var(--white);
                        font-family: var(--oswald);
                        margin-top: 0.5vw;
                        font-weight: 400;
                        text-align: center;
                    }
                }
            }
        }

        

        .ContainerForBurgerSelected{
            width: 100%;
            height: max-content;

            

            .MyFoodBurgerGourmet{
                margin: 0 auto;
                width: 90%;
                height: max-content;
                display: flex;
                align-items: center;
                justify-content: center;

                h2{
                    margin-top: 0.5vw;
                    font-size: 2vw;
                    font-family: var(--oswald);
                    color: var(--darkBlue);
                }

                h2:nth-child(1),
                h2:nth-child(2),
                h2:nth-child(3){
                    margin-right: 0.6vw;
                }

                h2:nth-child(2){
                    color: var(--red);
                }

                h2:nth-child(3){
                    color: var(--yellow);
                }

                h2:nth-child(4){
                    color: var(--purple);
                }
            }

            .WrapperBurger{
                width: 100%;
                height: 15vw;
                overflow-y: auto;
            }


            .ContainerBurger{
                margin: 0 auto;
                width: 90%;
                height: 5vw;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 1vw;
                margin-bottom:2vw;
                border-radius: 1.2vw;
                background-color: var(--darkBlue);
                transition: transform 0.5s;
                cursor: pointer;


                h3{
                    font-size: 1.8vw;
                    color: var(--white);
                    font-family: var(--oswald);
                    margin-left: 5%;
                }

                p{
                    font-size: 1.25vw;
                    color: var(--white);
                    font-family: var(--oswald);
                    font-weight: 400;
                    margin-right: 5%;
                }
            }

            .ContainerBurger:hover{
                transform: scale3d(1.08, 1.08, 1);
            }

            .ContainerFooterCar{
                width: 100%;
                height: max-content;
                background-color: var(--darkBlue);
                display: flex;
                

                .detalhes{
                    width: 49%;
                    height: 23vw;
                    margin-top: 2vw;

                    h2{
                        text-align: center;
                        font-size: 1.8vw;
                        color: var(--white);
                        font-family: var(--oswald);
                    }

                    .allDetalhes{
                        margin: 0 auto;
                        margin-top: 1.1vw;
                        width: 70%;
                        height: 76%;
                        background-color: rgba(255, 255, 255, 0.7);
                        border-radius: 0.8vw;
                        padding: 0.7vw;
                        overflow-y: auto;


                        h4{
                            font-size: 1.2vw;
                            font-family: var(--oswald);
                            color: var(--darkBlue);  
                        }

                        .showBurgerTotal{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin-top: 1vw;

                            p{
                                font-size: 1vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                                margin-bottom: 1.5vw;
                            }

                        }

                    }
                }

                .bar{
                    width: 1%;
                    margin-left: 0.5%;
                    height: 19vw;
                    margin-top: 4.9vw;
                    background-color: var(--white);
                }


                .total{
                    width: 49%;
                    height: 23vw;
                    margin-top: 2vw;

                    h2{
                        text-align: center;
                        font-size: 1.8vw;
                        color: var(--white);
                        font-family: var(--oswald);
                    }


                    .showTotalPrice{
                        margin: 0 auto;
                        width: 70%;
                        height: 60%;
                        background-color: rgba(255, 255, 255, 0.7);
                        margin-top: 1.1vw;
                        border-radius: 0.8vw;
                        padding: 0.7vw;

                        .PriceTotalItems,
                        .PriceFrete,
                        .retirarLocal{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            h4{
                                font-size: 1.25vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                            }

                            p{
                                font-size: 1vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                            }
                        }

                        .retirarLocal{
                            input{
                                cursor: pointer;
                            }
                        }

                        .barHorizontal{
                            margin: 0 auto;
                            width: 100%;
                            height: 0.08vw;
                            background-color: var(--darkBlue);
                            margin-top: 1vw;
                            display: flex;
                        }

                        .totalPrice{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            h4{
                                font-size: 1.25vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                            }

                            p{
                                font-size: 1.8vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                                font-weight: 500;
                            }
                        }

                        .ContainerConfirm{
                            width: 100%;
                            height: 3vw;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            button{
                                margin-top: 0.5vw;
                                width: 10vw;
                                height: 3vw;
                                background-color: var(--darkBlue);
                                color: var(--white);
                                border: none;
                                font-family: var(--oswald);
                                font-size: 1.1vw;
                                cursor: pointer;
                                transition: transform 0.5s;
                            }

                            button:hover{
                                transform: scaleX(1.05);
                            }

                        }
                    }

                    h5{
                        margin: 0 auto;
                        width: 75%;
                        font-size: 1.1vw;
                        color: var(--yellow);
                        font-family: var(--oswald);
                        text-align: center;
                        margin-top: 0.5vw;
                    }
                }
            }
        }

        /* .ContainerForBurgerSelected::-webkit-scrollbar{
            display: none;
        } */

`;