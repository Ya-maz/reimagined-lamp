import React, {FC} from "react";
import { useTranslation } from "react-i18next";

import "./LoginForm.scss"

interface IProps {}
export const LoginForm: FC<IProps> = () => {
  const {t} = useTranslation();
  return (
    <div className="form">
      <div className="container">
        <span className="title">{t("form.title")}</span>
      </div>
    </div>
  );
};
