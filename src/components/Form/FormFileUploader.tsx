import * as React from 'react';
import { SxProps, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useFormContext } from 'react-hook-form';
import { useFormControl } from '@mui/material';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type TProps={
  name :string;
  label:string;
  sx?:SxProps;
}

export default function FormFileUploader({name, label,sx}:TProps) {

  const {control}= useFormContext()
  return (
   <Controller
   name={name}
   control={control}
   render={({field: { value, onChange, ...field}})=>{
    return  <Button
    sx={{...sx}}
    component="label"
    role={undefined}
    variant="outlined"
    tabIndex={-1}
    startIcon={<CloudUploadIcon />}
  >
    {label || "Upload file"}
    <input
              {...field}
              type={name}
              value={value?.fileName}
              onChange={(e) => onChange((e.target as HTMLInputElement).files?.[0])}
              style={{display:'none'}}              
            />
  </Button>
   }}
   >

   </Controller>
  );
}
