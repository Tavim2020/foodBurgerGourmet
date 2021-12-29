import styled from 'styled-components';

export const LocalizacaoContainer = styled.section`
    width: 100vw;
    height: max-content;
    margin-bottom: 4vw;

    .CentralizedContainer{
        margin: 0 auto;
        width: 92%;

        h1{
            font-size: 3.35vw;
            font-family: var(--oswald);
            color: var(--darkBlue);
            text-align: center;
            margin-top: 4vw;
            margin-bottom: 4vw;

        }

        .mapAndLocalization{
            margin: 0 auto;
            width: 82vw;
            height: max-content;
            display: flex;
            align-items: center;

            .localization{
                width: 50%;
                height: max-content;
                
                h3{
                    font-size: 1.8vw;
                    font-family: var(--oswald);
                    color: var(--darkBlue);
                    margin-bottom: 2vw;
                }

                .WrapperLocalization{
                    width: 100%;

                    div{
                        width: max-content;
                        margin-bottom: 1vw;

                        h4{
                            margin: 0 auto;
                            width: max-content;
                            font-size: 1.4vw;
                            font-family: var(--oswald);
                            color: var(--darkBlue);
                            font-weight: 500;
                            margin-bottom: 0.5vw;
                            cursor: pointer;
                        }

                        h4:hover{
                                text-decoration: underline;
                            }

                        div{
                            display: flex;
                            align-items: center;

                            p{
                                font-size: 1.1vw;
                                font-family: var(--oswald);
                                color: var(--darkBlue);
                                margin-right: 2.5vw;
                                cursor: pointer;
                            }

                            p:hover{
                                text-decoration: underline;
                            }

                            img{
                                width: 1.8vw;
                                cursor: pointer;
                            }

                            img:hover{
                                transform: scale3d(1.05, 1.05, 1);
                            }

                        }
                    }


                    .sp{
                        margin-left: 20vw;
                        p{
                            width: 12.5vw;
                        }

                    }

                    .bh{
                        margin-left: 10vw;
                        p{
                            width: 14vw;
                        }

                    }

                    .sc{
                        p{
                            width: 14vw;
                        }

                    }

                }   
            }

            .WrapperMap{
                width: 50%;
                display: flex;
                justify-content: flex-end;

            }

        }
    }
`;