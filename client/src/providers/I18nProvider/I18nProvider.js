import { useTranslation } from "react-i18next";
import React from "react";
export const i18nContext = React.createContext();
function I18nProvider({ children }) {
  const {i18n } = useTranslation();
    
  return (
    <i18nContext.Provider value={{i18n }}>{children}</i18nContext.Provider>
  );
}

export default I18nProvider;
