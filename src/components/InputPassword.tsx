import React, {useLayoutEffect} from "react";
import {useTranslation} from "react-i18next";
import {Controller} from "react-hook-form";
import {Input} from "reactstrap";

import {passwordValidation} from "./../utils/validate";
import {useCapsLockDetector} from "./../hooks/useCapsLockDetector";
import type {ILoginFormInput} from "./../types/TabPanelInput";

export const InputPassword = ({
  control,
  errors,
  setError,
  clearErrors,
}: ILoginFormInput) => {
  const {ref, isCapsLockActive, setIsCapsLockActive} = useCapsLockDetector();
  const {t} = useTranslation();

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("password", {type: "manual", message: "Caps Lock is on"});
    }
    if (errors.password?.type === "manual" && !isCapsLockActive) {
      clearErrors("password");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <Controller
      control={control}
      name="password"
      rules={passwordValidation}
      render={({field}) => (
        <Input
          innerRef={ref}
          label="password"
          type="password"
          aria-label="password"
          placeholder={t("form.input-password")}
          id="csinput-password"
          onChange={field.onChange}
          value={field.value}
          error={!!errors.password?.message}
        />
      )}
    />
  );
};
