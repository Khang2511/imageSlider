import React from 'react'
import './css/signupstyle/style.css'
import { useReducer } from 'react'
import reducer, {  initState } from './store/reducer'
import { toLogin,insertPass,insertEmail } from './store/actions'

export default function Signup() {
    const [state, dispatch] = useReducer(reducer,initState)
    const {account,check,choose} = state
    
    function handleEmail(email){
        account.email = email;

    }
    
    function handlePass(pass){
        account.password = pass;
    }
    
    function handleCheck(){
        
    }

    // function handleChange(e){
    //     const target = e.target;
    //     const name = target.name;
    //     const value = target.value;
    //     setState(...state,
    //         [name]: value,
    //         );
    //     // dispatchChoose(toLogin())
    // }
    
    console.log(state)
    return (
        <div className='signup'>
            <h2>Sign up</h2>
            <form className='signup__form'>
                <ul>
                    <li>
                        <p>Email</p>
                        <p>Password</p>
                        <p>Re-Enter password</p>
                    </li>
                    <li>
                        <div className="form-group">
                          <input type="email" className="form-control" 
                          name="email" 
                          onChange={(e) => handleEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input type="password" 
                          className="form-control" 
                          name="password" 
                          autoComplete='off'
                          onChange={(e) => handlePass(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input type="password" 
                          className="form-control" 
                          name="password" 
                          autoComplete='off'
                          onChange={(e) => handleCheck(e.target.value)}
                          />
                          {/* {chekc && div} */}

                        </div>
                        
                    </li>
                </ul>
                <button type='submit'>Sign up</button>
                <p>Or</p>
                <button onClick={handleCheck}>Login</button>
            </form>
        </div>
    )
}
