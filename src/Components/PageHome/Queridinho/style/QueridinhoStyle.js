import styled from 'styled-components';

export const CadaQueridinho = styled.div`
    width: 100%;

.image-Container-Hamburger{
    width: 100%;
    height: max-content;
    
    img{
        width: 100%;
        height: 16.5vw;
        border-radius: 1vw;
        cursor: pointer;
    }
}

.textAndValues{
    h4{
        font-size: 1.25vw;
        font-family: var(--oswald);
        color: var(--darkBlue);
        text-align: center;
        margin-top: 0.5vw;
        margin-bottom: 0.7vw;
        font-weight: 500;
        cursor: pointer;
    }

    .containerHeart{
        margin: 0 auto;
        display: flex;
        align-items: center;
        width: max-content;
        height: max-content;
        margin-bottom: 0.7vw;

        img{
            width: 1.5vw;
        }

        img:nth-child(1),
        img:nth-child(2),
        img:nth-child(3),
        img:nth-child(4){
            margin-right: 0.3vw;
        }
    }

    p{
        font-size: 1vw;
        font-family: var(--oswald);
        font-weight: 400;
        color: var(--darkBlue);
        text-align: center;
        margin-bottom: 0.7vw;
    }
}

.ContainerCar{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5vw;

    .CarButton{
        width: 65%;
        height: 3vw;
        background-color: var(--darkBlue);
        border-radius: 0.4vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;

         
        p{
            color: var(--white);
            font-family: var(--oswald);
            font-size: 1.1vw;
            font-weight: 500;
            margin-right: 1vw;
        }

        img{
            width: 1.1vw;
            animation-name: ${({animation}) => animation && 'effect'};
            animation-duration: 1s;
            animation-delay: 0ms;
            animation-iteration-count: 1;
        }

        @keyframes effect{
            to{
                
                transform: translateX(3.5vw);
                
            }
        }
    }
}
`;