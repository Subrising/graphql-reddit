import React from "react";
import { Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";
import { Wrapper } from "../components/Wrapper";

interface registerProps {}

function validateName(value) {
  let error;
  if (!value) {
    error = "Name is required";
  } else if (value !== "Naruto") {
    error = "Jeez! You're not a fan 😱";
  }
  return error;
}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="username">First name</FormLabel>
              <Input
                value={values.username}
                onChange={handleChange}
                id="username"
                placeholder="username"
              />
              <FormLabel htmlFor="password">First name</FormLabel>
              <Input
                type="password"
                value={values.password}
                onChange={handleChange}
                id="password"
                placeholder=""
              />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
