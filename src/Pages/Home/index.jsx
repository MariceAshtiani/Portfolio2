import { HelmetProvider, Helmet } from "react-helmet-async"
import StyledHomepage from "./styled";
import BasicButton from "../../Components/UI/Buttons/styled";
import { Link } from "react-router-dom";

export default function HomePage() {
    return(
        <>
        <HelmetProvider>
                <Helmet>
                    <title>M.A | Home</title>
                    <meta
                        name="description"
                        content=""></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/kla3ecq.css"></link>
                </Helmet>
            </HelmetProvider>
            <StyledHomepage>
                <main>
                    <div className="home-info">
                        <h1>Marice Ashtiani</h1>
                        <h2>Front End Developer</h2>
                        <h3>Learn more</h3>
                        <div className="more-btns">
                            <Link to="/projects">
                                <BasicButton>Projects</BasicButton>
                            </Link>
                            <Link to="/about">
                                <BasicButton>About</BasicButton>
                            </Link>
                            <Link to="/contact">
                                <BasicButton>Contact</BasicButton>
                            </Link>
                        </div>
                    </div>
                </main>
            </StyledHomepage>
            </>
    )
}