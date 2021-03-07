import React from 'react';
import Header from "./components/Header";
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';


const App =()=> {
  const [showAddTask,SetShowAddTask] = useState(false);
  const [tasks,setTasks]= useState([
    {
        id:1,
        text:'oke',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:2,
        text:'oke2',
        day:'Feb 5th at 2:30pm',
        reminder:false
    },
    {
        id:3,
        text:'oke3',
        day:'Feb 5th at 2:30pm',
        reminder:true
    },
    {
        id:4,
        text:'oke4',
        day:'Feb 5th at 2:30pm',
        reminder:false
    },
])

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}

const addTask =(task)=>{
  const id = Math.floor(Math.random()*1000)+1;
  const newTask = {id,...task};
  setTasks([...tasks,newTask]);
}
  return (
    <div className="container">
      <Header  onAdd={()=>SetShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask}/>}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete ={deleteTask} onToggle={toggleReminder}/>):('No tasks to show')}
    </div>
  );
}

export default App;
