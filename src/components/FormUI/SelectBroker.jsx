import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';

export default function SelectBroker({
  onInputChange,
  onInputBlur,
  formikTouched,
  formikErrors,
  formikValues,
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
          justifyContent: 'center',
        }}
      >
        <Typography component="p" variant="h6" sx={{}}>
          Брокер
        </Typography>
      </Box>
      <FormControl
        sx={{
          width: '70%',
        }}
      >
        {/* <InputLabel id="demo-simple-select-label"></InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="broker"
          value={formikValues.broker}
          // label="Broker"
          name="broker"
          margin="normal"
          onChange={onInputChange}
          onBlur={onInputBlur}
          error={formikTouched.broker && Boolean(formikErrors.broker)}
          helperText={formikTouched.broker && formikErrors.broker}
        >
          <MenuItem value={'Freedom Finance'}>Freedom Finance</MenuItem>
          <MenuItem value={'Interactive Brokers'}>Interactive Brokers</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
