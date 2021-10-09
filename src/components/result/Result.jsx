import React from "react";
import {
    StyledResultContainer,
    StyledResultButton,
    StyledTipAmountContainer,
    StyledTotalAmountContainer,
} from "./Result.styled";

const Result = () => {
    return (
        <StyledResultContainer>
            <StyledTipAmountContainer>
                <div>
                    Tip Amount <br />
                    <span>/ person</span>
                </div>
                <div>$4.27</div>
            </StyledTipAmountContainer>

            <StyledTotalAmountContainer>
                <div>
                    Total <br />
                    <span>/ person</span>
                </div>
                <div>$32.79</div>
            </StyledTotalAmountContainer>

            <StyledResultButton>RESET</StyledResultButton>
        </StyledResultContainer>
    );
};

export default Result;
