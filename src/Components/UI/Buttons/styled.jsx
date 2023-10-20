import styled from "styled-components";

const BasicButton = styled.button`
    background-color: rgb(209,167,181);
    border-radius: 10px;
    width: 150px;
    max-width: 100%;
    border: 2px solid #5B057D;
    color: #2e0e3b;
    font-size: min(6vmin, calc(1rem + 0.23vmax));
    font-weight: bold;
    padding: 10px 25px;
    cursor: pointer;
    &:hover {
        transform: scale(0.95);
        opacity: 0.7;
    }
`

export default BasicButton;