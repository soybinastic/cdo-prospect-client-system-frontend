
import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import InputField from '../../common/form-fields/InputField';

export default function AgentDetailsForm(props) {
    const { formField : 
        { 
            firstName, 
            lastName, 
            middleName, 
            address,
            email,
            contact  
        } } = props;
    return <>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem">
            <Typography variant='h6' gutterBottom align="center" marginBottom="1rem">
                    Agent Details
            </Typography>
            <Grid container spacing={2} justifyContent="center" width="40rem">
                <Grid item xs={12} sm={10}>
                    <InputField name={firstName.name} label={firstName.label} fullWidth type="text" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={lastName.name} label={lastName.label} fullWidth type="text" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={middleName.name} label={middleName.label} fullWidth type="text" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={address.name} label={address.label} fullWidth type="text" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={email.name} label={email.label} fullWidth type="text" />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={contact.name} label={contact.label} fullWidth type="text" />
                </Grid>
            </Grid>
        </Box>
    </>
}
