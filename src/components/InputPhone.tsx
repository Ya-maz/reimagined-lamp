import React from "react";
import {useLayoutEffect} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import {Input} from "reactstrap";
import InputMask from "react-input-mask";

import {phoneValidation} from "../utils/validate";
import {useCapsLockDetector} from "./../hooks/useCapsLockDetector";
import type {ILoginFormInput} from "./../types/TabPanelInput";

export const InputPhone = ({
  control,
  errors,
  setError,
  clearErrors,
}: ILoginFormInput) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("phone", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.phone?.type === "manual" && !isCapsLockActive) {
      clearErrors("phone");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <Controller
      control={control}
      name="phone"
      rules={phoneValidation}
      render={({field: {onChange, value}}) => (
        <InputMask
          mask="+7\ 999 999 9999"
          alwaysShowMask
          onChange={onChange}
          // ref={ref}
          //fullWidth
          //aria-label="phone"
          //placeholder={t("form.tab-phone-label")}
          //id="csinput-phone"
          //onChange={onChange}
          value={value}
          // error={!!errors.phone?.message}
        >
          {(inputPros) => (
            <Input
            innerRef={ref}
              {...inputPros}
              // ref={ref}
              type="tel"
              name="login"
              id="login"
              placeholder={t("form.tab-phone-label")}
            />
          )}
        </InputMask>
      )}
    />
  );
};
