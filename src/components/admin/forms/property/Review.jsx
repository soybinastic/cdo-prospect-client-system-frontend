import { Box, InputLabel, MenuItem, Select } from '@mui/material';
import InputField from '../../../common/form-fields/InputField';
import { useField } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';

export const Review = (props) => {
    const { agents } = useSelector(state => state.profile)
    const { formField : {
        propertyName,
        description,
        type,
        price,
        agentId,
        image
    } } = props;
    const [field] = useField(image['name'])
    const [agentIdField] = useField(agentId['name'])
  return (
    <div>
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
                            <InputField disabled name={propertyName.name} label={propertyName.label} fullWidth type="text" />
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={description.name} label={description.label} fullWidth type="text" />
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={type.name} label={type.label} fullWidth type="text"/>
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={price.name} label={price.label} fullWidth type="number"/>
                        </Box>
                        <Box>
                            <InputLabel id='agent-id-selection'>Agent</InputLabel>
                            <Select labelId='agent-id-selection' disabled value={agentIdField.value} label='Agent' fullWidth>
                                {agents.map(agent => (
                                    <MenuItem key={agent.id} value={agent.id}>{agent.profile.firstName} {agent.profile.lastName}</MenuItem>
                                ))}
                            </Select>
                            {/* <InputField disabled name={middleName.name} label={middleName.label} fullWidth type="text" /> */}
                        </Box>
                    </Box>
                    {/* <Box width="100%">
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={email.name} label={email.label} fullWidth type="text" />
                        </Box>
                        <Box marginBottom="0.5rem">
                            <InputField disabled name={address.name} label={address.label} fullWidth type="text" />
                        </Box>
                        <Box>
                            <InputField disabled name={contact.name} label={contact.label} fullWidth type="text" />
                        </Box>
                    </Box> */}
                </Box>
            </Box>
            {/* <Box display="flex" flexDirection="column" width="100%">
                <p>Account Setup</p>
                <Box display="flex" width="100%">
                    <Box width="100%" marginRight="0.5rem">
                        <InputField disabled name={username.name} label={username.label} fullWidth type="text" />
                    </Box>
                    <Box width="100%">
                        <InputField disabled name={password.name} label={password.label} fullWidth type="text" />
                    </Box>
                </Box>
            </Box> */}
        </Box>
    </Box>
    </div>
  )
}
