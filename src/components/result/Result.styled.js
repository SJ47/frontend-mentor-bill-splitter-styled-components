import styled from "styled-components";

export const StyledResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-corner);
    padding: .3em;
    background: var(--color-very-dark-cyan);
    color: var(--color-white);
    width: 90%;
    margin: 0 auto;
    margin-bottom: 2em;
    text-align: center;
    margin-top: 1em;
    padding-bottom: .8em;

    @media (min-width: 776px) {
        grid-column-start: 2;
        grid-row-start: span 4;
        margin-bottom: 0em;
        padding-top: 1em;
    }
`;

export const StyledTipAmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 2em;

    span {
        color: var(--color-dark-grayish-cyan2);
    }

    div:last-of-type {
        color: var(--color-strong-cyan);
        font-size: 36px;
    }
`;

export const StyledTotalAmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;

    span {
        color: var(--color-dark-grayish-cyan2);
    }
    
    div:last-of-type {
        color: var(--color-strong-cyan);
        font-size: 36px;
    }
`;

export const StyledResultButton = styled.button`
    border-radius: var(--radius-corner-small);
    padding: .7em;
    width: 90%;
    margin: 0 auto;
    background: var(--color-strong-cyan);
    color: var(--color-very-dark-cyan);
    border: none;
    margin-top: 1.2em;
    margin-bottom: .6em;
    font-size: var(--fs-form-inputs);
    font-size: larger;
    font-weight: var(--fw-bold);
    cursor: pointer;

    @media (min-width: 776px) {
        margin-top: 8em;
    }
`;