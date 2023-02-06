import { Box, Typography, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { useField } from 'formik'
import React, { useRef } from 'react'

export const PropertyImageForm = (props) => {
    const { formField : { image }, setFieldValue } = props
    const fileDialog = useRef()
    const [field] = useField(image['name'])

    const onOpenDialog = () => {
        fileDialog.current.click()
    }

    const onSelectImage = (event) => {
        if(event.currentTarget.files.length < 1) return;
        // some implementation
        setFieldValue(image['name'], event.currentTarget.files[0])
    }
  return (
    <div>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem" width="40rem">
            <Typography variant='h6' gutterBottom align='center' marginBottom="1rem">Upload Image</Typography>
            <Box display="flex" justifyContent="center" alignItems="center" width="100%" flexDirection="column">
                {/* <Typography variant='h6'>{pic.label}</Typography> */}
                {field.value && <Box marginBottom="0.5rem">
                    <img src={URL.createObjectURL(field.value)} width="100%" height="80%" alt=''/>
                </Box>}
                <Button variant="outlined" endIcon={<PhotoCamera/>} onClick={onOpenDialog}>
                    Upload
                    <input id="pic" name='pic' value={undefined} hidden accept="image/*" type="file" ref={fileDialog} onChange={(e) => onSelectImage(e)}/>
                </Button>
                {/* <InputField name={pic.name} label={pic.label} value={undefined} type="file" onChange={(e) => setFieldValue("pic",e.currentTarget.files[0])}/> */}
            </Box>
        </Box>
    </div>
  )
}
