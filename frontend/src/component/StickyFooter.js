
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://chatapp-354-project.herokuapp.com/">
        App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  color:'f2f2f2',
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '30vh',
    fontSize: 20,
    color: 'ffffff',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    fontSize: 20,
  },
  footer: {
    padding: 30,
    textAlign:  'center',
    marginTop: 'auto',
    backgroundColor:182848,
    fontSize: 20,
    color: 'ffffff',


  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <ThemeProvider theme={theme}>
            <Typography variant="h3">Chat App - IT354 - Final Project - Created by Alfrin Saldanha</Typography>
        </ThemeProvider>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}