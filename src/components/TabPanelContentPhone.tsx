import React from "react";
import {useForm, useFormState, SubmitHandler} from "react-hook-form";
import {useTranslation} from "react-i18next";
import { Button, Form, FormGroup, FormText, Label } from "reactstrap";

import { InputPhone } from "./InputPhone";
import type {ILoginForm} from "../types/TabPanelInput"
import { InputPassword } from "./InputPassword";
import "./../styles/tabPanelContent.scss"

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
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-phone">
        <FormGroup className="form-phone-input-group">
          <Label for="login" className="label">{t("form.tab-phone-label")}</Label>

          <InputPhone
            control={control}
            errors={errors}
            setError={setError}
            clearErrors={clearErrors}
          />

          <FormText>{errors.phone?.message}</FormText>
        </FormGroup>
        <FormGroup className="form-phone-input-group">
          <Label for="password" className="label">{t("form.input-password")}</Label>

          <InputPassword
          control={control}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />
          
          <FormText error>{errors.password?.message}</FormText>
          {/* <Input type="password" name="password" id="password" placeholder="password placeholder" /> */}
        </FormGroup>
        <Button type="submit" disabled={!formState.isValid} color="primary" className="w-100">
        {t("form.button-login")}
      </Button>
      </Form>


    </>
  );
};

// https://github.com/brian7346/react-hook-form
