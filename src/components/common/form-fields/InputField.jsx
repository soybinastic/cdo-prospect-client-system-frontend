

import { TextField } from '@mui/material'
import { useField } from 'formik';
import { at } from 'lodash';

import React from 'react'

function InputField(props) {
    const { errorText, ...rest } = props;
    const [field, meta] = useField(props)

    const renderHelperText = () => {
        const [touched, error] = at(meta, 'touched', 'error')
        if(touched && error){
            return error;
        }
    }
    return (
        <TextField
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            {...field}
            {...rest}
        />
    )
}

export default InputField