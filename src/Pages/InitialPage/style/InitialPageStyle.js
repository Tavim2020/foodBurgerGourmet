import styled from 'styled-components';

export const PageInitial = styled.main`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .background{
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        filter: saturate(130%) contrast(1.2);
        position: absolute;
        top: 0%;
        left: 0%;
        z-index: -1;
    }

    @media(max-width: 980px){
        .background{
            object-position: -60vw 0;
        }
    }
`;

export const Content = styled.section`
    width: max-content;
    height: 100%;
    display: flex;
    flex-direction: column;

    .Logo{
        width: 38vw;
        margin-top: 12vh;
        margin-left: 10vw;
    }

    @media(max-width: 980px){
        margin: 0 auto;
        .Logo{
            margin: 0 auto;
            width: 60vw;
            margin-top: 8vh;
            margin-left: 0vw;
        }
    }

`;


export const DoChefText = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 18vw;

    h2{
        font-size: 2.2vw;
        color: var(--white);
        font-family: var(--oswald);
        font-weight: 500;
        width: max-content;
        margin-right: 2vw;
    }

    .Gorro{
        width: 7vw;
    }

    @media(max-width: 980px){
        margin: 0 auto;
        h2{
            font-size: 4.4vw;
            margin-right: 3.5vw;
        }

        .Gorro{
            width: 10vw;
        }

    }

`;

export const ButtonEntrar = styled.button`
    width: 30vw;
    height: 15vh;
    background-color: var(--red);
    color: var(--white);
    border: 0;
    margin-left: 10vw;
    margin-top: 6vh;
    font-size: 2.2vw;
    font-weight: 700;
    font-family: var(--oswald);
    cursor: pointer;

    &:hover{
        border: 1px solid var(--black);
    }

    @media(max-width: 980px){
        margin-top: auto;
        width: 60vw;
        height: 9vh;
        margin-left: 0vw;
        font-size: 3.6vw;
    }
`;

export const Delivery = styled.div`
    width: 20vw;
    display: flex;
    align-items: center;
    margin-top: 4vh;
    margin-left: 16vw;

    p{
        font-size: 1.85vw;
        color: var(--white);
        font-family: var(--oswald);
        font-weight: 400;
        margin-right: 3.5vw;
        cursor: pointer;
    }

    p:hover{
        text-decoration: underline;
    }

    .WhatsApp{
        width: 3vw;
        cursor: pointer;
    }

    .WhatsApp:hover{
        animation-name: tel;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-delay: 0ms;
        animation-direction: normal;
        animation-iteration-count: 1;
        animation-timing-function: linear;
    }

    @keyframes tel{
        5%{
            transform: translateX(-10%) translateY(-10%);
        }
        10%{
            transform: translateX(10%) translateY(-10%);
        }
        15%{
            transform: translateX(-10%) translateY(-10%);
        }
        20%{
            transform: translateX(10%) translateY(-10%);
        }
        25%{
            transform: translateX(-10%) translateY(-10%);
        }
        30%{
            transform: translateX(10%) translateY(-10%);
        }
        35%{
            transform: translateX(-10%) translateY(-10%);
        }
        40%{
            transform: translateX(10%) translateY(-10%);
        }
        45%{
            transform: translateX(-10%) translateY(-10%);
        }
        50%{
            transform: translateX(10%) translateY(-10%);
        }
        55%{
            transform: translateX(-10%) translateY(-10%);
        }
        60%{
            transform: translateX(10%) translateY(-10%);
        }
        65%{
            transform: translateX(-10%) translateY(-10%);
        }
        70%{
            transform: translateX(10%) translateY(-10%);
        }
        75%{
            transform: translateX(-10%) translateY(-10%);
        }
        80%{
            transform: translateX(10%) translateY(-10%);
        }
        85%{
            transform: translateX(-10%) translateY(-10%);
        }
        90%{
            transform: translateX(10%) translateY(-10%);
        }
        95%{
            transform: translateX(-10%) translateY(-10%);
        }
        100%{
            transform: translateX(0%) translateY(0%);
        }
    }


    @media(max-width: 980px){
        margin: 0 auto;
        width: 60vw;
        justify-content: center;
        margin-top: 1vh;
        margin-left: 0vw;
        margin-bottom: 2vh;

        p{
            font-size: 3.4vw;
            margin-right: 5.5vw;
        }

        .WhatsApp{
            width: 6vw;
        }
    }
`;
