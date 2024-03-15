import styled from 'styled-components';

//todos los elementos de html se pueden estilar de esta forma
export const Button = styled.button`
    background-color: #DFF5FF;
    font-size: 1em;
    margin: 1em;
    padding: 8px;
    border: 1px solid #09f;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 0px;

    &:hover{
        background: #FFF6E9;
    }
`;