import React from "react";
import {
    StyledBillContainer,
    StyledBillHeader,
    StyledInput,
} from "./Bill.styled";

const Bill = ({ props, children }) => {
    return (
        <>
            <StyledBillContainer>
                <StyledBillHeader>{children}</StyledBillHeader>
                <span>
                    <StyledInput placeholder="142.55"></StyledInput>
                </span>
            </StyledBillContainer>
        </>
    );
};

export default Bill;
