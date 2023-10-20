import styled from "styled-components";

export default styled.div`
    .mobile-header {
        display: none;
    }

    .nav-links {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .nav-links a{
        color: rgb(209,167,181);
    }

    .nav-links a:hover {
        color: white;
    }

    .active {
        text-decoration: underline;
        font-weight: bold;
    }

   

    @media (max-width: ${({ theme }) => theme.tablet}) {
        .mobile-header {
            display: block;
        }
        
        .nav-links {
        display: none;
        }

        .menu-icon {
            font-size: min(6vmin, calc(1.3rem + 0.23vmax));
            cursor: pointer;
            position: absolute;
            right: 0px;
            top: 20px;
            width: 50px;
            color: white;
            margin: 5px;
        }

        .nav-links.mobile-active {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            background-color: rgb(0, 0, 0, 0.8);
            width: 100%;
            height: 100%;
            right: 0;
            top: 50px;
            z-index: 10;
            padding: 20px 10px;
            border: 2px dotted lightpink;

            & li {
                margin-bottom: 10px;
            }
        }

    }

`