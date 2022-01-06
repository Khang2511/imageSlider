
import { TO_SIGNUP, CHECK_INFO, INSERT_EMAIL, INSERT_PASS, TO_LOGIN} from "./constants";

const account = [
    {
    email:"htk123@gmail.com",
    password:"123456"
    },

    {
        email:"h@gmail.com",
        password:"123456"
    },
        
]

const initState = {
    account : {
        email:'', 
        password: '',
    },

    choose : {
        choose: 'Login'
    },

    checkAccount : {
        check: true
    },

    checkEmail :{
        check: true
    },

    checkPass : {
        check: true
    }
}

const reducer = (state, action)=>{
    switch(action.type){
        case INSERT_EMAIL:
            for(let i = 0; i< account.length;i++){
                if (action.payload === account[i].email) {
                    return{
                        ...state,
                        checkEmail :{
                            check: false
                        },
                    }
                }
            }
            
        break;
        case INSERT_PASS:
            return {
                ...state,
                password : action.payload,
            }    
        break;

        case CHECK_INFO:
            const loginAccount = action.payload
            const choose = initState.choose;
            for(let i = 0; i< account.length;i++){
                if (loginAccount.email === account[i].email) {
                    return{
                        ...state,
                        choose : {
                            choose : 'Header'
                        },
                        checkAccount : {
                            check : true
                        }
                    }
                }
                else
                    return{
                        ...state,
                        checkAccount : {
                            check : false
                        }
                    }
            }
        break;

        case TO_SIGNUP:

            return{
                ...state,
                choose : {
                    choose : 'Signup'
                },

                checkAccount : {
                    check : true
                }
            }
        break;

        // case TO_LOGIN:
        //     initStateChoose.choose ='Login'
        //     console.log(initStateChoose.choose)
        //     return{
        //         ...state,
        //     }
        // break;


        default:
            throw new Error('Invalid function');
    }
}

export {initState}
export default reducer