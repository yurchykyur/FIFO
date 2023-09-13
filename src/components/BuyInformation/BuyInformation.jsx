import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SelectBroker from 'components/FormUI/SelectBroker';

const INITIAL_FORM_STATE = { broker: '', password: '' };

const validationSchema = yup.object({
  broker: yup.string('Choose the broker').required('Broker is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function BuyInformation() {
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="sm" sx={{ background: '#f3f3be ' }}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
          <ShoppingCartIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
          Купити
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <SelectBroker
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
          />
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
                Символ
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
                id="symbol"
                value={formik.values.symbol}
                // label="Broker"
                name="symbol"
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.symbol && Boolean(formik.errors.symbol)}
                helperText={formik.touched.symbol && formik.errors.symbol}
              >
                <MenuItem value={'Freedom Finance'}>Freedom Finance</MenuItem>
                <MenuItem value={'Interactive Brokers'}>
                  Interactive Brokers
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
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
                Дата
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
                id="date"
                value={formik.values.date}
                // label="Broker"
                name="date"
                margin="normal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              >
                <MenuItem value={'Freedom Finance'}>Freedom Finance</MenuItem>
                <MenuItem value={'Interactive Brokers'}>
                  Interactive Brokers
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

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
                Кількість, шт
              </Typography>
            </Box>

            <TextField
              sx={{
                width: '70%',
              }}
              id="quantity"
              name="quantity"
              // label="quantity"
              margin="normal"
              variant="outlined"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.quantity && Boolean(formik.errors.quantity)}
              helperText={formik.touched.quantity && formik.errors.quantity}
            />
          </Box>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            // disabled={!formik.dirty || !formik.isValid}
          >
            Зберегти
          </Button>
        </form>
      </Box>
    </Container>
  );
}
