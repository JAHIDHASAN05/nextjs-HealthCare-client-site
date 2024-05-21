import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITimePickerProps {
  name: string;
  size?: "small" | "medium";
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  label?:string
}
const FormTimePicker = ({
  name,
  size = "small",
  required,
  fullWidth = true,
  sx,
  label
}: ITimePickerProps) => {

    const {control}=useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
     
      render={({field:{onChange, value, ...field}}) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker              
              timezone="system"
              label={label}
              onChange={(time)=> onChange(time)}
              value={value || Date.now()}

              slotProps={{
                textField :{
                    required :required,
                    size:size,
                    sx:{
                        ...sx,
                    },
                    variant :'outlined',
                    fullWidth:fullWidth

                }
              }}
             
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default FormTimePicker;
