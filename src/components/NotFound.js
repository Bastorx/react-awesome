import React from "react";
import { Link } from "react-router-dom";
import { t } from "i18next";

const NotFound = () => {
  return (
    <div>
      <h1>{t("global:not-found.title")}</h1>
      <p>{t("global:not-found.description")}</p>
      <Link to="/">{t("global:home")}</Link>
    </div>
  );
};

export default NotFound;
