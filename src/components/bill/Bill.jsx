import React from "react";
import {
    StyledBillContainer,
    StyledBillHeader,
    StyledInput,
} from "./Bill.styled";

const Bill = ({ props, bill, children, handleInputChange }) => {
    return (
        <>
            <StyledBillContainer>
                <StyledBillHeader>{children}</StyledBillHeader>
                <span>
                    <StyledInput
                        type="number"
                        step="0.01"
                        value={bill}
                        placeholder="0.00"
                        min="0"
                        max="999999.99"
                        onChange={(e) => handleInputChange(e.target.value)}
                    ></StyledInput>
                </span>
            </StyledBillContainer>
        </>
    );
};

export default Bill;
