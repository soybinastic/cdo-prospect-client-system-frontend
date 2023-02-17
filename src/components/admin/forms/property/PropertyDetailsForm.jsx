import { Box, Grid, InputLabel, MenuItem, Typography } from '@mui/material'
import InputField from '../../../common/form-fields/InputField'
import React from 'react'
import { SelectInput } from '../../../common/form-fields/SelectInput';

export const PropertyDetailsForm = (props) => {

    const { formField : { propertyName, description, type, price } } = props;
  return (
    <>
        <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="2rem">
            <Typography variant='h6' align="center" gutterBottom marginBottom="1rem">Property Details</Typography>
            <Grid container spacing={2} justifyContent="center" width="40rem">
                <Grid item xs={12} sm={10}>
                    <InputField name={propertyName.name} label={propertyName.label} fullWidth type="text"/>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={description.name} label={description.label} fullWidth type="text"/>
                </Grid>
                <Grid item xs={12} sm={10}>
                    {/* <InputField name={type.name} label={type.label} fullWidth type="text"/> */}
                    <InputLabel>{type.label}</InputLabel>
                    <SelectInput name={type.name}>
                        <MenuItem value={0} selected>Choose Property Type</MenuItem>
                        <MenuItem value={1}>Single Unit</MenuItem>
                        <MenuItem value={2}>Combined Unit</MenuItem>
                    </SelectInput>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <InputField name={price.name} label={price.label} fullWidth type="number"/>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}
