import { Box, Step, StepLabel, Stepper, Typography, Button, CircularProgress, Snackbar } from '@mui/material'
import { getAgents } from '../../../features/profile/profileSlice'
import { Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import { Error } from '@mui/icons-material'
import { PropertyAgentAssignmentForm } from '../../../components/admin/forms/property/PropertyAgentAssignmentForm'
import { PropertyImageForm } from '../../../components/admin/forms/property/PropertyImageForm'
import { PropertyDetailsForm } from '../../../components/admin/forms/property/PropertyDetailsForm'
import initialValues from '../../../components/admin/form-model/property/initialValues'
import addPropertyValidationScheme from '../../../components/admin/form-model/property/validator'
import addPropertyModel from '../../../components/admin/form-model/property/addPropertyModel'
import { useSelector, useDispatch } from 'react-redux'
import { Review } from '../../../components/admin/forms/property/Review'
import { createProperty, reset } from '../../../features/property/propertySlice'
const { formId, formField  } = addPropertyModel

const forms = ['Details', 'Choose Agent', 'Upload Profile Image', 'Review']

const renderForm = ({currentFormIndex, setFieldValue}) => {
  switch(currentFormIndex){
    case 0:
      return <PropertyDetailsForm formField={formField}/>
    case 1:
      return <PropertyAgentAssignmentForm formField={formField} setFieldValue={setFieldValue}/>
    case 2:
      return <PropertyImageForm formField={formField} setFieldValue={setFieldValue}/>
    case 3:
      return <Review formField={formField} />
    default:
      return <>Not Found!</>
  }
}
const AddProperty = () => {

  const dispatch = useDispatch()
  const { isLoading, errors, data, isSuccess } = useSelector(state => state.property)
  const { 
    isLoading : profileIsLoading, 
    isSuccess : profileIsSuccess, 
     } = useSelector(state => state.profile)

  const [currentStep, setCurrentStep] = useState(0)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const currentValidationScheme = addPropertyValidationScheme[currentStep]

  const handleSubmit = (values) => {
    if(currentStep === forms.length - 1){
      alert('Sumbit')
      console.log(values)
      const formData = new FormData();
      formData.append('agentId', values[formField.agentId.name])
      formData.append('propertyTypeId', values[formField.type.name])
      formData.append('name', values[formField.propertyName.name])
      formData.append('description', values[formField.description.name])
      formData.append('price', values[formField.price.name])
      formData.append('image', values[formField.image.name])

      dispatch(createProperty(formData))
    }else{
      setCurrentStep(currentStep + 1)
    }
  }
  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  // call getAgentProfile action from store to retrieve data 
  // to display it to select options from PropertyDetailsForm component.
  useEffect(() => {
    dispatch(getAgents())

    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  if(profileIsLoading) return <div className='flex justify-center items-center pt-28'> <CircularProgress color='primary'/> </div>

  return <Box display="flex" flexDirection="column" padding="2rem">
    <Typography variant="h4" gutterBottom component="p">Property Form</Typography>
    <Box display="flex" justifyContent="center" flexDirection="column">
        <Stepper activeStep={currentStep}>
            {forms.map((form, index) => (
                <Step key={index}>
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
                        {renderForm({ currentFormIndex : currentStep, setFieldValue })}
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
                            open={isSuccess}
                            autoHideDuration={5000}
                            message="Property created"
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
  </Box>
}

export default AddProperty