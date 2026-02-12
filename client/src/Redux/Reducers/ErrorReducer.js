import { CLEARERROR, HANDLEERROR } from "../ActionsTypes/ErrorTypes"

const initialState = []


const ErrorReducer=(state= initialState, action)=>{
    switch (action.type) {
       
        case HANDLEERROR : return [...state, action.payload]
        case CLEARERROR : return state.filter((el,i,t)=> el.id != action.payload)
        default: return state
    }
}

export default ErrorReducer