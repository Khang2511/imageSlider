import React, { useReducer } from 'react'
import Header from '../practice/header/Header'
import './css/loginstyle/style.css'
import { toSignup, checkInfo, insertEmail, insertPass } from './store/actions'
import reducer,{initState} from './store/reducer'
import Signup from './Signup'

export default function Login() {
    const [state, dispatch] = useReducer(reducer,initState)
    const {account,checkAccount,choose} = state
    

    function handleEmail(email){
        account.email = email;
    }
    
    function handlePass(pass){
        account.password = pass;
    }

    function handleCheck(e){
        e.preventDefault();
        dispatch(checkInfo(account))
    }

    function handleChange(){
        dispatch(toSignup())
    }
    console.log(checkAccount)

    if (choose.choose === 'Login') {
        return (
            <div className='login' >
                <h2>Login</h2>
                <form className='login__form' onSubmit={handleCheck}>
                    <ul>
                        <li>
                            <p>Email</p>
                            <p>Password</p>
                        </li>
                        <li>
                            <div className="form-group">
                              <input type="email" 
                              className="form-control"
                              onChange={(e) => handleEmail(e.target.value)}
                              />
                            </div>
                            <div className="form-group">
                              <input type="password" 
                              className="form-control"
                              name='password'
                              autoComplete='off'
                              onChange={(e) => handlePass(e.target.value)}
                              />
                            </div>
                        </li>
                    </ul>
                    {checkAccount.check ?        
                        (<div>
   
                        </div>):
                        (<div>
                            <small>Sai thông tin , mời nhập lại</small>
                        </div>)
                    }
                    <button type='submit'>Login</button>
                    <p>Or</p>
                    <button onClick={handleChange}>Sign up now</button>
                </form>
            </div>
        )
    }
    if (choose.choose === 'Header') {
        return (
            <div>
                <Header/>
            </div>
        )
    }
    if (choose.choose === 'Signup') {
        return (
            <div>
                <Signup/>
            </div>
        )
    }
    
}
