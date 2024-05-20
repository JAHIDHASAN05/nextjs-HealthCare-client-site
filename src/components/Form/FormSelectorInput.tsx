import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TFormInputProps = {
  name: string;
  type?: string;
  size: "small" | "medium";
  label?: string;
  id?: string;
  fullWidth?: boolean;
  variant?: "outlined";
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  items: string[];
};

const FormSelectorInput = ({
  items,
  name,
  type = "text",
  required = false,
  placeholder,
  sx,
  variant,
  size = "small",
  label,
  id,
  fullWidth = true,
}: TFormInputProps) => {
  const { control, formState } = useFormContext();

  const isError = formState.errors[name] !== undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{ ...sx }}
          {...field}
          placeholder={placeholder}
          fullWidth={fullWidth}
          variant={variant}
          size={size}
          select
          type={type}
          label={label}
          id={id}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
          required={required}
        >
          {items.map((name) =>        
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          )}



        </TextField>
      )}
    />
  );
};

export default FormSelectorInput;
