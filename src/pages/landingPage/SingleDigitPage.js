import {
    StyledButton,
    StyledContainer,
    ContextHeading,
    StyledHeadline,
} from "../../components/styled";
import { CounterContext } from "../../contextState/counterContext";
import { useContext } from "react";

const SingleDigitPage = () => {
    const { count, setCount } = useContext(CounterContext);

    const addRemove = (boolean) => {
        setCount((oldCount) => {
            if (boolean) return oldCount + 1;
            else return oldCount - 1;
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
                    Add 1
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        addRemove(false);
                    }}
                >
                    Remove 1
                </StyledButton>
            </StyledContainer>
            <StyledHeadline>This page will add/remove 1</StyledHeadline>
        </div>
    );
};

export default SingleDigitPage;
