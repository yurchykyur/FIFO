import { Box, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import 'dayjs/locale/en';
// import en from 'date-fns/locale/en';

// dayjs.extend(utc);

console.dir(dayjs);

export default function InputDateField({ formik, title, name }) {
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
            onBlur={formik.onInputBlur}
            format="DD-MM-YYYY"
            disableFuture
            name={name}
            value={formik.values.date}
            onChange={value => formik.setFieldValue('date', value)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}
