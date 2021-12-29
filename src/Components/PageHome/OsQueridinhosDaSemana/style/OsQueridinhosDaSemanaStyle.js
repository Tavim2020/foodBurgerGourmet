import styled from 'styled-components';

export const OsMaisQueridinhosDaSemanaContainer = styled.section`
    width: 100vw;
    height: 30vw;
    position: relative;
    margin-bottom: 16vw;
    
    .Container{
        margin: 0 auto;
        width: 92%;
        height: max-content;
        background-color: var(--almostWhite);
        border-radius: 1.2vw;
        position: absolute;
        top: -17%;
        left: 4%;
    
        .TitleQueridinhos{
            padding-top: 4vw;
            width: 100%;
            height: max-content;
            padding-bottom: 4vw;
            
            h1{
                font-size: 3.35vw;
                color: var(--darkBlue);
                font-family: var(--oswald);
                font-weight: 700;
                margin-left: 5vw;
            }
    
        }

        .Queridinhos{
            margin: 0 auto;
            width: 82vw;
            height: max-content;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            justify-content: space-between;
            gap: 5vw;
        }

    }
`;