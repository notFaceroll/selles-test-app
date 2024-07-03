import React from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
