import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

import speechIcon from './image/speech.jpg'
import mute from './image/silent.png'
export default function Speech (props) {
  const [img, setImg] = useState(speechIcon)
  const onEnd = () => {
    setImg(speechIcon)
  }
  const { speak, cancel } = useSpeechSynthesis({onEnd})
  let voiceOptions = window.speechSynthesis.getVoices()
  function test () {
    if (img === mute) {
      setImg(speechIcon)
      cancel()
    } else {
      speak({
        text: props.msg,
        voice: voiceOptions[2]
      })
      setImg(mute)
    }
  }
  return (
    <div onClick={test} className='speechimg'>
      <img className='speechIcon' src={img} alt='' />
    </div>
  )
}
