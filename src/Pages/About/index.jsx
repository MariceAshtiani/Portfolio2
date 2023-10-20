import { HelmetProvider, Helmet } from "react-helmet-async"
import AboutCard from "../../Components/UI/Cards/About"

export default function AboutPage() {
    return(
        <>
        <HelmetProvider>
                <Helmet>
                    <title>M.A | About</title>
                    <meta
                        name="description"
                        content="Here you can read about me, my education and hobbies"></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/kla3ecq.css"></link>
                </Helmet>
            </HelmetProvider>
            <main>
                <AboutCard />
            </main>
            </>
    )
}