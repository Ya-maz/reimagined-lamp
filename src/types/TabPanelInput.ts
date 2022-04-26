import type {
  Control,
  FieldError,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";

export interface ILoginForm {
  phone: string;
  password: string;
}

export interface ILoginFormInput {
  control: Control<ILoginForm>;
  errors: {
    phone?: FieldError | undefined;
    password?: FieldError | undefined;
  };
  setError: UseFormSetError<ILoginForm>;
  clearErrors: UseFormClearErrors<ILoginForm>;
}
