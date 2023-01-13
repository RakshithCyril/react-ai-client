import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/" style={{color:'#268c99b6'}}>
        Natalia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

export default function SignUp() {
  const [formError,setFormError] = useState(false)
  const [error,setError] = useState('')
  const [errormsg,setErrormsg] = useState('')
  function apiMount() {
    // axios.get('http://localhost:8080/')
    axios.get('https://server-v62z.onrender.com/')
    .then(dat=>{
    })
    .catch(err=>{
    })
  }
  apiMount()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');
    const userObject = {
      fname: removeExtraSpace(data.get('firstName')),
      lname:removeExtraSpace(data.get('lastName')),
      email: removeExtraSpace(data.get('email')),
      password: removeExtraSpace(data.get('password')),
    }
    axios
    
      .post('https://server-v62z.onrender.com/signup', userObject)
      // .post('http://localhost:8080/signup', userObject)
      .then(res => {
        if(res.data === true){
          setFormError(true)
          setError('error')
          setErrormsg('User already exists !')
        }else{
          window.location.replace('/chat')
        }
      })
      .catch(error => {
        
      })
  };
  const link = {
    color:'#268c99b6',
  }
 
  return (
    
    <ThemeProvider theme={darkTheme}>
      
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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Alert variant="filled" severity={error} sx={{ mt: 3 }}>
  {errormsg}
</Alert>
          <Box component="form" validate="true" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={formError}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={formError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type='email'
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={formError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={formError}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/login'} variant="body2" style={link} >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}


