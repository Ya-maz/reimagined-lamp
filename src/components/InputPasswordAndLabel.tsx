import React, {SyntheticEvent, useLayoutEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import {Input, Label} from "reactstrap";

import {passwordValidation} from "../utils/validate";
import {useCapsLockDetector} from "../hooks/useCapsLockDetector";
import type {ILoginFormInput} from "../types/TabPanelInput";
import {IconButton} from "./UI/IconButton/IconButton";
import {Visibility} from "../assets/IconSvg/Visibility";
import {VisibilityOff} from "../assets/IconSvg/VisibilityOff";
import {WarningAmber} from "../assets/IconSvg/WarningAmber";

import "./../styles/tabPanelContent.scss";
import theme from "./../styles/theme.module.scss";

export const InputPasswordAndLabel = ({
  control,
  errors,
  setError,
  clearErrors,
}: ILoginFormInput) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("password", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.password?.type === "manual" && !isCapsLockActive) {
      clearErrors("password");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);
  console.log(isInputOnFocus, isPasswordShown);
  return (
    <>
      <Label
        for="password"
        className={`label ${isInputOnFocus ? "on-focus" : "off-focus"}`}
      >
        {t("form.input-password")}
      </Label>

      <div className="d-flex align-items-center position-relative ">
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({field}) => (
            <Input
              innerRef={ref}
              onFocus={setIsInputOnFocus!.bind(null, true)}
              onBlur={setIsInputOnFocus!.bind(null, false)}
              className="rounded-0 input-height"
              label="password"
              type={isPasswordShown ? "text" : "password"}
              aria-label="password"
              placeholder={t("form.input-password")}
              id="input-password"
              onChange={field.onChange}
              value={field.value}
              error={!!errors.password?.message}
            />
          )}
        />
        {!isCapsLockActive && (
          <div
            className={`position-absolute right-1 ${
              isInputOnFocus ? "on-focus" : "off-focus"
            }`}
          >
            <IconButton onClick={togglePasswordVisiblity}>
              {isPasswordShown ? (
                <Visibility size="14" />
              ) : (
                <VisibilityOff size="14" />
              )}
            </IconButton>
          </div>
        )}

        {isCapsLockActive && (
          <div className="position-absolute right-1">
            <WarningAmber size="14" fill={theme["color-system-error"]} />
          </div>
        )}
      </div>
    </>
  );
};
