import React from 'react'
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'
import {setData} from '../utils/localStorage.js'
import {authState} from '../redux/auth/action.js'
import {useDispatch,useSelector} from 'react-redux';

function Login() {

    const [state,setState] = React.useState({
        email:"",
        password:""
    })

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const {loginStatus} = useSelector(value => value.authReducer)
    console.log("loginStatus: ", loginStatus);
    
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    
    function handleSumbit(){
        
        if (state.email.length===0 || state.password.length===0) {
            alert("Please Fill the Form")
            return
        }
        if (loginStatus==="true") {
            navigate("/todo")
            console.log("navigated");
            return
        }else{
            console.log("mausam3");
            setData("authState",state.email)
    
            dispatch(authState("true"))
    
            navigate("/todo")
        }
    }

    return (
        <div>
            <Link to="/"><button>Main Page</button></Link>
            <h2>Login Page</h2>
            <span style={{marginRight:"10px"}}>Enter Email :</span>
            <input type="email" name="email" value={state.email} onChange={(e) =>handleChange(e)} placeholder="Email"/>
            <br />
            <br />
            <br />
            <span style={{marginRight:"10px"}}>Enter Password :</span>
            <input type="password" name="password" value={state.password} onChange={(e) =>handleChange(e)} placeholder="password"/>
            <br />
            <br />
            <button onClick={handleSumbit}>Login</button>
        </div>
    )
}

export default Login
