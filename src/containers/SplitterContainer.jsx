import React, { useState, useEffect } from "react";
import { StyledSplitterContainer } from "./SplitterContainer.styled";
import Bill from "../components/bill/Bill";
import People from "../components/people/People";
import Result from "../components/result/Result";
import Tip from "../components/tip/Tip";

const SplitterContainer = () => {
    const [bill, setBill] = useState("");
    const [tipPerc, setTipPerc] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState("");
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0.0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const calculateTipAmountPerPerson = () => {
        numOfPeople
            ? setTipAmountPerPerson(
                  ((bill / numOfPeople) * (tipPerc / 100)).toFixed(2)
              )
            : setTipAmountPerPerson(0);
    };

    const calculateTotalAmountPerPerson = () => {
        numOfPeople
            ? setTotalPerPerson(
                  (bill / numOfPeople + tipAmountPerPerson / 1).toFixed(2)
              )
            : setTotalPerPerson(0);
    };

    const handleInputChange = (value) => {
        if (value > 999999.99) return;

        if (value) {
            const pattern =
                "^\\s*((\\d+(\\.\\d{0,2})?)|((\\d*(\\.\\d{1,2}))))\\s*$";
            const re = new RegExp(pattern);
            re.test(value) && setBill(value);
        } else {
            setBill("");
        }
    };

    const handleNumOfPeopleChange = (value) => {
        if (value > 99) return;

        if (value) {
            const pattern = "^[1-9]$|^[1-9][0-9]$|^(99)$";
            const re = new RegExp(pattern);
            re.test(value) && setNumOfPeople(value);
        } else {
            setNumOfPeople("");
        }
    };

    const handleTipPercChange = (value) => {
        setTipPerc(value);
    };

    const handleReset = () => {
        window.location.reload(false);
    };

    useEffect(() => {
        calculateTipAmountPerPerson();
        calculateTotalAmountPerPerson();
    }, [bill, tipAmountPerPerson, numOfPeople, tipPerc]);

    return (
        <>
            <StyledSplitterContainer>
                <Bill bill={bill} handleInputChange={handleInputChange}>
                    Bill
                </Bill>

                <Tip handleTipPercChange={handleTipPercChange} />

                <People
                    numOfPeople={numOfPeople}
                    handleNumOfPeopleChange={handleNumOfPeopleChange}
                >
                    Number of People
                    {!numOfPeople && (
                        <p style={{ color: "red" }}>&nbsp; Can't be zero</p>
                    )}
                </People>

                <Result
                    tipAmountPerPerson={tipAmountPerPerson}
                    totalPerPerson={totalPerPerson}
                    handleReset={handleReset}
                />
            </StyledSplitterContainer>
        </>
    );
};

export default SplitterContainer;
