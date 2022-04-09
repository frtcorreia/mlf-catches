import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { AppContainer } from '@components'

export const SignIn: React.FC = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Insira um email valido')
      .required('Insira o seu email'),
    password: yup.string().required('Insira a sua password'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  })

  return (
    <AppContainer>
      <Container
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: 'white', padding: '25px' }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={'https://mlf.portugalbasstrail.pt/images/logo.png'}
            sx={{ width: 80, height: 80 }}
          />
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              style={{ marginBottom: '30px' }}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Entrar
            </Button>
          </form>
        </Box>
      </Container>
    </AppContainer>
  )
}
