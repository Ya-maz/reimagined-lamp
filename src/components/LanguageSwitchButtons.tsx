import React from "react";
import {Button, ButtonGroup} from "reactstrap";
import {useTranslation} from "react-i18next";

export const LanguageSwitch = () => {
  const {i18n} = useTranslation();

  const switchLngToRU = () => {
    i18n.changeLanguage("ru");
  };
  const switchLngToEN = () => {
    i18n.changeLanguage("en");
  };
  const isActiveRu = i18n.language === "ru" ? true : false;
  const isActiveEn = i18n.language === "en" ? true : false;

  return (
    <ButtonGroup>
      <Button color="warning" disabled={isActiveRu} onClick={switchLngToRU}>
        RU
      </Button>
      <Button color="warning" disabled={isActiveEn} onClick={switchLngToEN}>
        EN
      </Button>
    </ButtonGroup>
  );
};
