import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'


function Copyright (props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://mui.com/'
        style={{ color: '#268c99b6' }}
      >
        Natalia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// const theme = createTheme()
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export default function Login () {
  const [error,setError] = useState(false)
  function apiMount() {
    // axios.get('http://localhost:8080/')
    axios.get('https://server-v62z.onrender.com/')
    .then(dat=>{
    })
    .catch(err=>{
    })
  }
  apiMount()
  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const userObject = {
      email: data.get('email'),
      password: data.get('password')
    }
    axios
      .post('https://server-v62z.onrender.com/login', userObject)
      // .post('http://localhost:8080/login', userObject)
      .then(res => {
        if(res.data === true){
          setError(res.data)
        }else{
          window.location.replace('/chat')
          
        }
      })
      .catch(error => {
      })
  }
  const link = {
    color: '#268c99b6'
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            validate='true'
            sx={{ mt: 5 }}
          >
            <TextField
            error={error}
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              type='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
            error={error}
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2' style={link}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/' variant='body2' style={link}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}
