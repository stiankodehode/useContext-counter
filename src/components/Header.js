import { StyledLink, StyledHeader, StyledNav, StyledHeadline } from "./styled";

const Header = () => {
    return (
        <StyledHeader>
            <StyledHeadline>Counter app with useContext</StyledHeadline>
            <StyledNav>
                <StyledLink to="./pages/landingPage/SingleDigitPage">
                    Add/Remove 1
                </StyledLink>
                <StyledLink to="./pages/landingPage/DoubleDigitPage">
                    Add/Remove 10
                </StyledLink>
                <StyledLink to="./pages/landingPage/TripleDigitPage">
                    Add/Remove 100
                </StyledLink>
            </StyledNav>
        </StyledHeader>
    );
};

export default Header;
