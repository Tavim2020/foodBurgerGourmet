import styled from 'styled-components';

export const ListBurgerContainer = styled.div`
    margin: 0 auto;
    width: 82vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5vw;

    img{
        width: 15vw;
        height: 12vw;
        object-fit: cover;
        object-position: -3vw;
        border-radius: 0.8vw;
    }

    div{
        width: max-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        h3{
            font-size: 1.8vw;
            color: var(--darkBlue);
            font-family: var(--oswald);
            text-align: right;
            margin-bottom: 0.7vw;
        }

        p{
            text-align: right;
            max-width: 54vw;
            font-size: 1.1vw;
            font-weight: 500;
            font-family: var(--oswald);
            color:var(--darkBlue);
        }

        p:nth-child(3){
            font-size: 1.25vw;
            font-weight: 400;
        }

        button{
            width: 19vw;
            height: 3vw;
            margin-left: 3.5vw;
            border-radius: 1vw;
            border: none;
            background-color: var(--darkBlue);
            color: var(--white);
            font-size: 1.25vw;
            font-family: var(--oswald);
            font-weight: 500;
            cursor: pointer;
            margin-top: 0.5vw;
        }
    }
`;