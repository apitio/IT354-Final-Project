import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import StickyFooter from './component/StickyFooter';
import Cards from './cards';
import Header from './component/Header'


import './App.css'
import Chat from './Chat'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
        <Typography component="Cards" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <Cards />
        {/*<Chat /> */}
        <StickyFooter />
        </Container>

      
      </div>

   
    )
  }
}

export default App
