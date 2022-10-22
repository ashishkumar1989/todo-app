import { useState } from 'react';
import Task from './Task'
import './ToDo.css'

function ToDo() {

  const [tasks,setTasks] = useState([]);

  const deleteTask= (id) =>{
      console.log("Task deleted: "+ id);

      setTasks((tasks)=>{
         return  tasks.filter((arrayTask,index)=>{
             return index !== id;
         })
      })
  }

  const addTask =(e)=>{
      if(e.key === 'Enter')
      {
            if(e.target.value.length === 0) return

            setTasks([...tasks,e.target.value])
            e.target.value = "";
      }
  }

  return (
    <div className='container'>
       <header className="text-center my-4">
        <h1 className='mb-4'>ToDo List</h1>
       
       <form className="add text-center my-4" onSubmit={(e)=>{e.preventDefault()}}>
          <label>
            Enter a Task
          </label>
          <input type="text" name="" className='form-control m-auto' onKeyDown={addTask}/>
       </form>
       </header>

       <ul className='list-group todos mx-auto text-light'>
       {tasks.map((taskName,index)=>(<Task name={taskName} key={index} id={index} onDelete={deleteTask}/>))}
       </ul>
    </div>
  )
}

export default ToDo