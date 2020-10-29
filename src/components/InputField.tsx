import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor="username">First name</FormLabel>
      <Input
        {...field}
        value={values.username}
        onChange={handleChange}
        id={field.name}
        placeholder="username"
      />
      <FormLabel htmlFor="password">First name</FormLabel>
      <Input
        {...field}
        type="password"
        value={values.password}
        onChange={handleChange}
        id="password"
        placeholder=""
      />
      <FormErrorMessage></FormErrorMessage>
    </FormControl>
  );
};
