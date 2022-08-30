import {
    StyledButton,
    StyledContainer,
    ContextHeading,
    StyledHeadline,
} from "../../components/styled";
import { CounterContext } from "../../contextState/counterContext";
import { useContext } from "react";

const DoubleDigitPage = () => {
    const { count, setCount } = useContext(CounterContext);

    const addRemove = (boolean) => {
        setCount((oldCount) => {
            if (boolean) return oldCount + 10;
            else return oldCount - 10;
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
                    Add 10
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        addRemove(false);
                    }}
                >
                    Remove 10
                </StyledButton>
            </StyledContainer>
            <StyledHeadline>This page will add/remove 1</StyledHeadline>
        </div>
    );
};

export default DoubleDigitPage;
