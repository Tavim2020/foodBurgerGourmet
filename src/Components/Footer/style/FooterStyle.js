import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 44vw;
    background-color: var(--darkBlue);

    .centralizedContainer{
        margin: 0 auto;
        width: 92%;
        height: max-content;
        display: flex;
        align-items: center;

        .logo{
            margin-right: 10vw;
            img{
                width: 20vw;
                margin-top: 2.5vw;
            }
        }

        .textAndMenuExpostoFooter{
            width: max-content;

            h3{
                font-size: 1.8vw;
                color: var(--white);
                font-weight: 700;
                font-family: var(--oswald);
                margin-bottom: 4vw;
                margin-top: 5vw;
            }

            .menuFooter{
                width: 67vw;
                display: flex;

                .column{
                    div{
                        display: block;

                        h4{
                            font-size: 1.25vw;
                            font-family: var(--oswald);
                            font-weight: 500;
                            color: var(--white);
                            margin-bottom: 2vw;
                            cursor: pointer
                        }
                    }
                }

                .column:nth-child(1){
                    width: 14.8vw;
                    display: flex;
                    justify-content: space-between;

                    .ListCardapio{
                        nav{
                            ul{
                                li{
                                    color: var(--white);
                                    font-weight: 400;
                                    font-size: 1.1vw;
                                    list-style: disc;
                                    font-family: var(--oswald);
                                    margin-bottom: 1.4vw;
                                    margin-left: 1.5vw;
                                    cursor: pointer;

                                }
                                
                                .red{
                                    color: var(--red);
                                }

                                li:hover{
                                    text-decoration: underline;
                                }
                            }
                        }
 
                    }

                    .bar{
                        width: 0.08vw;
                        height: 28.5vw;
                        background-color: var(--white);
                        margin-top: -1vw;
                    }
  
                }

                .column:nth-child(2){
                    width: 28vw;
                    display: flex;
                    justify-content: space-between;

                    .localization{
                        margin-left: 5vw;

                        div{

                            h5{
                                color: var(--white);
                                font-weight: 400;
                                font-size: 1.1vw;
                                font-family: var(--oswald);
                                margin-bottom: 3vw;
                                margin-left: 0.1vw;
                                cursor: pointer;
                            }

                            h5:hover{
                                text-decoration: underline;
                            }
                            
                            h5:nth-child(1){
                                width: 18vw;
                            }

                            h5:nth-child(2){
                                width: 20vw;
                            }

                            h5:nth-child(3){
                                width: 20vw;
                            }

                        }
                    }

                    .bar{
                        width: 0.08vw;
                        height: 28.5vw;
                        background-color: var(--white);
                        margin-top: -1vw;

                    }
                }

                .column:nth-child(3){
                    width: 20vw;
                    display: flex;
                    justify-content: space-between;

                    .contato{
                        margin-left: 5vw;

                        div{
                            margin-top: -0.1vw;

                            .telAndDelivery{
                                margin-bottom: 3vw;
                                
                                h5{
                                    color: var(--white);
                                    font-weight: 400;
                                    font-size: 1.1vw;
                                    font-family: var(--oswald);
                                    margin-left: 0.1vw;
                                    cursor: pointer;
                                }

                                h5:hover{
                                    text-decoration: underline;
                                }

                                .delivery{
                                    display: flex;
                                    align-items: center;
                                    margin-top: -0.1vw;                               
                                
                                    img{
                                        width: 2vw;
                                        margin-left: 1.7vw;
                                        cursor: pointer;
                                        transition: transform 0.5s;
                                    }

                                    img:hover{
                                        transform: scale3d(1.05, 1.05, 1);
                                    }
                                }
                            }
                            

                        }
                    }

                }
            }
        }
    }
`;