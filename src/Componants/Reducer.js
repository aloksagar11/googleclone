const reducer = (state,action)=>{
    switch(action.type)
    {
        case "SET_TERM":
            return{
                ...state,
                term : action.payload,
            };
        default: return state;
    }
}

export default reducer;