import styled from "styled-components";

export default styled.div`
max-width: 1500px;
width: 100%;
margin: 0 auto;
border: 2px solid rgb(209,167,181);
border-radius: 20px;
padding: 20px;
margin-bottom: 20px;

hr {
    margin: 30px;
    color: rgb(209,167,181)
}

    .about-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        .about-image {
            max-width: 300px;
            width: 100%;
        }
        .about-image img{
            max-height: 300px;
            height: 100%;
            border-radius: 20px;
            border: 2px solid rgb(209,167,181);
        }

        .about-txt {
            max-width: 700px;
            width: 100%;
        }
    }

    .about-extra {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .languages, .frameworks, .tools {
            display: flex;
            flex-direction: row;
            gap: 1rem;
            padding: 10px;
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {

        .about-info {
            flex-direction: column;
        }

        .about-extra {
            img {
                max-width: 200px;
                width: 100%;
                max-height: 30px;
                height: 100%;
            }
            .languages, .frameworks, .tools {
            flex-direction: column;
        }}
    }
`