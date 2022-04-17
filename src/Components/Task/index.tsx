import { useState } from "react"

type TaskStatus = 'Pending' | 'Done' | 'Bloked'

export type TaskType = {
  title: string,
  description: string, 
  deadLine: Date, 
  status: TaskStatus,
}

export interface TaskProps {
    task: TaskType          
}

interface TaskDB {
  allTasks: [TaskProps]
}

export function Task({task}: TaskProps) {

  const [ allTasks, setAllTasks ] = useState([])

  function a() {
    setAllTasks(allTasks)
  }

  return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.deadLine.getFullYear()}</p>
        <p>{task.status}</p>
      </div>
  )
}

export default Task