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

export const StyledTipContent = styled.div`
    flex: 1 1 40%;
    text-align: center;
    border-radius: var(--radius-corner-small);
    padding: .3em;
    background: ${({ bg }) => bg || "var(--color-very-dark-cyan)"};
    color: ${({ fg }) => fg || "var(--color-white)"};
    font-size: var(--fs-form-inputs);
    font-weight: var(--fw-bold);
`;