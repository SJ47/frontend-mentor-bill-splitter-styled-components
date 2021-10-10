import styled from "styled-components";

export const StyledTipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    width: 85%;
    margin: 0 auto;
`;

export const StyledTipHeader = styled.h4`
    color: var(--color-dark-grayish-cyan);
    margin-left: 1.85em;
    margin-bottom: 1em;
`;

export const StyledTipContent = styled.button`
    flex: 1 1 40%;
    text-align: center;
    border-radius: var(--radius-corner-small);
    padding: .4em 0;
    background: ${({ bg }) => bg || "var(--color-very-dark-cyan)"};
    color: ${({ fg }) => fg || "var(--color-white)"};
    font-size: var(--fs-form-inputs);
    font-weight: var(--fw-bold);
    border: none;

    &:hover{
        cursor: pointer;
    }

    &:focus {
        background: var(--color-strong-cyan);
        color:var(--color-very-dark-cyan);
    }
`;

export const StyledTipCustom = styled.input`
    flex: 1 1 40%;
    border-radius: var(--radius-corner-small);
    background: var(--color-light-grayish-cyan2);
    color: var(--color-dark-grayish-cyan);
    border: none;
    width: 50%;
    font-size: var(--fs-form-inputs);
    font-weight: var(--fw-bold);
    text-align: right;
    padding-right: 0.7em;

    ::placeholder {
        color: var(--color-very-dark-cyan);
        font-weight: var(--fw-bold);
        font-size: var(--fs-form-inputs);
        font-family: var(--ff-primary);
        color: var(--color-dark-grayish-cyan);
    }

    &:hover{
        cursor: text;
    }
`;
