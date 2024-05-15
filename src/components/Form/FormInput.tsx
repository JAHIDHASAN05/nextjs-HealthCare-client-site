import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TFormInputProps = {
  name: string;
  type?: string;
  size: "small" | "medium";
  label?: string;
  id?:string;
  fullWidth?: boolean;
  variant?:"outlined";
};

const FormInput = ({ name, type='text', variant,size='small', label, id, fullWidth=true }:TFormInputProps) => {
  const{ control} = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (     
        <TextField
        {...field}
          fullWidth
          variant={variant}
          size={size}
          type={type}
          label={label}
          id={id}
        />
    
      )}
    />
  );
};

export default FormInput;
