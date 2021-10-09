import React from "react";
import {
    StyledTipContainer,
    StyledTipHeader,
    StyledTipContent,
} from "./Tip.styled";

const Tip = ({ handleTipPercChange }) => {
    return (
        <>
            <StyledTipHeader>Select Tip %</StyledTipHeader>
            <StyledTipContainer>
                <StyledTipContent onClick={() => handleTipPercChange(5)}>
                    5%
                </StyledTipContent>
                <StyledTipContent onClick={() => handleTipPercChange(10)}>
                    10%
                </StyledTipContent>
                <StyledTipContent
                    onClick={() => handleTipPercChange(15)}
                    bg="var(--color-strong-cyan)"
                    fg="var(--color-very-dark-cyan)"
                >
                    15%
                </StyledTipContent>
                <StyledTipContent onClick={() => handleTipPercChange(25)}>
                    25%
                </StyledTipContent>
                <StyledTipContent onClick={() => handleTipPercChange(50)}>
                    50%
                </StyledTipContent>
                <StyledTipContent
                    bg="var(--color-light-grayish-cyan)"
                    fg="var(--color-dark-grayish-cyan)"
                >
                    Custom
                </StyledTipContent>
            </StyledTipContainer>
        </>
    );
};

export default Tip;
