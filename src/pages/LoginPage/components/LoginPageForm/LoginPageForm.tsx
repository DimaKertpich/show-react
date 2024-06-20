import { FC } from "react";
import { Field, Form, useFormikContext } from "formik";
import { Button, Stack } from "@mui/material";
import { LoginPageFormValues } from "../../LoginPageProps";
import TextFormField from "../../../../shared/components/TextFormField";

const LoginPageForm: FC = () => {
  const { values, dirty } = useFormikContext<LoginPageFormValues>();

  console.log(values);

  return (
    <Form>
      <Stack justifyContent="center" alignItems="center">
        <Field
          name="email"
          sx={{ mt: 0, width: "300px" }}
          component={TextFormField}
          placeholder="Email"
          hiddenLabel
        />
        <Field
          name="password"
          sx={{ mt: 0, width: "300px" }}
          component={TextFormField}
          placeholder="Password"
          hiddenLabel
        />
        <Button type="submit" disabled={!dirty}>
          Sign In
        </Button>
      </Stack>
    </Form>
  );
};
export default LoginPageForm;
