const initialState = [
    {
        id:0,
        name:'xyz',
        number:00000000,
        email:"xyz@gmail.com"
    }
    

];

// create Reducer 

const contactReducer =(state=initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state,action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=>contact.id == action.payload.id ? action.payload : contact )
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const deleteState = state.filter((contact)=>contact.id !== action.payload && contact);
            state = deleteState;
            return state;
        default: 
          return state;
    }
}


export default contactReducer;
