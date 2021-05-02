import React, { Component } from 'react'
import PropTypes, { string } from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";


import './App.css'

const axios = require('axios').default;

const styles = theme => ({
  root: {
    fontSize: 200,
      flexWrap: 'wrap',
  }
});


function acceptResults(data) {
  alert(JSON.stringify(data));
}

function performFetch() {
  let headers = new Headers();
  var script_url = "https://chatapp-354-project.herokuapp.com/asd/1/2/3"
  headers.append("Access-Control-Allow-Origin", "*")

  fetch(script_url, {
      mode: 'cors',
      method: 'GET',
      headers: headers
  })
  .then(response => response.json())
  .then(json => acceptResults(json))
  .catch(error => console.log('Authorization failed : ' + error.message));
}


function performURL(scriptName) {
  alert("Please enter the script in the folowing format: scriptname-mm-dd-cc");
  console.log("script: ",scriptName)
  var URL = "https://chatapp-354-project.herokuapp.com/"
  
  var split_string = scriptName.split("-");

  console.log(split_string);

  var script_URL = URL + split_string[1] + "/" + split_string[2] + "/" + split_string[3] + "/" + split_string[4];

  console.log(script_URL);

  axios.get(script_URL)
  .then(function (response) {
    console.log(response.data);
    acceptResults(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });


}


class ChatInput extends Component {

  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form
          action="."
          onSubmit={e => {
            e.preventDefault()
            if (this.state.message.includes("script")){
              
              const script_text = "-invoked script"


              let scriptName = this.state.message;

              performURL(scriptName)


              return this.props.onSubmitMessage(script_text)
            } 

            this.props.onSubmitMessage(this.state.message)
            this.setState({ message: '' })
          }}
        >
          
          <TextField id="standard-basic"  style={{margin: 20, width:400}} color="secondary" label="Enter Message" value={this.state.message} onChange={e => this.setState({ message: e.target.value })}/>
          <button type="submit" class="btn btn-primary" style={{margin: 10}}>Send</button>
        </form>
      </div>
    )
  }
}

//export default ChatInput
export default withStyles(styles, { withTheme: true })(ChatInput);