import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import { v4 as uuidv4 } from 'uuid'
import './Main.css'
import trash from './images/trash.png';
import vector from './images/vector.png';

export default function Main() {
  
    const [activePage, setActivePage] = useState('To Do')

    const [toDoList, setToDoList] = useState([
        // {text: 'Do smth', id: uuidv4(), status: 'To Do'},
        // {text: 'Other stuff', id: uuidv4(), status: 'To Do'},
        // {text: 'Trash stuff', id: uuidv4(), status: 'Trash'},
        // {text: 'Done stuff', id: uuidv4(), status: 'Done'},
        // {text: 'Trash stuff', id: uuidv4(), status: 'Trash'}
    ])

    const activeList = toDoList.filter((item) => item.status === activePage)

    const [isModalActive, setIsModalActive] = useState(false)

    const toggleModal = () => {
        setIsModalActive(!isModalActive)
        console.log(isModalActive)
    }
    
    const changeStatusDone = (item) => {
        item.status = 'Done'
    }
    const changeStatusToDo = (item) => {
        item.status = 'To Do'
    }
    const changeStatusTrash = (item) => {
        item.status = 'Trash'
    }

    const changeText = () => {
        if (activePage === 'To Do' || activePage === 'Done') {
            return 'Move To Trash'
        } else {
            return 'Delete Forever'
        }
    }
    
    return (
        <>
            <div className='Main'>
                <div className='buttons'>
                    <button onClick={() => setActivePage('To Do')} style={{background: activePage === "To Do" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}className='inter500-14'>To Do</button>
                    <button onClick={() => setActivePage('Done')} style={{background: activePage === "Done" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}className='inter500-14'>Done</button>
                    <button onClick={() => setActivePage('Trash')} style={{background: activePage === "Trash" ? "rgba(8, 30, 52, 0.42)" : "rgba(8, 30, 52, 0.1)"}}className='inter500-14'>Trash</button>
                </div>

                <Modal toDoList={toDoList} setToDoList={setToDoList}/>
        
            </div>

            <h2>{activePage}</h2>
            
            {toDoList.length === 0 && (<p className='inter500-16'>Look's like You got nothing To Do! Click on plus button to add a task</p>)}

            <ul>
                {activeList.map((item) => {
                    return <li key={item.id} className='inter500-16'> <input type="checkbox" onChange={toggleModal} /> {item.text} </li>
                })}
            </ul>
            
            {isModalActive && (
                    <div className="list-modal">
                        <div className="overlay">
                            <div className="options">
                               <div className='options1'>
                                    <img src={trash} className='icon'/>
                                    <p className='inter500-14'> {changeText()}</p>
                               </div>
                               <div className='options1'>
                                    <img src={vector} className='icon'/>
                                    <p className='inter500-14'>Move Back To To Do</p>
                               </div>
                            </div>
                        </div>
                    </div>)}
        </>
  )
}

