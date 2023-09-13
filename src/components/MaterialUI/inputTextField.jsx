import { Box, Typography, TextField } from '@mui/material';

export default function InputTextField({
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
      <TextField
        sx={{
          width: '70%',
        }}
        id={name}
        name={name}
        // label="ticker"
        variant="outlined"
        value={formikValues[name]}
        onChange={onInputChange}
        onBlur={onInputBlur}
        error={formikTouched[name] && Boolean(formikErrors[name])}
        helperText={formikTouched[name] && formikErrors[name]}
      />
    </Box>
  );
}
