import styled from "styled-components";

export default styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin: 20px;

.contact-info h2 {
    margin-bottom: 10%;
}

.arrow svg {
    font-size: 4rem;
    margin: 10%;
}

.contact-options {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
}

.contact-options svg{
    font-size: 5rem;
    color: rgb(209,167,181);
    &:hover {
        transform: scale(1.5);
        opacity: 0.7;
    }
}

    @media (max-width: ${({ theme }) => theme.tablet}) {

        .arrow svg, .contact-options svg{
            font-size: 3rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        .contact-options {
            flex-wrap: wrap;
        }

        .arrow svg, .contact-options svg{
            font-size: 2rem;
        }
    }
`