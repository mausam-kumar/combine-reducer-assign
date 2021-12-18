import React from 'react'
import TodoList from './TodoList.jsx'
import Login from './Login.jsx'
import {Routes,Route} from 'react-router-dom'
import WelcomePage from './WelcomePage.jsx'

function Todo() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/todo" element={<TodoList />} />
                    
               
            </Routes>
        </div>
    )
}

export default Todo
