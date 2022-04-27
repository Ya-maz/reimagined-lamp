import React, {FC, useState} from "react";
import {useTranslation} from "react-i18next";

import { LoginFormTabs } from "./LoginFormTabs";
import { Button } from "./UI/Button/Button";
import {ButtonAsLink} from "./UI/ButtonAsLink/ButtonAsLink"
import "./../styles/loginForm.scss";


interface IProps {}
export const LoginForm: FC<IProps> = () => {
  const {t} = useTranslation();
  return (
    <div className="form">
      <div className="container">
        <div className="mx-2 my-2">
          <span className="title font-weight-bold">{t("form.title")}</span>
        </div>
        <LoginFormTabs />
        <div className="d-flex justify-content-between my-2">
          <ButtonAsLink onClick={() => {}} title={t("form.button-demo")} />
          <ButtonAsLink onClick={() => {}} title={t("form.button-forgot")}/>
        </div>
        <Button variant="secondary" size="lg" title={t("form.button-signup")} />
      </div>
    </div>
  );
};
