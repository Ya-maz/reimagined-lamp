import React from "react";
import {useForm, useFormState, SubmitHandler} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {Button, Form, FormGroup, FormText} from "reactstrap";

import {InputPhoneAndLabel} from "./InputPhoneAndLabel";
import type {ILoginForm} from "../types/TabPanelInput";
import {InputPasswordAndLabel} from "./InputPasswordAndLabel";
import "./../styles/tabPanelContent.scss";

export const TabPanelContentPhone = () => {
  const {t} = useTranslation();

  const {handleSubmit, control, reset, formState, setError, clearErrors} =
    useForm<ILoginForm>({
      mode: "onChange",
    });
  const {errors} = useFormState({control});

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="form-phone">
      <FormGroup className="form-phone-input-group mt-1">
        <InputPhoneAndLabel
          control={control}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />

        <FormText
          className={`text-muted ${
            errors.phone?.message ? "visible" : "invisible"
          }`}
        >
          {errors.phone?.message ? errors.phone?.message : "."}
        </FormText>
      </FormGroup>

      <FormGroup className="form-phone-input-group mt-0">
        <InputPasswordAndLabel
          control={control}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />

        <FormText
          className={`text-muted ${
            errors.password?.message ? "visible" : "invisible"
          }`}
        >
          {errors.password?.message ? errors.password?.message : "."}
        </FormText>
      </FormGroup>
      <Button
        type="submit"
        disabled={!formState.isValid}
        className="w-100 rounded-0"
      >
        {t("form.button-login")}
      </Button>
    </Form>
  );
};

// https://github.com/brian7346/react-hook-form
