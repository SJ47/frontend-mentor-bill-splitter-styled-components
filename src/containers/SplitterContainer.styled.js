import styled from "styled-components";

export const StyledSplitterContainer = styled.div`
    background: var(--color-white);
    border-top-left-radius: var(--radius-corner);
    border-top-right-radius: var(--radius-corner);
    display: grid;
    grid-template-columns: 1fr;

    p {
        display: inline;
    }
   

    @media (min-width: 776px) {
        
        grid-template-columns: 1.2fr 1fr;
        grid-template-rows: .5fr .1fr 1fr 90px;
        border-radius: var(--radius-corner);
        margin: 3em;
        margin-top: 0em;
        padding: 1em;
    }
`;