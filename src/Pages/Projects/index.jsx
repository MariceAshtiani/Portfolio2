import { HelmetProvider, Helmet } from "react-helmet-async"

export default function ProjectPage() {
    return(
        <>
        <HelmetProvider>
                <Helmet>
                    <title>M.A | Projects</title>
                    <meta
                        name="description"
                        content=""></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/kla3ecq.css"></link>
                </Helmet>
            </HelmetProvider>
            <main>
                <h1>Nothing here yet!</h1>
            </main>
            </>
    )
}