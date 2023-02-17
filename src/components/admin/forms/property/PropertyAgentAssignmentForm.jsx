import { Box, Typography, Grid, Select, MenuItem, InputLabel } from '@mui/material'
import { useField } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';

export const PropertyAgentAssignmentForm = (props) => {
    const { formField : { agentId }, setFieldValue } = props;
    const [agentIdField] = useField(agentId['name'])
    const { agents } = useSelector(state => state.profile)
    console.log(agents)
  return (
    <>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem">
            <Typography variant='h6' align="center" gutterBottom marginBottom="1rem">Property Details</Typography>
            <Grid container spacing={2} justifyContent="center" width="40rem">
                <Grid item xs={12} sm={10}>
                    <InputLabel id='agent-selection'>Assign an agent</InputLabel>
                    <Select value={agentIdField.value} labelId='agent-selection' name={agentId['name']} onChange={(e) => {
                        setFieldValue(agentId['name'], e.target.value)
                    }} fullWidth>
                        <MenuItem selected value={0}>Choose Agent</MenuItem>
                        {agents.map(agent => (
                            <MenuItem key={agent.id} value={agent.id}>{agent.profile.firstName} {agent.profile.lastName}</MenuItem>
                        ))}
                    </Select>
                    {/* <InputField name={propertyName.name} label={propertyName.label} fullWidth type="text"/> */}
                </Grid>
            </Grid>
        </Box>
    </>
  )
}
