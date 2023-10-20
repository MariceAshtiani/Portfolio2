import { HelmetProvider, Helmet } from "react-helmet-async"
import ContactCard from "../../Components/UI/Cards/Contact"

export default function ContactPage() {
    return(
        <>
        <HelmetProvider>
                <Helmet>
                    <title>M.A | Contact</title>
                    <meta
                        name="description"
                        content="Here you can find ways to get in touch with me"></meta>
                    <link rel="stylesheet" href="https://use.typekit.net/kla3ecq.css"></link>
                </Helmet>
            </HelmetProvider>
            <main>
                <ContactCard />
            </main>
            </>
    )
}