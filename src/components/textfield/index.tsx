/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  FormErrorMessage,
  InputProps,
} from "@chakra-ui/react";

import { FieldError, UseFormRegister } from "react-hook-form";

type TextFieldProps = {
  label?: string;
  error?: FieldError | undefined;
  name?: string;
  register?: UseFormRegister<any>;
} & InputProps;

export function TextField({
  name,
  label,
  register,
  error,
  type,
  isReadOnly,
  placeholder,
  ...rest
}: TextFieldProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel color={"primary.main"} fontSize={"0.875rem"} htmlFor={name}>
          {label}
        </FormLabel>
      )}
      {register && name ? (
        <ChakraInput
          p={"10px"}
          border={"2px solid #232323"}
          variant={"unstyled"}
          placeholder={placeholder}
          outline={"none"}
          bg={isReadOnly ? "blackAlpha.50" : "transparent"}
          isReadOnly={isReadOnly}
          color={"#fff"}
          borderRadius={"8px"}
          errorBorderColor={"#dc2626"}
          fontSize={"0.875rem"}
          type={type}
          {...(label ? { id: name } : {})}
          {...register(name, type === "number" ? { valueAsNumber: true } : {})}
          {...rest}
        />
      ) : (
        <ChakraInput
          p={"10px"}
          variant={"unstyled"}
          border={"2px solid #232323"}
          placeholder={placeholder}
          bg={isReadOnly ? "blackAlpha.50" : "#FFF"}
          isReadOnly={isReadOnly}
          errorBorderColor={"#dc2626"}
          color={"primary.main"}
          borderRadius={"8px"}
          fontSize={"0.875rem"}
          type={type}
          {...(label ? { id: name } : {})}
          {...rest}
        />
      )}

      {!!error && (
        <FormErrorMessage color={"#dc2626"} fontSize={"0.625rem"}>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
