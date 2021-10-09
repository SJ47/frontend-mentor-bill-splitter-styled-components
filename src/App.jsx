import React from "react";
import Bill from "./components/bill/Bill";
import Header from "./components/header/Header";
import People from "./components/people/People";
import Result from "./components/result/Result";
import Tip from "./components/tip/Tip";
// import SplitterContainer from "./containers/SplitterContainer";
import { StyledSplitterContainer } from "./containers/SplitterContainer.styled";

function App() {
    return (
        <>
            <Header />
            <StyledSplitterContainer>
                <Bill>Bill</Bill>
                <Tip />
                <People>Number of People</People>
                <Result />
            </StyledSplitterContainer>
        </>
    );
}

export default App;
