import React, { useState } from 'react'
import PrincipalMenu from '../Menu/PrincipalMenu'
import { TaskProps } from '../Task'

function TaskDB({task}: TaskProps) {
  const [ allTasks, setAllTasks ] = useState([])


  return (
      <>
        {/* {!returnMenu ? (
          <>
            <h2>Task create Ok!</h2>
            <button onClick={returnPrincipalMenu}>Return Menu</button>
          </>
        ) : (
          <PrincipalMenu />
        )} */}
        <h1>{}</h1>
      </>
  )
}
