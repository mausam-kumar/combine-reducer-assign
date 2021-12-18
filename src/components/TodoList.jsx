import React from 'react'
import {Navigate,Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {addTodo} from '../redux/todoReducer/action.js'
import {authState} from '../redux/auth/action.js'
import {v4 as uuid} from 'uuid'

function TodoList() {
    
    const [state,setState] = React.useState("")
    
    const dispatch = useDispatch()

    const navigate = useNavigate()
    
    const {todos} = useSelector(value => value.todoReducer)
    const {loginStatus} = useSelector(value => value.authReducer)
    
    function handleChange(e){
        setState(e.target.value)
    }
    
    function handleAdd(){
        const payload = {
            id:uuid(),
            status:false,
            title:state
        }
        
        dispatch(addTodo(payload))
        alert("sucess")
    }

    function handleLogout(){
        localStorage.removeItem("authState")
        dispatch(authState("false"))
        navigate("/login")
    }



    return (
        loginStatus==="true"?<div>
            <Link to="/"><button>Main Page</button></Link>
            <button onClick={handleLogout}>Logout</button>
            <div style={{width:"400px",display:"flex",justifyContent:"space-around",margin:"20px"}}>
                <span>Enter Todo :</span>
                <input value={state} onChange={(e) => handleChange(e)} type="text" placeholder="Enter Something" />
                <button onClick={handleAdd}>ADD</button>
            </div>

            {
                todos.map((todo) =>{
                    return(
                        <div key={todo.id}>
                            <p>{todo.title}</p>
                            <p>{todo.status}</p>
                        </div>
                    )
                })
            }
        </div>:<Navigate to="/login" />
    )
}

export default TodoList
