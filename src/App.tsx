import React from "react";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import TodoProvider from "./store/todo-provider";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
        <GlobalStyles />
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
