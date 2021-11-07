import { Component } from "react";

class Message extends Component {
    render(){
        return (<h4 id="message">{this.props.message}</h4>)
    }
}

export default Message