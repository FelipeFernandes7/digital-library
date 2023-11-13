/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as ChakraSelect,
  SelectProps,
} from "@chakra-ui/react";

import { FieldError, UseFormRegister } from "react-hook-form";

export type Option = {
  id: string;
  description: string;
};

type SelectFieldProps = {
  options: Option[];
  error?: FieldError | undefined;
  name?: string;
  label: string;
  register?: UseFormRegister<any>;
} & SelectProps;

export function SelectField({
  options,
  error,
  name,
  label,
  register,
  isReadOnly,
  placeholder = "Selecione",
  ...props
}: SelectFieldProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize={"0.875rem"} color={"primary.main"}>
          {label}
        </FormLabel>
      )}
      {register && name ? (
        <ChakraSelect
          placeholder={placeholder}
          variant={"outline"}
          bg={isReadOnly ? "blackAlpha.50" : "#FFF"}
          errorBorderColor={"secondary.light"}
          isReadOnly={isReadOnly}
          color={"primary.main"}
          fontSize={"0.875rem"}
          {...(label ? { id: name } : {})}
          {...register(name)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.description}
            </option>
          ))}
        </ChakraSelect>
      ) : (
        <ChakraSelect
          placeholder={placeholder}
          variant={"outline"}
          bg={isReadOnly ? "blackAlpha.50" : "#FFF"}
          errorBorderColor={"secondary.light"}
          isReadOnly={isReadOnly}
          color={"primary.main"}
          fontSize={"0.875rem"}
          {...(label ? { id: name } : {})}
          {...props}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.description}
            </option>
          ))}
        </ChakraSelect>
      )}
      {!!error && (
        <FormErrorMessage color={"secondary.light"} fontSize={"0.625rem"}>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
