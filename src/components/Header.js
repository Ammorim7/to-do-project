import {BiTask} from 'react-icons/bi'

import './Header.module.css'

function Header(){
    return(
        <header>
            <div>
                <h1>To-do list</h1>
                <BiTask />
            </div>
        </header>
    )
}

export default Header;