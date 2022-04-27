const REQUIRED_FIELD = "don't forget about this field";

export const phoneValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (!value.match(/^([0-9\(\)\/\+ \-]*)$/)) {
      return "Invalid phone number";
    }
    return true;
  },
};

export const passwordValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.length < 8) {
      return `Password must be more 8 symbol`;
    }
    return true;
  },
};

//Invalid login or password. Please try again
//    or click 'Forgot your password?' Link to reset it
