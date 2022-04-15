import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AppContainer } from '@components'
import { useAxios } from '@hooks'
import { Alert } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { useDispatch } from 'react-redux'
import { changeUser } from 'store/Auth/authSlice'

export const SignIn: React.FC = () => {
  const dispatch = useDispatch()
  const { sendData, error, response, loading } = useAxios()

  React.useEffect(() => {
    response && response.data.user && dispatch(changeUser(response.data.user))
  }, [response])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Endereço email invalido')
        .required('Preenchimento obrigatório!!!'),
      password: Yup.string().required('Preenchimento obrigatório!!!'),
    }),
    onSubmit: (values) => {
      sendData({
        method: 'POST',
        url: '/auth',
        data: {
          email: values.email,
          password: values.password,
        },
      })
    },
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
          {error && <Alert severity="error">Erro de autenticação</Alert>}

          <form onSubmit={formik.handleSubmit}>
            <TextField
              margin="normal"
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
            <LoadingButton
              loading={loading}
              loadingPosition="end"
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Entrar
            </LoadingButton>
          </form>
        </Box>
      </Container>
    </AppContainer>
  )
}
