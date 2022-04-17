import React from 'react'

interface MessageProps {
    message: string
}

function Message(props: MessageProps) {
  return (
    <h2>{props}</h2>
  )
}

export default Message