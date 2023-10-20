import { HelmetProvider, Helmet } from "react-helmet-async"
import StyledHomepage from "./styled";

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
            <div>HOMEPAGE</div>
            </StyledHomepage>
            </>
    )
}