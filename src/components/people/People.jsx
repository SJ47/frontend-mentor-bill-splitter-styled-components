import React from "react";
import {
    StyledPeopleContainer,
    StyledPeopleHeader,
    StyledInput,
} from "./People.styled";

const People = ({ numOfPeople, handleNumOfPeopleChange, children }) => {
    return (
        <>
            <StyledPeopleContainer>
                <StyledPeopleHeader>{children}</StyledPeopleHeader>
                <span>
                    <i className="fas fa-user"></i>
                    <StyledInput
                        onChange={(e) => handleNumOfPeopleChange(e.target.value)}
                        value={numOfPeople}
                        type="text"
                        minLength="1"
                        maxLength="2"
                    ></StyledInput>
                </span>
            </StyledPeopleContainer>
        </>
    );
};

export default People;
