import React from "react";
import {
    StyledResultContainer,
    StyledResultButton,
    StyledTipAmountContainer,
    StyledTotalAmountContainer,
} from "./Result.styled";

const Result = ({ tipAmountPerPerson, totalPerPerson }) => {
    return (
        <StyledResultContainer>
            <StyledTipAmountContainer>
                <div>
                    Tip Amount <br />
                    <span>/ person</span>
                </div>
                <div>${tipAmountPerPerson}</div>
            </StyledTipAmountContainer>

            <StyledTotalAmountContainer>
                <div>
                    Total <br />
                    <span>/ person</span>
                </div>
                <div>${totalPerPerson}</div>
            </StyledTotalAmountContainer>

            <StyledResultButton>RESET</StyledResultButton>
        </StyledResultContainer>
    );
};

export default Result;
