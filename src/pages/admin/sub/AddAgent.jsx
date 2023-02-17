import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAgent } from '../../../features/profile/profileSlice'
import addAgentFormModel from '../../../components/admin/form-model/agent/addAgentFormModel'
import AgentDetailsForm from '../../../components/admin/forms/agent/AgentDetailsForm'
import initialValues from '../../../components/admin/form-model/agent/initialValues'
import validator from '../../../components/admin/form-model/agent/validator'
import { Box, Button, CircularProgress, Step, StepLabel, Stepper, Typography, Snackbar } from '@mui/material'
import { Error } from '@mui/icons-material'
import AgentAccountForm from '../../../components/admin/forms/agent/AgentAccountForm'
import AgentImageForm from '../../../components/admin/forms/agent/AgentImageForm'
import Review from '../../../components/admin/forms/agent/Review'
import { reset } from '../../../features/profile/profileSlice'
const { formId, formField } = addAgentFormModel
const forms = ['Details', 'Account', 'Upload Image', 'Review']


const renderForm = ({ step, setFieldValue }) => {
    switch (step) {
        case 0:
            return <AgentDetailsForm formField={formField}/>
        case 1:
            return <AgentAccountForm formField={formField}/>
        case 2:
            return <AgentImageForm formField={formField} setFieldValue={setFieldValue}/>
        case 3:
            return <Review formField={formField}/>
        default:
            return <div>Not found!</div>
    }
}

function AddAgent() {
    
    const dispatch = useDispatch()
    const { isLoading, errors, data, isSuccess } = useSelector(state => state.profile) 
    const [currentStep, setCurrentStep] = useState(0)
    const currentValidationScheme = validator[currentStep]
    const [openSnackbar, setOpenSnackbar] = useState(false)

    useEffect(() => {
        setOpenSnackbar((isSuccess && data !== null))
        // return () => {
        //     dispatch(reset())
        // }
    }, [isSuccess, data])

    const handleSubmit = (values, actions) => {
        if(currentStep === forms.length - 1){
            
            const formData = new FormData()
            // const accountFormData = new FormData()
            // const profileFormData = new FormData()
            
            formData.append(`profile.${formField.firstName.name}`, values[formField.firstName.name])
            formData.append(`profile.${formField.middleName.name}`, values[formField.middleName.name])
            formData.append(`profile.${formField.lastName.name}`, values[formField.lastName.name])
            formData.append(`profile.contactNumber`, values[formField.contact.name])
            formData.append(`profile.${formField.address.name}`, values[formField.address.name])
            formData.append(`profile.${formField.email.name}`, values[formField.email.name])
            formData.append(`account.${formField.username.name}`, values[formField.username.name])
            formData.append(`account.${formField.password.name}`, values[formField.password.name])
            formData.append(formField.pic.name, values[formField.pic.name], values[formField.pic.name]['name'])
            dispatch(createAgent(formData))
            
        }else{
            setCurrentStep(currentStep + 1)
            actions.setTouched({})
            actions.setSubmitting(false)
        }

    }

    const handleBack = () => {
        setCurrentStep(currentStep - 1)
    }
    return <Box display="flex" flexDirection="column" justifyContent="center" padding="3rem">
        <Typography variant="h3" align="center">Create new Agent</Typography>
        <Stepper activeStep={currentStep}>
            {forms.map((form) => (
                <Step key={form}>
                    <StepLabel>{form}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Box display="flex" justifyContent="center">
            <Formik 
                initialValues={initialValues}
                validationSchema={currentValidationScheme}
                onSubmit={handleSubmit}>
                {({ isSubmitting, setFieldValue }) => (
                    <Form id={formId}>
                        {renderForm({ step : currentStep, setFieldValue })}
                        {!isSuccess && 
                            <Box display="flex" flexDirection="column" marginTop="0.5rem">
                                { errors.map((e, i) => (
                                    <Box display="flex" alignItems="center" key={i}>
                                        <Error color="error"/>
                                        <Typography component="p" color="red" marginLeft="0.3rem">{e}</Typography>
                                    </Box> 
                                ))
                                }
                            </Box>
                        }
                        <Snackbar
                            open={openSnackbar}
                            autoHideDuration={5000}
                            message="Agent added."
                            onClose={(e, r) => {
                                if("clickaway" === r) return;

                                setOpenSnackbar(false)
                            }}
                        />
                        <Box 
                            display="flex" 
                            flexDirection="row" 
                            justifyContent="space-between" 
                            paddingRight="3.5rem"
                            paddingLeft="3.5rem"
                            marginTop="1rem">
                            {currentStep > 0 && <Button  color="primary" onClick={handleBack}>Previous</Button>}
                            { !isLoading ? <Button variant="contained" color="primary" type="submit">{currentStep === forms.length -1 ? 'Submit' : (currentStep === forms.length - 2 ? "Review" : "Next")}</Button>
                                : <Box display="flex" justifyContent="center">
                                    <CircularProgress color="primary"/>
                                </Box> }
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
        
    </Box>
}

export default AddAgent