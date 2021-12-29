import styled from 'styled-components';

export const Campo = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5vw;
    margin-top: 0.5vw;

    label{
        width: max-content;
        font-size: 1.1vw;
        font-family: var(--oswald);
        margin-bottom: 0.4vw;
        transition: transform 0.5s color 0.5s;
        transform: translateY(2.4vw) translateX(0.9vw) scale3d(1.1, 1.1, 1);
        cursor: pointer;
    }

    .flex{
        display: flex;
        justify-content: space-between;


        input{
            width: 20vw;
            height: 2.5vw;
            padding: 0.5vw;
            font-size: 1.25vw;
            font-family: var(--oswald);
            letter-spacing: 0.1vw;
        } 

        img{
            width: 2vw;
            margin-right: 3vw;
            transition: 0.5s;
        }
    }
`;