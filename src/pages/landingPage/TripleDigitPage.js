import {
    StyledButton,
    StyledContainer,
    ContextHeading,
    StyledHeadline,
} from "../../components/styled";
import { CounterContext } from "../../contextState/counterContext";
import { useContext } from "react";

const TripleDigitPage = () => {
    const { count, setCount } = useContext(CounterContext);

    const addRemove = (boolean) => {
        setCount((oldCount) => {
            if (boolean) return oldCount + 100;
            else return oldCount - 100;
        });
    };

    return (
        <div>
            <ContextHeading>{count}</ContextHeading>
            <StyledContainer>
                <StyledButton
                    onClick={() => {
                        addRemove(true);
                    }}
                >
                    Add 100
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        addRemove(false);
                    }}
                >
                    Remove 100
                </StyledButton>
            </StyledContainer>
            <StyledHeadline>This page will add/remove 100</StyledHeadline>
        </div>
    );
};

export default TripleDigitPage;
