import styled from "styled-components";

export const StyledPeopleContainer = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        margin-bottom: 0;
        padding-bottom: 0;
        height: 4em;
    }

    i:before {
        position: relative;
        font-family: "Font Awesome 5 Free"; content: "\f007";
        color: var(--color-dark-grayish-cyan2);
        padding-top: .2em;
        opacity: .7;
        top: 15px;
        right: -40px;
    }

    @media (min-width: 776px) {
        grid-column-start: 1;
        grid-row-start: 4;
        /* background: orange; */
        margin-bottom: 2em;
        /* padding: 0; */
    }
`;

export const StyledPeopleHeader = styled.h4`
    color: var(--color-dark-grayish-cyan);
    margin-left: 1.85em;
    margin-bottom: .4em;
    margin-top: 2em;

    @media (min-width: 776px) {
        margin-top: 0;
    }
`;

export const StyledInput = styled.input`
    width: 85%;
    margin: 0 auto;
    margin-left: .5em;
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
