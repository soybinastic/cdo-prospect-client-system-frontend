

import { Box, Button, CircularProgress, OutlinedInput, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import ErrorIcon from '@mui/icons-material/Error'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import keys from '../../constants/keys'
import getUserRole from '../../helpers/jwtHelper'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { 
        isLoading, 
        errors : errorMessages, 
        isSuccess,
        data } = useSelector(state => state.auth)

    const { register, formState : { errors }, handleSubmit } = useForm()
    // const [submit, setSubmit] = useState(false)
    const onSubmit = (value) => {
        dispatch(signIn(value))
    }

    useEffect(() => {
        if(data && isSuccess){
            const token = localStorage.getItem(keys.authKey) !== null ? localStorage.getItem(keys.authKey) : "";
            const userRole = getUserRole(token)

            if(userRole === "Agent"){
                navigate("/agent")
            }else if(userRole === "Admin"){
                navigate('/admin')
            }
            
        }
    }, [data, isSuccess, navigate])

  return <Box>
    <Box className='py-8 px-6 max-w-6xl mx-auto'>
        <Box className='flex justify-center flex-wrap flex-col items-center bg-gray-100 shadow-sm md:w-[60%] lg:w-[45%] mx-auto rounded-2xl'>
            <Box className='mb-12 md:mb-6 w-full h-[250px]'>
                <img className='w-full rounded-t-2xl h-full bg-auto bg-center' src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=817&q=80" alt="" />
            </Box>
            <Box className='lg:mt-3 w-full px-6 pb-10'>
                {/* <Typography variant='h5'>Login</Typography> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                        {
                            !isSuccess && errorMessages?.length > 0
                                && <Box className='flex items-center mb-2'>
                                    <ErrorIcon color="warning"/>
                                    <p className='text-red-500 text-sm ml-2'>{errorMessages[0]}</p>
                                </Box> 
                        }
                        <Box marginBottom="1rem">
                            <TextField 
                                type="text" 
                                label="Username" 
                                variant="outlined" 
                                fullWidth
                                size='small'
                                {...register("username", { required : 'This field is required.' })}/>
                        </Box>
                        <Box marginBottom="1rem">
                            <TextField 
                                size='small'
                                type="password" 
                                label="Password" 
                                variant="outlined" 
                                fullWidth
                                {...register("password", { required : 'This field is required.' })}/>
                        </Box>
                        {
                            isLoading ? <Box display="flex" justifyContent="center">
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