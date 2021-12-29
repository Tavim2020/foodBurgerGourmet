import styled from 'styled-components';

export const CarroChefeContainer = styled.section`
    margin: 0 auto;
    width: 92%;
    height: max-content;
    margin-top: 2vw;
    margin-bottom: 10vw;


    h1{
        font-size: 3.35vw;
        color: var(--darkBlue);
        font-family: var(--oswald);
        margin-left: 5vw;
    }

    .BannerAndText{
        margin: 0 auto;
        width: 82vw;
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 43vw;
            border-radius: 1.2vw;
            margin-top: 4vw;
        }

        .ContainerTextBurgerChefe{
            width: max-content;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            p{
                width: 32vw;
                font-size: 1.8vw;
                font-family: var(--oswald);
                line-height: 3vw;
                font-weight: 500;
                margin-top: 3.5vw;
            }

            button{
                width: 25vw;
                height: 5vw;
                margin-right: 3.5vw;
                margin-top: 4vw;
                background-color: var(--darkBlue);
                color: var(--white);
                font-size: 1.8vw;
                font-family: var(--oswald);
                font-weight: 700;
                border: none;
                transition: font-size 0.5s;
                cursor: pointer;
            }

            button:hover{
                font-size: 2vw;
            }
        }

    }

`;