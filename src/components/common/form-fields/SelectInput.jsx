
import { Select } from '@mui/material'
import { useField } from 'formik'
import { at } from 'lodash'
import React from 'react'

export const SelectInput = (props) => {
    const { errorText, ...rest } = props
    const [field, meta] = useField(props)
    const renderHelperText = () => {
        const [touched, error] = at(meta, 'touched', 'error')
        if(touched && error){
            return error
        }
    }

  return (
    <Select 
        error={meta.touched && meta.error && true}
        helpertext={renderHelperText()}
        {...rest}
        {...field}
        fullWidth
    >
        {props.children}
    </Select>
  )
}
