import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Learn React',
        'Build a todo app'
    ]

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <li className='todoItem' key={todoIndex}>{todo}
                        <i className="fa-solid fa-pen-to-square"></i>
                    </li>
                )
            })}
        </ul>
    )
}
