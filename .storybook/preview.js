import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";
import React from "react";
import { GlobalStyles } from "../src/styles/GlobalStyles";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Story />
            </>
        </ThemeProvider>
    ),
];
