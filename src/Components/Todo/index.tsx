import { useState } from "react"
import PrincipalMenu from "../Menu/PrincipalMenu"


function Todo() {
    const [ start, setStart ] = useState(false)

    function execute() {
        setStart(true)
    }

  return (
    <>
        <h1>Todo!</h1>
        {!start ? <button onClick={execute}>Start</button> : <PrincipalMenu />}
    </>
  )
}

export default Todo