import Logo from "./Logo";
import NavMenu from "./Nav";
import StyledHeader from "./styled";

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <NavMenu />
        </StyledHeader>
    );
};