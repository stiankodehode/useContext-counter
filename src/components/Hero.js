import { StyledHeadline, ContextHeading } from "./styled";
import { useContext } from "react";
import { CounterContext } from "../contextState/counterContext";

const Hero = () => {
    const { count, setCount } = useContext(CounterContext);
    return (
        <>
            <ContextHeading>{count}</ContextHeading>
            <StyledHeadline>
                You add or remove X depending on which page you're on
            </StyledHeadline>
        </>
    );
};

export default Hero;
