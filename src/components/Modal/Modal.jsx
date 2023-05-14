import { useState } from "react"
import './Modal.css'
import { v4 as uuidv4 } from 'uuid'


export default function Modal({ toDoList, setToDoList }) {
    
    const [isModalActive, setIsModalActive] = useState(false)
    const [newToDo, setNewToDo] = useState('');

    const toggleModal = () => {
        setIsModalActive(!isModalActive)
    }

    const handleClick = () => {
        setToDoList([...toDoList, { text: newToDo, id: uuidv4(), status: 'To Do' }])
        setNewToDo('')
    }

    return (
        <div>
            <button onClick={toggleModal} className='button-popup'>+</button>

            {isModalActive && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <p className="inter700pop">Add New To Do</p>
                            <textarea 
                                placeholder={'Type your task here'} 
                                onChange={(e) => setNewToDo(e.target.value)} 
                                className="modal-textarea inter500-16"
                                value={newToDo}
                            ></textarea>
                            <button className="button-add" onClick={handleClick}>Add</button>
                        </div>
                    </div>
                </div>)}
            
        </div>
    )
}