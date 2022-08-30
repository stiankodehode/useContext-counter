import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppContainer = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
`;

export const StyledHeader = styled.div`
    padding: 2em;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
`;

export const StyledHeadline = styled.h1`
    color: white;
    text-align: center;
`;

export const StyledContainer = styled.div`
    margin-top: 4em;
    justify-content: center;
    display: flex;
    gap: 3em;
`;

export const ContextHeading = styled.h2`
    text-align: center;
    color: white;
    text-decoration: underline;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    color: white;
    font-size: 18px;
    padding: 1em;
    border: 2px solid cyan;
    background-color: orange;
`;

export const StyledButton = styled.button`
    color: white;
    font-size: 18px;
    padding: 1em;

    background-color: red;
`;
