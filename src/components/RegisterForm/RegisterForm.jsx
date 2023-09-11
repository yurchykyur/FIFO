import React from 'react';
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
  Grid,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';

const INITIAL_FORM_STATE = { email: '', password: '', name: '' };

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  name: yup
    .string('Enter your name')
    .min(2)
    .max(50)
    .required('Name is required'),
});

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
          Sign up
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                margin="normal"
                autoComplete="name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                margin="normal"
                autoComplete="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={!formik.dirty || !formik.isValid}
              >
                Sign Up
              </Button>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password? (Not Work)
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to={'/login'} variant="body2">
                  {"Don't have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
