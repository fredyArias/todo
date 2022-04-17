import React, {useState} from 'react'
import Task, {TaskType} from '../Task'

function CreateTaskMenu() {
    const [ task, setTask ] = useState<TaskType>({title: '', description: '', deadLine: new Date(), status:'Pending'})
    const [ complete, setComplete ] = useState(false)


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      setTask({...task, [event.target.name]: event.target.value})
    }
    
    function saveDates() {
        setComplete(true)
    }

    if(complete) {
        return <Task task={task} />
    }

  return (
    <div className='container'>
      <section>
        <h1>Create Task</h1>
        <label htmlFor="title"><b>Enter title:</b></label>
        <br />
        <input type="text" id="title" onChange={handleChange} name='title' value={task.title}/>
        <br />
        <label htmlFor="description"><b>Enter description:</b></label>
        <br />
        <input type="text" id="description" onChange={handleChange} name='description' value={task.description}/>
        <br />
        <button onClick={saveDates}>Save</button>
      </section>
    </div>
  )
}

export default CreateTaskMenu