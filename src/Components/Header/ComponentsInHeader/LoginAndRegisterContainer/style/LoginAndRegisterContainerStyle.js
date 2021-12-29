import styled from 'styled-components';

export const ComponentForLogin = styled.section`
    position: absolute;
    width: 70vw;
    height: 40vw;
    background-color: var(--white);
    z-index: 5;
    top: 106%;
    left: -45%;
    display: flex;

    .backgroundBurger{
        width: 50%;
        height: 100%;
        background-color: var(--darkBlue);
        overflow: hidden;

        img{
            width: 100%;
            object-position: 0 -20.7vw;
            animation-name: moveImg;
            animation-duration: 40s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-delay: 0ms;
        }

        @keyframes moveImg{
            33%{
                object-position: 0 -31.5vw;
            }

            66%{
                object-position: 0 0vw;
            }

            100%{
                object-position: 0 -20.7vw;
            }
        }
    }

    .loginAndRegister{
        width: 50%;
        height: 100%;
        background-color: var(--darkBlue);

        .closeLogin{
            margin: 0 auto;
            width: 90%;
            height: max-content;
            display: flex;
            justify-content: flex-end;

            h4{
                font-size: 1.25vw;
                color: var(--white);
                font-family: var(--oswald);
                cursor: pointer;
            }

            h4:hover{
                text-decoration: underline;
            }

            img{
                width: 3vw;
                margin-top: 1vw;
                margin-bottom: 2vw;
                cursor: pointer;
                border-radius: 50%;
            }

            img:hover{
                transform: scale3d(1.08vw, 1.08vw);
                box-shadow: inset 0 0 0.6vw var(--white), 0 0 0.6vw var(--white);
            }
        }

    }
    
    .logoAndWelcome{
        margin: 0 auto;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .welcome{
            color: var(--white);
            font-size: 1.8vw;
            font-family: var(--oswald);
            margin-bottom: 0.7vw;
        }

        img{
            width: 18vw;
        }

    }

    .formUserLogin{
        margin: 0 auto;
        width: 90%;
        margin-top: 3.5vw;

        .email,
        .password{
            margin: 0 auto;
            width: max-content;
            display: flex;
            flex-direction: column;
            margin-top: 0.5vw;

            label{
                width: max-content;
                font-size: 1.1vw;
                font-family: var(--oswald);
                margin-bottom: 0.4vw;
                transition: transform 0.5s color 0.5s;
                transform: translateY(2.4vw) translateX(1.7vw) scale3d(1.1, 1.1, 1);
                cursor: pointer;
            }

            
            input{
                width: 20vw;
                height: 2.5vw;
                padding: 0.5vw;
                font-size: 1.25vw;
                font-family: var(--oswald);
                letter-spacing: 0.1vw;
            } 
        }

        h6{
            margin: 0 auto;
            width: max-content;
            font-size: 0.95vw;
            font-family: var(--oswald);
            margin-bottom: 1vw;
            color: var(--white);
            margin-top: 0.6vw;
            cursor: pointer;
        }

        h6:hover{
            text-decoration: underline;
        }

        button{
            width: 100%;
            font-size: 1.8vw;
            background-color: var(--white);
            font-family: var(--oswald);
            transition: 0.5s;
            color: var(--darkBlue);
        }

        button:hover{
            font-size: 1.9vw;
        }

        p{
            margin: 0 auto;
            width: max-content;
            font-size: 0.85vw;
            color: var(--red);
            margin-top: 0.7vw;
            font-family: var(--oswald);
        }

    }


    .PageCadastro{
        margin: 0 auto;
        width: 90%;
        height: 70%;
        background-color: var(--almostWhite);

        h3{
            text-align: center;
            color: var(--darkBlue);
            font-family: var(--oswald);
            font-size: 1.8vw;
            margin-bottom: 1vw;
        }

        .boasVindas{
            width: 100%;
            height: max-content;
            padding-top: 1vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            h4{   
                width: max-content;
                font-size: 1.25vw;
                color: var(--darkBlue);
                font-family: var(--oswald);
            }

            img{
                width: 10vw;
                margin-top: 1vw;
                margin-bottom:1.5vw;
            }
        }

        .formRegister{
            margin: 0 auto;
            width: 90%;
            height: 19.6vw;
            overflow-y: auto;

            button{
                margin-bottom: 1.5vw;
                margin-top: 2.1vw;
                font-size: 1.8vw;
                color: var(--white);
                background-color: var(--darkBlue);
                font-family: var(--oswald);
                transition: font-size 0.5s;
                cursor: pointer;
            }

            button:hover{
                font-size: 1.9vw;
            }
        }
    }

`;