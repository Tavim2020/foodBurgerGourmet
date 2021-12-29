import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 7vw;
    background-color: var(--darkBlue);

    .centralizedContainer{
        margin: 0 auto;
        width: 92%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const LogoContainer = styled.div`
    width: 10vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 10vw;
    }

`;


export const MenuOpenUser = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .LoginAndSingIn{
        width: 20vw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        button{
            width: 100%;
            height: 3.9vw;
            margin-top: 1.3vw;
            font-size: 1.6vw;
            font-family: var(--oswald);
            font-weight: 500;
            border-radius: 0.9vw;
            border: none;
            background-color: var(--white);
            color: var(--darkBlue);
            cursor: pointer;

            .piscadinha{
                width: 2vw;
                display: none;
            }
        }

        h5{
            width: max-content;
            font-size: 0.9vw;
            font-family: var(--oswald);
            font-weight: 400;
            color: var(--white);
            cursor: pointer;
        }

        h5:hover{
            text-decoration: underline;
        }
    }
`;

export const CarContainer = styled.div`
    width: 3vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2vw;
    margin-right: 2vw;
    position: relative;

    img{
        width: 3vw;
        cursor: pointer
    }

    .numberInCar{
        width: 2vw;
        height: 2vw;
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: -10%;
        right: -15%;
        cursor: pointer;

        p{
            font-size: 1.2vw;
            font-family: var(--oswald);
            color: var(--darkBlue);
        }
    }

    .detalheContainer{
        width: 3vw;
        height: 3vw;
        background-color: var(--white);
        position: absolute;
        top: 130%;
        transform: rotateZ(45deg);
        z-index: 1;
    }
`;


export const Menu = styled.nav`
    width: max-content;
    
    ul{
        width: max-content;
        display: flex;
        align-items: center;

        li{
            width: max-content;
            font-size: 1.6vw;
            color: var(--white);
            font-family: var(--oswald);
            font-weight: 500;
            cursor: pointer;
        }

        li::after{
            content: '';
            margin: 0 auto;
            display: block;
            width: 0%;
            height: 0.08vw;
            background-color: var(--white);
            transition: width 0.5s;
        }

        li:hover::after{       
            width: 100%;
        }

        li:nth-child(1),
        li:nth-child(2),
        li:nth-child(3){
            margin-right: 2vw;
        }
    }
`;