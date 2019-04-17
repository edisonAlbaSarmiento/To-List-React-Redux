const postReducer = (state = [], action) => {

    //acciones para cambiar el estado 
    switch(action.type){
        case 'ADD_POST':
            return state.concat([action.data])
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        default:
            return state
    }

}

export default postReducer