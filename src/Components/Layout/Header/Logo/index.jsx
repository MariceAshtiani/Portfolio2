import { Link } from "react-router-dom"
import StyledLogo from "./styled";

export default function Logo() {
    return (
        <StyledLogo className="logo">
            <Link to="/">M.A</Link>
        </StyledLogo>
    )
};