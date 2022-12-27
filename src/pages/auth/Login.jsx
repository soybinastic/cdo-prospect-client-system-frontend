

import { Box, Button, CircularProgress, OutlinedInput, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Login() {
    const { register, formState : { errors }, handleSubmit } = useForm()
    const [submit, setSubmit] = useState(false)
    const onSubmit = (value) => {
        alert(value["username"] + ' - ' + value["password"])
        setSubmit(true)
        setTimeout(() => {
            setSubmit(false)
        }, 5000)
    }
  return <Box
    paddingTop="3rem"
    >
    <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        padding="2rem"
        >
        <Box 
            display="flex" 
            justifyContent="center" 
            flexDirection="column" 
            width="30rem"
            marginRight="1rem">
            <Typography variant="h4" >Please login and continue.</Typography>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit expedita necessitatibus nisi praesentium reprehenderit quisquam doloribus obcaecati non saepe magni alias similique vitae, beatae harum doloremque accusantium in enim est?</p>
        </Box>
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            width="25rem" 
            height="20rem"
            padding="2rem"
            className="shadow-box"
            borderRadius="1rem"
            >
            <Typography variant='h5'>Login</Typography>
            <Box display="flex" flexDirection="column" justifyContent="center" width="100%" height="100%">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box marginBottom="1rem">
                        <TextField 
                            type="text" 
                            label="Username" 
                            variant="outlined" 
                            fullWidth
                            {...register("username", { required : 'This field is required.' })}/>
                    </Box>
                    <Box marginBottom="1rem">
                        <TextField 
                            type="password" 
                            label="Password" 
                            variant="outlined" 
                            fullWidth
                            {...register("password", { required : 'This field is required.' })}/>
                    </Box>
                    {
                        submit ? <Box display="flex" justifyContent="center">
                            <CircularProgress color='primary'/>
                        </Box> : 
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            endIcon={<LoginIcon/>}
                            fullWidth>
                            Login
                        </Button>
                    }
                </form>
            </Box>
        </Box>
    </Box>
  </Box>
}

export default Login