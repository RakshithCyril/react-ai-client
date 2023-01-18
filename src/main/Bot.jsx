import React from "react";
import Speech from './Speech'
class Bot extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        botout: []
      }
    }
    componentDidMount () {
      setTimeout(() => {
        this.setState({ botout: [...this.state.botout, this.props.test] })
      }, 5000)
      this.scrollToBottom()
    }
    messagesEndRef = React.createRef()
  
    componentDidUpdate () {
      this.scrollToBottom()
    }
    scrollToBottom = () => {
      this.messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  
    render () {
      const botReply = this.state.botout.slice(-1)[0]
      if (!botReply) {
        console.log('error')
      } else {
        return (
          <div className='bot'>
            <p>{botReply}</p>
            <Speech msg={botReply} />
            <div ref={this.messagesEndRef} />
          </div>
        )
      }
    }
  }

  export default Bot