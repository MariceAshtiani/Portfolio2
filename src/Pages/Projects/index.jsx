import { HelmetProvider, Helmet } from "react-helmet-async"
import StyledPage from "./styled";

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
                <StyledPage>
                    <h1>My Projects</h1>
                    <div className="card-container">

                        <div className="card">
                            <div className="card-image">
                                <img src="/Images/Webuy.jpg" alt="landing page of an auction-site project"></img>
                            </div>
                            <div className="card-txt">
                                <h3>WeBuy</h3>
                                <p>WeBuy is a project I did for my semester project during the second year of Noroff. It is an online auction site created for Noroff students, where they can search, create and bid on items listed on the page. This project is created with HTML, Javascript and bootstrap.</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/MariceAshtiani/WeBuy">
                                    View project
                                </a>
                                <a href="https://webuy-sp.netlify.app/">
                                    Visit live page
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img src="/Images/Trendcart.jpg" alt="landing page of an e-com react project"></img>
                            </div>
                            <div className="card-txt">
                                <h3>TrendCart</h3>
                                <p>TrendCart is a project I did for my JavaScript Frameworks lesson during the second year of Noroff. It is an e-com site created for Noroff students, where they can search and buy items listed on the page. This project is created with React using Vite and styled components.</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/MariceAshtiani/JS-Frameworks-CA">
                                    View project
                                    
                                </a>
                                <a href="https://trendcart-shopping.netlify.app/">
                                    Visit live page
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img src="/Images/Holidaze.jpg" alt="landing page of a booking-site"></img>
                            </div>
                            <div className="card-txt">
                                <h3>Holidaze</h3>
                                <p>Holidaze is a project I did for my last exam during the second year of Noroff. It is a site created for Noroff students, where they can search, create, edit, delete and book venues listed on the page. This project is created with React using Vite and styled components.</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/MariceAshtiani/Holidaze">
                                    View project
                                </a>
                                <a href="https://holidaze-exam-project.netlify.app/">
                                    Visit live page
                                </a>
                            </div>
                        </div>

                    </div>
                </StyledPage>
            </main>
            </>
    )
}