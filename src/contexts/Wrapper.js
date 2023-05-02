import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { useTranslation } from "react-i18next";

export const Context = React.createContext();

const local = "en";

const Wrapper = (props) => {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(local);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    i18n.changeLanguage(newLocale);
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale}>{props.children}</IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
