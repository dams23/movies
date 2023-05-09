import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    
    const handleNumInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: parseInt(target.value) ? parseInt(target.value) : ''
        })
    }

    return [ values, handleInputChange,handleNumInputChange, reset ];

}