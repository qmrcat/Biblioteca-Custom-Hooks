import { useState } from "react";

export const useCounter = ( InitialValue ) => {

    const [ counter, setCounter ] = useState( InitialValue );

    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }

    const decrement = ( value = 1 ) => {
        
        setCounter( counter - value );
        if ( counter < 1 ) { setCounter( 0 ); } 
    }

    const reset = () => {
        setCounter( InitialValue  );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}