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
                        type="number"
                        step="1"
                        value={numOfPeople}
                        placeholder="0"
                        min="1"
                        max="99"
                        onChange={(e) => handleNumOfPeopleChange(e.target.value)}
                    ></StyledInput>
                </span>
            </StyledPeopleContainer>
        </>
    );
};

export default People;
