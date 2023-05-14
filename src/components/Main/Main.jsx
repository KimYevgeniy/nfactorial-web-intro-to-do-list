import React, { useState } from 'react'
import ToDo from '../ToDo/ToDo'
import Modal from '../Modal/Modal'
import { v4 as uuidv4 } from 'uuid'
import './Main.css'

export default function Main() {
  
    const [activePage, setActivePage] = useState('To Do')

    const [toDoList, setToDoList] = useState([
        {text: 'Do smth', id: uuidv4(), status: 'To Do'},
        {text: 'Done other stuff', id: uuidv4(), status: 'To Do'},
        {text: 'Trash stuff', id: uuidv4(), status: 'Trash'}
    ])

    const activeList = toDoList.filter((item) => item.status === activePage)
    
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
            
            <ul>
                {activeList.map((item, i) => {
                    return <li key={i} className='inter500-16'> <input type="checkbox" onChange={ item.status === 'To Do' ? () => item.status = 'Done' : () => item.status = 'Trash' } /> {item.text} </li>
                })}
            </ul>


            {/* <ToDo page={ page }/> */}
        </>
  )
}

