import React, { useState } from 'react'
import { Box, Button, CircularProgress, OutlinedInput, TextField, Typography } from '@mui/material'
import keys from '../../constants/keys'
import InputField from '../../components/common/form-fields/InputField'
import ReCAPTCHA from 'react-google-recaptcha'



export const BuyerSignup = () => {

    const [isVerified, setIsVerified] = useState(false)
  return (
    <div>
        <div className='flex justify-center px-7 py-7'>
            <div>
                <h2 className='text-lg font-bold uppercase text-gray-800'>Sign up</h2>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <TextField 
                        type="text" 
                        label="Username" 
                        variant="outlined" 
                        fullWidth
                        size='small'
                        />
                </div>
                <div>
                    <TextField 
                            type="password" 
                            label="Password" 
                            variant="outlined" 
                            fullWidth
                            size='small'
                            />
                </div>
                <div>
                    <ReCAPTCHA 
                        sitekey={keys.recaptchSiteKey}
                        onChange={(e) => {}}
                        onExpired={() => {
                            setIsVerified(false)
                        }}/>
                </div>
                <div>
                    <button className='text-xs font-semibold px-5 py-3 bg-black rounded text-gray-700 uppercase'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
