import { useFormik } from 'formik';

import {
  Button,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SelectBroker from 'components/MaterialUI/SelectBroker';
import { validationSchema } from './validationSchema';
import InputTextField from 'components/MaterialUI/inputTextField';
import InputDateField from 'components/MaterialUI/InputDateField';

const INITIAL_FORM_STATE = {
  broker: '',
  date: '',
  ticker: '',
  quantity: '',
  cost: '',
  brokerСommission: '',
  identifier: '',
  description: '',
  stockExchange: '',
  type: '',
};

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
          Інформація про куплений актив
        </Typography>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(e.target.elements[2].value);
            formik.handleSubmit(e);
          }}
          style={{ width: '100%' }}
        >
          <SelectBroker
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
          />

          <InputDateField
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Дата купівлі*'}
            name={'date'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Символ*'}
            name={'ticker'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Кількість*, шт.'}
            name={'quantity'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Вартість*, $'}
            name={'cost'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Комісія брокера*, $'}
            name={'brokerСommission'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Ідентифікатор'}
            name={'identifier'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Опис тікера'}
            name={'description'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Фондова біржа'}
            name={'stockExchange'}
          />

          <InputTextField
            onInputChange={formik.handleChange}
            onInputBlur={formik.handleBlur}
            formikTouched={formik.touched}
            formikErrors={formik.errors}
            formikValues={formik.values}
            title={'Тип'}
            name={'type'}
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={!formik.dirty || !formik.isValid}
            sx={{ mt: 3, width: '75%' }}
          >
            Зберегти
          </Button>
        </form>
      </Box>
    </Container>
  );
}
