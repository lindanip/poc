import { useState } from 'react';

const useFormData = values => {

    const [formValues, setFromValues] = useState({...values});

    const handleTextChange = (key, value) => {
        setFromValues({...formValues, [key]: value});
    }
    return [formValues, handleTextChange, setFromValues];
}

export default useFormData;