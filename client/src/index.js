import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle,I18nProvider } from "./providers";
import i18n from "./i18n/I18n"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<I18nProvider>
    <GlobalStyle>
      <App />
    </GlobalStyle>
</I18nProvider>
);
