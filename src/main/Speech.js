import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

import speechIcon from './image/speech.jpg'
export default function Speech (props) {
  const { speak } = useSpeechSynthesis()
  let voiceOptions = window.speechSynthesis.getVoices();
  return (
    <div
      onClick={() => {
        speak({
          text: props.msg,
           voice:voiceOptions[2]
        })
      }}
      className='speechimg'
    >
      <img className='speechIcon' src={speechIcon} alt='' />
    </div>
  )
}
