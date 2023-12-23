

export const todoReducer = ( initialState = [], action = {} ) => {

    switch ( action.type ) {
        case 'ADD-TODO':
           //throw new Error('L\'acció, action.type = ABC no esta implementada, proximament...');
            //return initialState;
            return [ ...initialState, action.payload ];
        case 'DEL-TODO':
            return initialState.filter( todo => todo.id !== action.payload );
        case 'TOG-TODO':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                return todo;
            });

    }
    
    return initialState;
}   