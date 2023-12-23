import { useEffect, useState } from "react"

export const useForm = ( initialForm = {} ) => {

    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // })

    const [ formState, setFormState ] = useState( initialForm );

    ////const { username, email, password } = formState;

    const onInputChange = ( { target } ) => {
        //console.log(event.target.value)   
        const { name, value } = target;
        setFormState({
            ...formState, 
            [ name ]: value
        });

    }

    const onResetForm = () => {
      setFormState( initialForm );
    }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm

  }
}
