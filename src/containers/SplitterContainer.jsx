import React, { useState, useEffect } from "react";
import { StyledSplitterContainer } from "./SplitterContainer.styled";
import Bill from "../components/bill/Bill";
import People from "../components/people/People";
import Result from "../components/result/Result";
import Tip from "../components/tip/Tip";

const SplitterContainer = () => {
    const [bill, setBill] = useState(0.0);
    const [tipPerc, setTipPerc] = useState(15);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0.0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const calculateTipAmountPerPerson = () => {
        setTipAmountPerPerson((bill / numOfPeople) * (tipPerc / 100));
    };

    const calculateTotalAmountPerPerson = () => {
        setTotalPerPerson(bill / numOfPeople + tipAmountPerPerson);
    };

    const handleInputChange = (value) => {
        setBill(value);
    };

    const handleNumOfPeopleChange = (value) => {
        setNumOfPeople(value);
    };

    const handleTipPercChange = (value) => {
        setTipPerc(value);
        // console.log("Tip percentage change to: ", value);
    };

    useEffect(() => {
        calculateTipAmountPerPerson();
        calculateTotalAmountPerPerson();
    }, [bill, tipAmountPerPerson, numOfPeople, tipPerc]);

    return (
        <>
            <StyledSplitterContainer>
                <Bill handleInputChange={handleInputChange}>Bill</Bill>
                <Tip handleTipPercChange={handleTipPercChange} />
                <People
                    numOfPeople={numOfPeople}
                    handleNumOfPeopleChange={handleNumOfPeopleChange}
                >
                    Number of People
                </People>
                <Result
                    tipAmountPerPerson={tipAmountPerPerson}
                    totalPerPerson={totalPerPerson}
                />
            </StyledSplitterContainer>
        </>
    );
};

export default SplitterContainer;
