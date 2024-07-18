let intlialize = {
    userList : [],
    error : null
}
const UserReducer = (state=intlialize,action) => {
    switch(action.type){
        case "addemp" : 
        return{
            ...state,
            userList : [...state.userList,action.payload]
        }
        case "addemperror" :
            return{
                ...state,
                error : action.payload
            }
            case "viewemp" : 
        return{
            ...state,
            userList : action.payload
        }
        default : 
    return state
    }
    
}
export default UserReducer