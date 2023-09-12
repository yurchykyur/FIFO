import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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

import * as myRoute from 'constants/Routes';

const INITIAL_FORM_STATE = { email: '', password: '' };

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function LoginForm() {
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: { xs: 12, md: 20 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
          Sign in
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={0}>
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
                Sign In
              </Button>
            </Grid>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password? (Not Work)
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to={myRoute.register}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
