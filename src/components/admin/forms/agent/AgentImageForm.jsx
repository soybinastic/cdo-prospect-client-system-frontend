
import { Box, Grid, Typography, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material'
import React, { useRef, useState, useEffect } from 'react'
import { useField } from 'formik';

function AgentImageForm(props) {

    const { formField : { pic }, setFieldValue } = props;
    const fileDialog = useRef()
    const [file, setFile] = useState(null)
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const [field] = useField(pic["name"])

    const onOpenDialog = () => {
        fileDialog.current.click()
    }

    const onSelectImage = (event) => {
        if(event.target.files.length < 1) return;

        // setFile(event.target.files[0]);
        setImageFileUrl(state => state = URL.createObjectURL(event.currentTarget.files[0]));
        setFieldValue("pic", event.currentTarget.files[0])
        console.log(file)
    }
    // console.log(field.value)
    
    return <>
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
    </>
}

export default AgentImageForm