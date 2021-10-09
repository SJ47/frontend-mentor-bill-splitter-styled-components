import React from "react";
import {
    StyledTipContainer,
    StyledTipHeader,
    StyledTipContent,
} from "./Tip.styled";

const Tip = () => {
    return (
        <>
            <StyledTipHeader>Select Tip %</StyledTipHeader>
            <StyledTipContainer>
                <StyledTipContent>5%</StyledTipContent>
                <StyledTipContent>10%</StyledTipContent>
                <StyledTipContent
                    bg="var(--color-strong-cyan)"
                    fg="var(--color-very-dark-cyan)"
                >
                    15%
                </StyledTipContent>
                <StyledTipContent>25%</StyledTipContent>
                <StyledTipContent>50%</StyledTipContent>
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
