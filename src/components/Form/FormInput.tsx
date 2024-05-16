import { SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TFormInputProps = {
  name: string ;
  type?: string;
  size: "small" | "medium";
  label?: string;
  id?:string;
  fullWidth?: boolean;
  variant?:"outlined";
  sx?:SxProps;
  placeholder?: string;
  required?:boolean
};

const FormInput = ({ name, type='text', required=false,placeholder, sx,variant,size='small', label, id, fullWidth=true }:TFormInputProps) => {
  const{ control} = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field , fieldState:{error} }) => (     
        <TextField
        sx={{...sx}}
        {...field}
          placeholder={placeholder}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          type={type}
          label={label}
          id={id}
          error={!!error?.message}
          helperText= {error?.message}
          required={required}
        />
    
      )}
    />
  );
};

export default FormInput;
