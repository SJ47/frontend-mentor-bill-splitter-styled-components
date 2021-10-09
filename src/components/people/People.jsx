import React from "react";
import {
    StyledPeopleContainer,
    StyledPeopleHeader,
    StyledInput,
} from "./People.styled";

const People = ({ numOfPeople, children }) => {
    return (
        <>
            <StyledPeopleContainer>
                <StyledPeopleHeader>{children}</StyledPeopleHeader>
                <span>
                    <i className="fas fa-user"></i>
                    <StyledInput placeholder={numOfPeople}></StyledInput>
                </span>
            </StyledPeopleContainer>
        </>
    );
};

export default People;
