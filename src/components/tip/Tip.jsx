import React from "react";
import {
    StyledTipContainer,
    StyledTipHeader,
    StyledTipContent,
    StyledTipCustom,
} from "./Tip.styled";

const Tip = ({ handleTipPercChange, bg }) => {
    const percIds = [{ id: 5 }, { id: 10 }, { id: 15 }, { id: 25 }, { id: 50 }];

    const buttonList = percIds.map((btn) => {
        return (
            <StyledTipContent
                key={btn.id}
                onClick={() => handleTipPercChange(btn.id)}
            >
                {btn.id} %
            </StyledTipContent>
        );
    });

    return (
        <>
            <StyledTipHeader>Select Tip %</StyledTipHeader>
            <StyledTipContainer>
                {buttonList}

                <StyledTipCustom
                    placeholder="Custom"
                    type="number"
                    onChange={(e) => handleTipPercChange(e.target.value)}
                ></StyledTipCustom>
            </StyledTipContainer>
        </>
    );
};

export default Tip;
