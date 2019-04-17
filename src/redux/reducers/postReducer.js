const postReducer = (state = [], action) => {

    //acciones para cambiar el estado 
    switch(action.type){
        case 'ADD_POST':
            return state.concat([action.data])
        default:
            return state
    }

}

export default postReducer