
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../common/form-fields/InputField'

function AgentAccountForm(props) {

    const { formField : {
        username,
        password
    } } = props


    return <>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem">
            <Typography variant='h6' align="center" gutterBottom marginBottom="1rem">Account</Typography>
            <Grid container spacing={2} justifyContent="center" width="40rem">
                <Grid item xs={12} sm={10}>
                    <InputField name={username.name} label={username.label} fullWidth type="text"/>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={password.name} label={password.label} fullWidth type="password"/>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default AgentAccountForm