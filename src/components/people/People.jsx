import React from "react";
import {
    StyledPeopleContainer,
    StyledPeopleHeader,
    StyledInput,
} from "./People.styled";

const People = ({ props, children }) => {
    return (
        <>
            <StyledPeopleContainer>
                <StyledPeopleHeader>{children}</StyledPeopleHeader>
                <span>
                    <i className="fas fa-user"></i>
                    <StyledInput placeholder="5"></StyledInput>
                </span>
            </StyledPeopleContainer>
        </>
    );
};

export default People;
