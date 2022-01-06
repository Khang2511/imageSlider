import { TO_SIGNUP, CHECK_INFO, INSERT_EMAIL,INSERT_PASS, TO_LOGIN, CHECK_PASSWORD} from "./constants";

const insertEmail = (payload) =>{
    return{
        type: INSERT_EMAIL,
        payload,
    }
}

const insertPass = (payload) =>{
    
    return{
        type: INSERT_PASS,
        payload,
    }
}

const checkInfo = (payload) =>{
    return{
        type: CHECK_INFO,
        payload,
    }
}

const toSignup = (payload) =>{
    return{
        type: TO_SIGNUP,
        payload,
    }
}

const toLogin = (payload) =>{
    return{
        type: TO_LOGIN,
        payload,
    }
}

const checkPassword = (payload) =>{
    return{
        type: CHECK_PASSWORD,
        payload,
    }
}



export {insertEmail,insertPass, checkInfo, toSignup, toLogin, 
        checkPassword}