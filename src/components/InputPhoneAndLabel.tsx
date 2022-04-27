import React, {useState} from "react";
import {useLayoutEffect} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import {Input, Label} from "reactstrap";
import InputMask from "react-input-mask";

import {phoneValidation} from "../utils/validate";
import {useCapsLockDetector} from "../hooks/useCapsLockDetector";
import type {ILoginFormInput} from "../types/TabPanelInput";
import {WarningAmber} from "../assets/IconSvg/WarningAmber";
import "./../styles/app.scss";
import "./../styles/tabPanelContent.scss";
import theme from "./../styles/theme.module.scss";

export const InputPhoneAndLabel = ({
  control,
  errors,
  setError,
  clearErrors,
}: ILoginFormInput) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("phone", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.phone?.type === "manual" && !isCapsLockActive) {
      clearErrors("phone");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <>
      <Label
        for="login"
        className={`label ${isInputOnFocus ? "on-focus" : "off-focus"}`}
      >
        {t("form.tab-phone-label")}
      </Label>

      <div className="position-relative">
        <Controller
          control={control}
          name="phone"
          rules={phoneValidation}
          render={({field: {onChange, value}}) => (
            <InputMask
              mask="+7\ 999 999 9999"
              alwaysShowMask
              onChange={onChange}
              onFocus={setIsInputOnFocus!.bind(null, true)}
              onBlur={setIsInputOnFocus!.bind(null, false)}
              value={value}
            >
              {(inputPros) => (
                <Input
                  innerRef={ref}
                  className="rounded-0 position-relative"
                  {...inputPros}
                  type="tel"
                  name="login"
                  id="login"
                  placeholder={t("form.tab-phone-label")}
                ></Input>
              )}
            </InputMask>
          )}
        />
        {errors.phone?.message && (
          <div className="position-absolute top-05 right-1">
            <WarningAmber size="14" fill={theme["color-system-error"]} />
          </div>
        )}
      </div>
    </>
  );
};
