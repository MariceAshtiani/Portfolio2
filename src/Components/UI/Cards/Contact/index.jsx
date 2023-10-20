import StyledCard from "./styled";
import { FaGithubSquare, FaFacebookSquare, FaInstagram, FaLinkedin, FaDiscord, FaEnvelope, FaArrowDown } from "react-icons/fa"

export default function ContactCard(){
    return (
        <>
        <h1>Contact me</h1>
        <StyledCard>
            <div className="contact-info">
                <h2>I would love to hear from you!</h2>
                <p>Feel free to reach out on one of the options below</p>
                <div className="arrow">
                    <FaArrowDown />
                </div>
                <div className="contact-options">
                    <a href="https://github.com/MariceAshtiani"><FaGithubSquare/></a>
                    <a href="https://www.facebook.com/maricejepsen"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/maricejepsen"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/marice-ashtiani-2a3972222/"><FaLinkedin /></a>
                    <a href="https://discord.com/users/900117499662708807"><FaDiscord /></a>
                    <a href="mailto:marice95@hotmail.no" target="_blank"><FaEnvelope /></a>
                </div>
            </div>
        </StyledCard>
        </>
    )
}