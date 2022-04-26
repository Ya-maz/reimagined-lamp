import React, {FC, useState} from "react";
import {useTranslation} from "react-i18next";

import {LoginFormTabs} from "./LoginFormTabs";
import "./../styles/loginForm.scss";

interface IProps {}
export const LoginForm: FC<IProps> = () => {
  const {t} = useTranslation();
  return (
    <div className="form">
      <div className="container">
        <div className="mx-2 my-3">
          <span className="title font-weight-bold">{t("form.title")}</span>
        </div>
        <LoginFormTabs />
      </div>
    </div>
  );
};
