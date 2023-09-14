import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

const tomorrow = dayjs().add(1, 'day');

export default function InputDateField({
  onInputChange,
  onInputBlur,
  formikTouched,
  formikErrors,
  formikValues,
  title,
  name,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        mt: 1,
      }}
    >
      <Box
        sx={{
          width: '30%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography component="p" variant="h6" sx={{}}>
          {title}
        </Typography>
      </Box>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            // label="Dash separator"
            value={formikValues[name]}
            onChange={onInputChange}
            onBlur={onInputBlur}
            format="DD-MM-YYYY"
            defaultValue={tomorrow}
            disableFuture
            slotProps={{
              textField: {
                id: name,
                name: name,

                error: formikTouched[name] && Boolean(formikErrors[name]),
                helperText: formikTouched[name] && formikErrors[name],

                // helperText: 'Please fill this field'
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
