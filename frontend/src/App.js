import { Component } from 'react';
import './App.css';
import axios from 'axios';
import FormField from './components/FormField'
import Message from './components/Message'

class App extends Component {
  constructor(props) {
    super(props)
    let state = {
      text: '',
      message: '',
      errors: '',
      submitted: false
    }
    let historyState = window.history.state;
    this.state = Object.assign(state, historyState)
  }

  submitForm() {
    const errorMessages = {
      'no_text_provided': 'This text field is required.',
      'text_too_long': 'This text field has a maximum of 10 characters.'
    }
    const formJson = {"text": this.state.text}
    let historyState = formJson
    axios.post('http://localhost:5000/data/form', formJson).then( 
      res => {
        this.setState({
          message: "Form submitted successfully!",
          submitted: true
        })
        historyState.text = ''
      }
    ).catch( 
      error => {
        if(error.response.data){
          this.setState({
            message: errorMessages[error.response.data.error],
            errors: [error.response.data.error]
          })
        }
      }
    ).finally(
      () => {
        window.history.pushState(formJson, 'Form Submitted', 'http://localhost:3000');
      }
    )
  }

  onTextChange(evt) {
    this.setState(
      {
        text: evt.target.value,
        errors: ''
      }
    );
  }

  render() {
    return (
      <div id="root-div">
        <h1>Example Form</h1>
        <div className={this.state.submitted ? 'hidden' : ''}>
          <FormField 
            errors={this.state.errors} 
            value={this.state.text} 
            onChange={this.onTextChange.bind(this)}
          />
          <button onClick={this.submitForm.bind(this)}>Submit</button>
        </div>
        <Message message={this.state.message}/>
      </div>
    )
  }
}

export default App;
