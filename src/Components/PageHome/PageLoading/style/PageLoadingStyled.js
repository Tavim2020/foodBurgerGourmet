import styled from 'styled-components';

export const PageLoadingContainer = styled.section`
      width: 100vw;
    height: 100vh;
    background-color: var(--darkBlue);
    display: flex;
    flex-direction: column;
    animation-name: ${({hometrue}) => hometrue && 'translateYMove' };
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    animation-delay: 0ms;
    animation-direction: normal;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 10;

    @keyframes translateYMove{
        to{
            transform: translateY(-130%);
        }
    }


    .Imagens{
        margin-top: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img:nth-child(1){
            width: 6vw;
            animation-name: opacity1;
            animation-duration: 6s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-delay: 0ms;
            animation-direction: normal;
            z-index: 1;
        }

        img:nth-child(2){
            width: 10vw;
            margin-top: -1.8vh;
            margin-left: -0.9vw;
            animation-name: opacity2;
            animation-duration: 6s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-delay: 0ms;
            animation-direction: normal;
            z-index: 2;
        }

        .gourmet{
            width: 35vw;
            margin-top: -2.3vh;
            animation-name: opacity3;
            animation-duration: 6s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-delay: 0s;
            animation-direction: normal;
        }

        @keyframes opacity1{
            0%{
                opacity: 1;
            }

            10%{
                opacity: 0;
            }

            15%{
                opacity: 1;
            }

            25%{
                opacity: 1;
            }

            28%{
                opacity: 0;
            }

            31%{
                opacity: 1;
            }

            34%{
                opacity: 0;
            }

            37%{
                opacity: 1;
            }

            37%{
                opacity: 1;
            }

            100%{
                opacity: 1;
            }
        }


        @keyframes opacity2{
            10%{
                opacity: 1;
            }

            20%{
                opacity: 0;
            }

            25%{
                opacity: 1;
            }

            28%{
                opacity: 0;
            }

            31%{
                opacity: 1;
            }

            34%{
                opacity: 0;
            }

            37%{
                opacity: 1;
            }

            100%{
                opacity: 1;
            }
        }

        @keyframes opacity3{
            25%{
                opacity: 1;
            }

            28%{
                opacity: 0;
            }

            31%{
                opacity: 1;
            }

            34%{
                opacity: 0;
            }

            37%{
                opacity: 1;
            }

            37%{
                opacity: 1;
            }

            100%{
                opacity: 1;
            }
        }

        .textForImage{
            color: var(--white);
            font-family: var(--oswald);
            font-size: 2.2vw;
            font-weight: 500;
            margin-top: 3vh;
        }

    }

    .textLoading{
        margin-top: 25vh;
        display: flex;
        align-items: center;
        justify-content: center;
        

        p{
            font-size: 2.2vw;
            color: var(--white);
            font-family: var(--oswald);
            
        }

        p::after{
            content: '';
            color: var(--white);
            animation-name: addReticencias;
            animation-duration: 3s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-delay: 0ms;
            animation-direction: normal;
        }

        @keyframes addReticencias{
            33%{
                content: '.';
                color: var(--white);
            }

            66%{
                content: '..';
                color: var(--white);
            }

            100%{
                content: '...';
                color: var(--white);
            }
        }
    }
`;