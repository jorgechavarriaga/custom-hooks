import React, { useState } from 'react';

export const useForm = (inititalState = {}) => {

    const [values, setValues] = useState(inititalState);

    const reset =()=>{
        setValues(inititalState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];
}
