import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import addAgentFormModel from '../../../components/admin/form-model/addAgentFormModel'
import AgentDetailsForm from '../../../components/admin/forms/AgentDetailsForm'
import initialValues from '../../../components/admin/form-model/initialValues'
import validator from '../../../components/admin/form-model/validator'
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import AgentAccountForm from '../../../components/admin/forms/AgentAccountForm'
import AgentImageForm from '../../../components/admin/forms/AgentImageForm'
const { formId, formField } = addAgentFormModel
const forms = ['Details', 'Account', 'Upload Image']


const renderForm = (step) => {
    switch (step) {
        case 0:
            return <AgentDetailsForm formField={formField}/>
        case 1:
            return <AgentAccountForm formField={formField}/>
        case 2:
            return <AgentImageForm formField={formField}/>
        default:
            return <div>Not found!</div>
    }
}

function AddAgent() {
    
    const [currentStep, setCurrentStep] = useState(0)
    const currentValidationScheme = validator[currentStep]

    const handleSubmit = (values, actions) => {
        if(currentStep === forms.length - 1){
            alert('Form Submit')
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
                {({ isSubmitting }) => (
                    <Form id={formId}>
                        {renderForm(currentStep)}

                        <Box 
                            display="flex" 
                            flexDirection="row" 
                            justifyContent="space-between" 
                            paddingRight="3.5rem"
                            paddingLeft="3.5rem"
                            marginTop="1rem">
                            {currentStep > 0 && <Button  color="info" onClick={handleBack}>Previous</Button>}
                            <Button variant="contained" color="info" type="submit">{currentStep === forms.length -1 ? 'Review' : 'Next'}</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
        
    </Box>
}

export default AddAgent