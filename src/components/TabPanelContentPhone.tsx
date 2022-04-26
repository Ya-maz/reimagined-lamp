import React from "react";
import {useForm, useFormState, SubmitHandler} from "react-hook-form";


interface ILogInForm {
  phone: string;
  password: string;
}

export const TabPanelContentPhone = () => {
  const {t} = useTranslation();

  const {handleSubmit, control, reset, formState, setError, clearErrors} =
    useForm<ILogInForm>({
      mode: "onChange",
    });
  const {errors} = useFormState({control});

  const onSubmit: SubmitHandler<ILogInForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{width: "100%"}} hiddenLabel variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="phone">
          {t("form.tab-phone-label")}
        </CSLabel>
        <InputPhone
          control={control}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />
      </FormControl>
      <FormControl sx={{width: "100%"}} variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="password">
          {t("form.input-password")}
        </CSLabel>
        <InputPassword
          control={control}
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
        />
      </FormControl>
      <CSButton
        disableRipple
        type="submit"
        disabled={!formState.isValid}
        variant="contained"
      >
        {t("form.button-login")}
      </CSButton>
    </form>
  );
};

// https://github.com/brian7346/react-hook-form
