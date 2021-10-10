import styled from "styled-components";

export const StyledBillContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        margin-bottom: 0;
        padding-bottom: 0;
        height: 4em;
    }

    span:before {
     position: absolute;
    content:"$";
    color: var(--color-dark-grayish-cyan2);
    font-size: var(--fs-form-inputs);
    font-family: var(--ff-primary);
    padding-top: .2em;
    padding-left: 2em;
    opacity: .6;
 }
`;

export const StyledBillHeader = styled.h4`
    color: var(--color-dark-grayish-cyan);
    margin-left: 1.85em;
    margin-bottom: .4em;
    padding-top: .8em;
`;

export const StyledInput = styled.input`
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2em;
    background: var(--color-light-grayish-cyan2);
    height: 2em;
    border: none;
    border-radius: var(--radius-corner-small);
    font-size: var(--fs-form-inputs);
    
    color: var(--color-very-dark-cyan);
    font-weight: var(--fw-bold);
    text-align: right;
    padding-right: 0.7em;
    font-family: var(--ff-primary);
    
    
    ::placeholder {
        color: var(--color-very-dark-cyan);
        font-weight: var(--fw-bold);
        text-align: right;
        font-family: var(--ff-primary);
    }


`;