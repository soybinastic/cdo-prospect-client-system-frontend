
import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

function AgentImageForm(props) {
    const { formField : { pic } } = props;
    return <>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem">
            <Typography variant='h6' gutterBottom align='center' marginBottom="1rem">Upload Image</Typography>
            <Grid container spacing={2}>
                <Grid item width="40rem" xs={12} sm={10}>
                    <Typography variant='h4'>{pic.label}</Typography>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default AgentImageForm