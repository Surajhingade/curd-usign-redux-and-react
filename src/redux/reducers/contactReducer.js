const initialState = [
    {
        id:0,
        name:'suraj hingade',
        number:7620942719,
        email:"suraj@gmail.com"
    },
    {
        id:1,
        name:'Pavan hingade',
        number:9595876933,
        email:"pavan@gmail.com"
    },
    {
        id:2,
        name:'surya hingade',
        number:9373197130,
        email:"surya@gmail.com"
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
