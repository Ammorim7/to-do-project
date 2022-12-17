import styles from './Task.module.css'
import {FaTrashAlt} from 'react-icons/fa'
function Task(props){
    return(
        <article>
            <p>{props.text}</p>
            <button onClick={props.action}><FaTrashAlt /></button>
        </article>
    )
}

export default Task;