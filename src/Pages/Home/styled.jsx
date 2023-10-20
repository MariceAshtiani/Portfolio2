import styled from "styled-components";

export default styled.div`
    .home-info {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        font-family: "vendetta", serif;
        font-style: normal;

        h1 {
            font-size: 6rem;
        }

        h2 {
            font-size: 3rem;
            margin-bottom: 10%;
        }

        h3 {
            font-size: 2rem;
        }

        .more-btns {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.tablet}) {

        .home-info {

            h1 {
                font-size: 4rem;
            }

            h2 {
                font-size: 2rem;
                margin-bottom: 10%;
            }

            h3 {
                font-size: 1.5rem;
            }
        }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        .home-info {

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
                margin-bottom: 10%;
            }

            h3 {
                font-size: 1rem;
            }

            .more-btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        }
    }

`