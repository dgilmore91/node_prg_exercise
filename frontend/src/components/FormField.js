import { Component } from "react";
class FormField extends Component {

    render() {
        return (
        <input 
            onChange = {this.props.onChange}
            className = {this.props.errors.length > 0 ? 'error' : ''} 
            placeholder = "Max. 10 characters"
            value = {this.props.value}
        />);
    }
}

export default FormField