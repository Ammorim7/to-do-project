import Task from './Task.js'
import styles from './TaskAdd.module.css'
import {useState} from 'react'

function TaskAdd(){
    const getLocalStorage = () => {
        const list = localStorage.getItem("tasks");
        if (list) {
          return JSON.parse(localStorage.getItem("tasks"));
        } else {
          return [];
        }
      };
    const [taskList, setTaskList] = useState(getLocalStorage)

    return (
        <section className={styles.taskArea}>
            {taskList.length > 0 ? taskList.map((task, key) => {
                console.log(key);
                return (
                    <Task action={() => deletar(key)} text={task} key={key}/>                    
                )
            }) : null}
        </section>
    )

    function deletar(index){
        taskList.splice((taskList.indexOf(index)-1), 1)
        localStorage.setItem('tasks', JSON.stringify(taskList))        
        document.location.reload()
    }

}

export default TaskAdd;