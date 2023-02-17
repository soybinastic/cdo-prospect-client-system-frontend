
import { InputLabel, MenuItem, TextField, Select, CircularProgress, Snackbar } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectInput } from '../../../components/common/form-fields/SelectInput'
import { getAgents } from '../../../features/profile/profileSlice'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import InputField from '../../../components/common/form-fields/InputField'
import { resetEssentialProps, setAppointment } from '../../../features/appointment/appointmentSlice'

const setAppointmentFormModel = {
    formId : 'appointmentFormModel',
    formFields : {
        agentId : {
            name : 'agentId',
            requiredErrorMsg : 'Please select agent'
        },
        phoneNumber : {
            name : 'phoneNumber',
            requiredErrorMsg : 'This field is required'
        },
        name : {
            name : 'name',
            requiredErrorMsg : 'Client name is required'
        },
        dateAndTime : {
            name : 'dateAndTime',
            requiredErrorMsg : 'This field is required'
        },
        occupation : {
            name : 'occupation',
            requiredErrorMsg : 'Occupation is required'
        }
    }
}

const validationScheme = Yup.object()
    .shape({
        [setAppointmentFormModel.formFields.agentId.name] : Yup.number().min(1 , 'Please assigned an agent'),
        [setAppointmentFormModel.formFields.name.name] : Yup.string().required(setAppointmentFormModel.formFields.name.requiredErrorMsg),
        [setAppointmentFormModel.formFields.dateAndTime.name] : Yup.string().required(setAppointmentFormModel.formFields.dateAndTime.requiredErrorMsg),
        [setAppointmentFormModel.formFields.phoneNumber.name] : Yup.string().required(setAppointmentFormModel.formFields.phoneNumber.requiredErrorMsg),
        [setAppointmentFormModel.formFields.occupation.name] : Yup.string().required(setAppointmentFormModel.formFields.occupation.requiredErrorMsg)
    })

export const SetAppointment = () => {
    const dispatch = useDispatch()
    const { isLoading : loading, isSuccess: success, agents } = useSelector(state => state.profile)
    const { isLoading, isSuccess, isError, errors } = useSelector(state => state.appointment)

    useEffect(() => {
        dispatch(getAgents())

        return () => {
            dispatch(resetEssentialProps())
        }
    }, [dispatch])
    console.log(agents)
    const handleSubmit = (values, actions) => {
        // console.log(values)

        const data = {
            agentId : values[setAppointmentFormModel.formFields.agentId.name],
            appointmentDate : values[setAppointmentFormModel.formFields.dateAndTime.name],
            client : {
                name : values[setAppointmentFormModel.formFields.name.name],
                occupation : values[setAppointmentFormModel.formFields.occupation.name],
                phoneNumber : values[setAppointmentFormModel.formFields.phoneNumber.name]
            }
        }
        dispatch(setAppointment(data))
        console.log(data)
    }
    if(loading){
        return <div className='flex justify-center items-center pt-28'>
            <CircularProgress color='primary' size={30}/>
        </div>
    }

    if(!loading && agents?.length < 1){
        return <div className='flex justify-center my-auto'>
            <h1>No agent found!</h1>
        </div>
    }
  return (
    <div>
        <div className='flex flex-col px-5 py-5'>
            <div className='flex justify-between items-center'>
                <h4 className='text-sm font-semibold uppercase'>Set Appointment</h4>
            </div>
            <div className='mt-3'>
                <div className='flex flex-col items-center'>
                    {errors?.length > 0 &&
                        errors?.map((e,i) => (
                            <p key={i} className='text-red-600 text-[13px]'>{e}</p>
                        ))}
                </div>
                <Formik 
                    validationSchema={validationScheme}
                    initialValues={{
                        [setAppointmentFormModel.formFields.agentId.name] : 0,
                        [setAppointmentFormModel.formFields.dateAndTime.name] : '',
                        [setAppointmentFormModel.formFields.phoneNumber.name] : '',
                        [setAppointmentFormModel.formFields.name.name] : '',
                        [setAppointmentFormModel.formFields.occupation.name] : ''
                    }}
                    onSubmit={handleSubmit}>
                    { ({ setFieldValue, errors, touched, handleSubmit }) => (
                        <Form
                         id={setAppointmentFormModel.formId}
                         onSubmit={handleSubmit}>
                            <div className='flex flex-col px-3 justify-center w-[40rem] mx-auto'>
                            
                                <div className='flex'>
                                    <div className='flex flex-col w-full'>
                                        <div className='mb-2'>
                                            <small>Assigned an Agent</small>
                                            <SelectInput name={setAppointmentFormModel.formFields.agentId.name} size='small' fullWidth value={0}>
                                                <MenuItem value={0}>Please assigned agent</MenuItem>
                                                {agents.map(agent => (
                                                    <MenuItem key={agent.id} value={agent.id}>{agent.profile.firstName} {agent.profile.lastName}</MenuItem>
                                                ))}
                                            </SelectInput>
                                            {(errors[setAppointmentFormModel.formFields.agentId.name] && touched[setAppointmentFormModel.formFields.agentId.name]) ? 
                                                <p className='text-red-600 text-[13px] ml-4'>{errors[setAppointmentFormModel.formFields.agentId.name]}</p> : null}
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={setAppointmentFormModel.formFields.name.name} label="Client Name" type={'text'} fullWidth size='small'/>
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={setAppointmentFormModel.formFields.occupation.name} label="Occupation" type={'text'} fullWidth size='small'/>
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={setAppointmentFormModel.formFields.phoneNumber.name} label="Client Phone No." type={'text'} fullWidth size='small'/>
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={setAppointmentFormModel.formFields.dateAndTime.name} label="Date and time" type={'datetime-local'} fullWidth InputLabelProps={{ shrink : true }} size='small'/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div>
                                    {isLoading ? <CircularProgress color='primary' size={30}/> : 
                                     <button className='bg-[#ffc109] text-sm uppercase font-semibold px-6 py-2 rounded shadow-md active:bg-[#ffe108]' type='submit'>Set</button>}
                                </div>
                            </div>
                        </Form>
                    ) }
                </Formik>
                <Snackbar
                  open={isSuccess}
                  autoHideDuration={5000}
                  message={'Appointment created successfully.'}
                  onClose={(e, r) => {
                      if("clickaway" === r) return;
                  }}
                />
            </div>
        </div>
    </div>
  )
}
