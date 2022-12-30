import React from 'react'
import './CSS/index.css'
import microphone from './image/icons8-microphone-30.png'
import send from './image/icons8-paper-plane-64.png'
import typing from './image/typing-dots.gif'
import axios from 'axios'

export default class Chat extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userInput: [],
      botInput: [],
      gif: null,
      click: false
    }
    this.userInput = this.userInput.bind(this)
  }
  userInput (e) {
    const val = e.target[1].value
    if (!val) {
      e.preventDefault()
    } else {
      this.setState({ gif: typing })
      setTimeout(()=>{
        this.setState({ gif: null })
      },2000)
      this.setState({ userInput: [...this.state.userInput, val] })
      const userObject = {
        userinput: val
      }
      axios
      .post('http://localhost:8080/api', userObject)
      .then(res => {
        this.setState({ botInput: [...this.state.botInput, res.data] })
        console.log(this.state.botInput)
      })
      .catch(error => {
        console.log(error)
      })
      e.preventDefault()
    }
  }

  render () {
    const user = this.state.userInput.map((data, i) => {
      return (
        <div>
          <div className='user' key={i}>
            <p key={i}>{data}</p>
          </div>
           <Bot test={this.state.botInput.slice(-1)[0] } />
           {document.querySelector('.test').value = ""}
        </div>
      )
    })
    return (
      <div className='container'>
        <h1>ATOM</h1>
        <div className='bot' style={{backgroundColor:"white"}}>
          <p>
            Hello, I'm ATOM, your AI assistant, and I'm here to answer any
            queries you might have.
          </p>
        </div>

        {user}

        <img className='typing' src={this.state.gif} alt='' />
        <div className='app'>
          <form onSubmit={this.userInput} >
            <button type='none'>
              <img src={microphone} alt='' />
            </button>
            <input type='text' className='test' name='text' placeholder='Type something.....' />
            <button type='submit'>
              <img src={send} alt='' />
            </button>
          </form>
        </div>
      </div>
    )
  }
}

class Bot extends React.Component {
  constructor(props){
    super(props)
    this.state={
      botout:[]
    }
  }
componentDidMount(){
  setTimeout(()=>{
    this.setState({ botout: [...this.state.botout, this.props.test] })
    
    
  },2000)
  
}
  render () {
    const botReply = this.state.botout.slice(-1)[0] 
    if(!botReply){
      console.log('error')
    }else{
      return (
        <div className='bot '>
          <p>{botReply}</p>
        </div>
      )
    }
  
  }
}
