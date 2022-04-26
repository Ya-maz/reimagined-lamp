import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";

import {CSButton} from "./CustomButton";
import BasicTabs from "./Tabs";
import {LoginFormGroupButton} from "./LoginFormGroupButton";

interface IProps {}
export const LoginForm: FC<IProps> = () => {
  const {t} = useTranslation();
  return (
    <Box
      p={1}
      sx={{
        width: 350,
        height: 450,
        backgroundColor: "common.white",
        paddingBottom: 3,
      }}
    >
      <Container fixed>
        <Typography
          m={3}
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontWeight: "900",
            color: "#212529",
          }}
        >
          {t("form.title")}
        </Typography>
        <BasicTabs />
        <LoginFormGroupButton />
        <CSButton variant="contained" disableRipple color="secondary">
          {t("form.button-signup")}
        </CSButton>
      </Container>
    </Box>
  );
};
