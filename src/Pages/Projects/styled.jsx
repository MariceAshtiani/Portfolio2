import styled from "styled-components";

export default styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    .card-container {
        display: grid;
        grid-template: auto auto/ repeat(3, 1fr);
        gap: 3rem;
        margin: 10px;
        margin-top: 30px;
    }
    
    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 500px;
        max-height: 500px;
        height: 100%;
        width: 100%;
        box-shadow: 0 0 10px rgba(209, 167, 181, 0.453);
        overflow: hidden;
        border-radius: 5%;
    }

    .card-image {
        max-width: 500px;
        width: 100%;
        height: 45%;
        object-position: center;
        object-fit: scale-down;
        overflow: hidden;
    }

    .card-image img {
        max-width: 500px;
        width: 100%;
    }

    .card-txt h3 {
        margin: 10px 5px;
    }

    .card-txt {
        margin: 5px;
    }

    .card-txt p{
        font-size: 1vmax;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px;
        padding: 10px;
    }

    .links a {
        color: #E482F5;
        padding: 5px;
        font-size: 1.3vmax;
        &:hover {
            color: white;
            transform: scale(0.9);
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        
        .card-container {
            grid-template: auto auto/ repeat(1, 1fr);
        }

        .card {
            max-height: 350px; 
        }

        .card-txt p{
            font-size: 1.7vmax;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {

        .card {
            max-height: 300px; 
        }


        .card-txt p, .links a{
            font-size: 1.4vmax;
        }
    }

    
`