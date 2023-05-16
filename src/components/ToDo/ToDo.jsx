import React, { useState } from 'react'

export default function ToDo( page ) {

    const [todoList, setTodoList] = useState([])


    const addTodos = (() => {
        setTodoList([...todoList, page])
    })
    
    console.log(page)

    console.log(todoList)
    return (
        <ul>
            <li className='inter500-16'><input type="checkbox" /> {todoList[0]}</li>
            <li><input type="checkbox" /> Write Essay</li>
            <li><input type="checkbox" /> Write Essay</li>
        </ul>
    )
}
