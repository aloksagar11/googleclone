import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";

const mycontext = createContext(); 
const initialState = {
    term : "",
    searchData:[],
}


const ContextAPI = ({children})=>{
    const [state,dispatch]= useReducer(reducer,initialState)

    const setKeyword=({ input }) =>{
        console.log(input);
        dispatch({ type: "SET_TERM", payload: input });
    }
    // console.log(initialState.term);
    return(
        <mycontext.Provider value={{initialState,setKeyword}}>
            {children}
        </mycontext.Provider>
    )
}

const useMyContext= ()=>{
    return useContext(mycontext);
}

export  {useMyContext,ContextAPI}