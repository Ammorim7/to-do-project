import styles from './TaskBar.module.css'
import { useState } from 'react'

function TaskBar(){


    const getLocalStorage = () => {
        const list = localStorage.getItem("tasks");
        if (list) {
          return JSON.parse(localStorage.getItem("tasks"));
        } else {
          return [];
        }
      };

    const [texto, setTexto] = useState()
    const [taskList, setTaskList] = useState(getLocalStorage)
    
    function addItem(){
        taskList.push(texto)
        localStorage.setItem('tasks', JSON.stringify(taskList))
        document.location.reload()
    }
      
    return(
        <section className={styles.taskAddArea}>
            <div>
              <input type='text' name='name' placeholder="Enter the name of the task" onChange={(e) => setTexto(e.target.value)}></input>
              <button onClick={addItem}>Create Task</button>
            </div>
        </section>
    )

}


export default TaskBar;