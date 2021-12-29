import styled from 'styled-components';

export const FoodBurgerContainer = styled.section`
    margin: 0 auto;
    width: 92%;
    height: max-content;
    background-color: var(--almostWhite);
    border-radius: 1.2vw;

    .TitleContainer{
        margin: 0 auto; 
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 4vw;
        margin-bottom: 2vw;

        h1{
            font-size: 3.35vw;
            font-family: var(--oswald);
            color: var(--darkBlue);
        }

        h1:nth-child(1){
            color:var(--red);
            margin-right: 0.9vw; 
        }

        h1:nth-child(2){
            color:var(--yellow);
            margin-right: 0.9vw; 
        }
    }

    .buttonContainerCardapio{
        width: 100%;
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2vw;

        button{
            width: 24vw;
            height: 3vw;
            border-radius: 0.9vw;
            border: none;
            background-color: var(--almostWhite);
            color: var(--darkBlue);
            font-size: 1.2vw;
            font-weight: 700;
            cursor: pointer;
            transition: text-decoration 2s;
        }

        button:hover{
            text-decoration: underline;
        }
    }


`;