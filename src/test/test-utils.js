import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// import "mutationobserver-shim";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppRenderer = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

const customRenderer = (ui, options) => {
  return render(ui, {
    wrapper: AppRenderer,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRenderer as render };
