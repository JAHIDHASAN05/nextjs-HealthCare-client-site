import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePickerProps {
  name: string;
  size?: "small" | "medium";
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}
const FormDatePicker = ({
  name,
  size = "small",
  required,
  fullWidth = true,
  sx,
}: IDatePickerProps) => {

    const {control}=useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
     
      render={({field:{onChange, value, ...field}}) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              timezone="system"
              label="Uncontrolled picker"
              onChange={(date)=> onChange(date)}
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

export default FormDatePicker;
