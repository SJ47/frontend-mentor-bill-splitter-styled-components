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
                        type="text"
                        placeholder="0.00"
                        // value={bill}
                        minLength="1"
                        maxLength="7"
                        onChange={(e) => handleInputChange(e.target.value)}
                    ></StyledInput>
                </span>
            </StyledBillContainer>
        </>
    );
};

export default Bill;
