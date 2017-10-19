import React from "react";
import PropTypes from "prop-types";
import { Route, Link, Switch } from "react-router-dom";
import "../public/styles/screen.scss";
import { t } from "i18next";

const Screen = ({ width, height }) => (
  <div id="screen">
    <ul>
      <li className="text">
        {t("screen:width")}: {width}
      </li>
      <li className="text">
        {t("screen:height")}: {height}
      </li>
      <Switch>
        <Route
          path="/dog"
          render={() => (
            <div>
              <img
                alt={t("global:cat")}
                src="/assets/images/puppy.jpg"
                style={{ height: 200 }}
              />
              <ul>
                <li>
                  <Link to="/cat">{t("global:cat")}</Link>
                </li>
                <li>
                  <Link to="/bad-link">{t("global:bad-link")}</Link>
                </li>
              </ul>
            </div>
          )}
        />
        <Route
          path="/cat"
          render={() => (
            <div>
              <img
                alt={t("global:dog")}
                src={require("../public/images/kitten.jpg")}
                style={{ height: 200 }}
              />
              <ul>
                <li>
                  <Link to="/dog">{t("global:dog")}</Link>
                </li>
                <li>
                  <Link to="/bad-link">{t("global:bad-link")}</Link>
                </li>
              </ul>
            </div>
          )}
        />
        <Route
          render={() => (
            <div>
              <ul>
                <li>
                  <Link to="/cat">{t("global:cat")}</Link>
                </li>
                <li>
                  <Link to="/dog">{t("global:dog")}</Link>
                </li>
              </ul>
            </div>
          )}
        />
      </Switch>
    </ul>
  </div>
);

Screen.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Screen;
