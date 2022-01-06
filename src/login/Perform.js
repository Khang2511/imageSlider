import React from 'react'
import { useReducer } from 'react'
import Header from '../practice/header/Header'
import Login from './Login'
import reducer,{initState} from './store/reducer'
function Perform() {
    const [state, dispatch] = useReducer(reducer,initState)
    const {account,check,choose} = state
   
    if (state.choose === 'Login') {
        return (
            <div>
                <Login/>
            </div>
        )
    }

    
}

export default Perform
