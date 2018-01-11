import React from "react";

import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import combinedReducers from "../reducers";
import { WINDOW_RESIZE } from "../actions/action-types";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import bundles from "../translations";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Load i18next
const loadI18n = new Promise(resolve => {
  i18n.use(i18nextBrowserLanguageDetector).init(
    {
      ns: ["global"],
      defaultNS: "global",
      fallbackLng: "en",
      resStore: {},
      lngWhitelist: ["en", "fr"],
      supportedLngs: {
        en: ["global"],
        fr: ["global"]
      }
    },
    err => {
      if (err) {
        console.error(err);
      }
      return resolve();
    }
  );
});
Object.keys(bundles).forEach(bundleName => {
  Object.keys(bundles[bundleName]).forEach(locale => {
    i18n.addResourceBundle(locale, bundleName, bundles[bundleName][locale]);
  });
});

// Create store
const composed =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk, promiseMiddleware()))
    : compose(applyMiddleware(thunk, promiseMiddleware()));

const store = createStore(combinedReducers, composed);
const persistor = persistStore(store, null, () => {
  store.getState();
});

// Store screen size
window.addEventListener("resize", () => {
  store.dispatch({
    type: WINDOW_RESIZE,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });
});

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => <h1>{i18n.t("global:hello-world")}</h1>}
          />
        </Switch>
      </Router>
    </I18nextProvider>
  </Provider>
);

export const AppPromise = async () => {
  await loadI18n;
};

export default App;
