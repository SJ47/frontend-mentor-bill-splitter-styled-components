import React from "react";
import {
    StyledTipContainer,
    StyledTipHeader,
    StyledTipContent,
    StyledTipCustom,
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
                <StyledTipCustom
                    placeholder="Custom"
                    onChange={(e) => handleTipPercChange(e.target.value)}
                ></StyledTipCustom>
            </StyledTipContainer>
        </>
    );
};

export default Tip;
