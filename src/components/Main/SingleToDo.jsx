import React, { useState } from 'react'
import unchecked from './images/unchecked-icon.png';
import dots from './images/3dots.png';
import check from './images/check-icon.png';
import trash from './images/trash.png';
import vector from './images/vector.png';

export default function SingleToDo ({ item, toDoList, setToDoList, activePage }) {
    
    const changeStatusToTrash = (id) => {
        const itemToTrash = toDoList.find((item) => item.id === id)
        itemToTrash.status = 'Trash'
        const trashToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...trashToDoList, itemToTrash])
    }

    const changeStatusToDone = (id) => {
        const itemToDone = toDoList.find((item) => item.id === id)
        itemToDone.status = 'Done'
        const doneToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...doneToDoList, itemToDone])
    }

    const changeStatusToToDo = (id) => {
        const itemToToDo = toDoList.find((item) => item.id === id)
        itemToToDo.status = 'To Do'
        const toDoToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...toDoToDoList, itemToToDo])
    }

    const [isModalActive, setIsModalActive] = useState(false)
    const toggleModal = () => {
        setIsModalActive(!isModalActive)
    }

    const [isToDoModalActive, setIsToDoModalActive] = useState(false)
    const toggleToDoModal = () => {
        setIsToDoModalActive(!isModalActive)
    }

    const changeText = () => {
        if (activePage === 'To Do' || activePage === 'Done') {
            return 'Move To Trash'
        } else {
            return 'Delete Forever'
        }
    }

    const changeAction = () => {
        if (activePage === 'To Do') {
            changeStatusToDone(item.id)
        } else {
            toggleModal()
        }
    }

    const deleteForever = (id) => {
        // const itemToToDo = toDoList.find((item) => item.id === id)
        const toDoToDoList = toDoList.filter((item) => item.id !== id)
        setToDoList([...toDoToDoList])
    }

    return (
        <>
            <div className='singletodo'> 
                <img src={dots} className='icon-clickable' onClick={ activePage === 'To Do' ? toggleToDoModal : toggleModal} />
                <img src={item.status === 'Done' ? check : unchecked} className='icon' onClick={() => changeAction()}/>
                <p className={item.status === 'Done' ? 'inter500-16-line' : 'inter500-16'}>{item.text}</p>
            </div> 

            {isToDoModalActive && (
                    <div className="list-modal-todo">
                        <div className="overlay">
                            <div className="options">
                               <div className='options1' onClick={() => changeStatusToTrash(item.id)}>
                                    <img src={trash} className='icon'/>
                                    <p className='inter500-14'> Move To Trash</p>
                               </div>
                            </div>
                        </div>
                    </div>)}

            {isModalActive && (
                    <div className="list-modal">
                        <div className="overlay">
                            <div className="options">
                               <div className='options1' onClick={activePage === 'Trash' ? () => deleteForever(item.id) : () => changeStatusToTrash(item.id)}>
                                    <img src={trash} className='icon'/>
                                    <p className='inter500-14'> {changeText()}</p>
                               </div>
                               <div className='options1' onClick={() => changeStatusToToDo(item.id)}>
                                    <img src={vector} className='icon'/>
                                    <p className='inter500-14'>Move Back To To Do</p>
                               </div>
                            </div>
                        </div>
                    </div>)}
        </>
    )
}
