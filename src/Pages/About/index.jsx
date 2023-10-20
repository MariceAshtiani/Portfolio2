import { HelmetProvider, Helmet } from "react-helmet-async"

export default function AboutPage() {
    return(
        <>
        <HelmetProvider>
                <Helmet>
                    <title>M.A | About</title>
                    <meta
                        name="description"
                        content=""></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/kla3ecq.css"></link>
                </Helmet>
            </HelmetProvider>
            <div>ABOUTPAGE</div>
            </>
    )
}