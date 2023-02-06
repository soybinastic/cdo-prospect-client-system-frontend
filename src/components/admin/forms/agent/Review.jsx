
import { Box } from '@mui/material';
import { useField } from 'formik';
import React from 'react'
import InputField from '../../../common/form-fields/InputField';

const Review = (props) => {
    const [field] = useField("pic");
    const { formField : {
        firstName,
        lastName,
        middleName,
        email,
        contact,
        address,
        username,
        password
    } } = props;

  return <>
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="45rem">
        <p>Review</p>
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box width="100%" height="50%">
                <img src={URL.createObjectURL(field.value)} alt="" width="100%" height="100%" />
            </Box>
            <Box display="flex" flexDirection="column" width="100%">
                <p>Details</p>
                <Box display="flex" justifyContent="space-around" alignItems="center">
                    <Box width="100%" marginRight="0.5rem"> 
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={firstName.name} label={firstName.label} fullWidth type="text" />
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={lastName.name} label={lastName.label} fullWidth type="text" />
                        </Box>
                        <Box>
                            <InputField disabled name={middleName.name} label={middleName.label} fullWidth type="text" />
                        </Box>
                    </Box>
                    <Box width="100%">
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={email.name} label={email.label} fullWidth type="text" />
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={address.name} label={address.label} fullWidth type="text" />
                        </Box>
                        <Box>
                            <InputField disabled name={contact.name} label={contact.label} fullWidth type="text" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" width="100%">
                <p>Account Setup</p>
                <Box display="flex" width="100%">
                    <Box width="100%" marginRight="0.5rem">
                        <InputField disabled name={username.name} label={username.label} fullWidth type="text" />
                    </Box>
                    <Box width="100%">
                        <InputField disabled name={password.name} label={password.label} fullWidth type="text" />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  </>
}

export default Review