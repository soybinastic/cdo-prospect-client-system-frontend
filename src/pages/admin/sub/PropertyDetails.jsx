import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import InputField from '../../../components/common/form-fields/InputField'
import { SelectInput } from '../../../components/common/form-fields/SelectInput'
import addPropertyModel from '../../../components/admin/form-model/property/addPropertyModel'
import { MenuItem, CircularProgress, Snackbar } from '@mui/material'
import { useEffect } from 'react'
import { getOneProperty, reset, updatePropertyDetails, updatePropertyImage } from '../../../features/property/propertySlice'
import { useState } from 'react'
import { useRef } from 'react'

const { formId, formField } = addPropertyModel

export const PropertyDetails = () => {

    const [updateType, setUpdateType] = useState({
        type : ''
    })
    const [isProfilePictureChange, setIsProfilePictureChange] = useState(false)
    const [newProfileImage, setNewProfileImage] = useState(null)
    const fileRef = useRef()
    const { propertyId } = useParams()
    const dispatch = useDispatch()
    const { property, isLoading, isSuccess, showSnackbar } = useSelector(state => state.property)

    useEffect(() => {
        dispatch(getOneProperty(propertyId))

        return () => {
            dispatch(reset())
        }
    }, [dispatch])

    const onUpdateProfileImage = () => {
        if(newProfileImage == null) return;
        setUpdateType({
            type : 'profile'
        })
        const formData = new FormData();
        formData.append('propertyId', property.id)
        formData.append('image', newProfileImage, newProfileImage.name)
        // for(let data of formData.entries()){
        //     console.log(data[1])
        // }
        dispatch(updatePropertyImage(formData))
    }

    const handleSubmitUpdate = (values, action) => {
        setUpdateType({
            type : 'details'
        })
        const data = {
            agentId : property.assignedTo,
            propertyTypeId : values[formField.type.name],
            name : values[formField.propertyName.name],
            description : values[formField.description.name],
            price : values[formField.price.name]
        }

        dispatch(updatePropertyDetails({ id : propertyId, data }))
    }


  return (isLoading && updateType.type === '') ? <div className='flex justify-center items-center pt-28'>
    <CircularProgress color='primary' size={30}/>
  </div> : 
  (
    <div>
        <div className='flex flex-col justify-center mt-5 px-20'>
            <div className='mb-5'>
                <h1 className='text-sm font-semibold uppercase text-gray-800'>Property Details</h1>
            </div>
            <div className='flex'>
                <div className='w-[55rem] h-[35rem]'>
                    <div className='relative h-full'>
                        <img 
                            className='w-full h-full rounded-md'
                            src={isProfilePictureChange ? URL.createObjectURL(newProfileImage) : property?.imageUrl} alt="" />
                        <div className='absolute backdrop-blur-sm bg-white/10 bottom-0 w-full'>
                            <div className='flex justify-center py-5 items-center cursor-pointer hover:text-gray-700'
                                onClick={() => {
                                    fileRef.current.click()
                                }}>
                                <small className='uppercase font-semibold text-sm'>Change Profile</small>
                                <input hidden type="file" ref={fileRef}
                                    onChange={(e) => {
                                        if(e.target.files.length < 1) return;
                                        
                                        setNewProfileImage(e.currentTarget.files[0])
                                        setIsProfilePictureChange(true)
                                    }}/>
                            </div>
                            <hr />
                            {isProfilePictureChange && <div className='w-full flex justify-center items-center'>
                                <div className='w-full py-2 px-3'>
                                    {(isLoading && updateType.type === 'profile') ? <div className='flex justify-center items-center'>
                                        <CircularProgress color='primary' size={30}/>
                                    </div> : <button className='w-full uppercase border-r-2 hover:text-gray-700 text-xs' onClick={() => onUpdateProfileImage()}>save</button>}
                                </div>
                                <button className='py-2 px3 w-full uppercase hover:text-gray-700 text-xs' onClick={() => setIsProfilePictureChange(false)}>cancel</button>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className='w-full ml-5'>
                    <Formik
                        initialValues={
                            {
                                [formField.propertyName.name] : property?.name,
                                [formField.price.name] : property?.price,
                                [formField.type.name] : property?.propertyTypeId,
                                [formField.description.name] : property?.description 
                            }
                        }
                        validationSchema={
                            Yup.object().shape({
                                [formField.propertyName.name] : Yup.string().required(formField.propertyName.requiredErrorMsg),
                                [formField.description.name] : Yup.string().required(formField.description.requiredErrorMsg),
                                [formField.type.name] : Yup.number().min(1, formField.type.requiredErrorMsg).required(formField.type.requiredErrorMsg),
                                [formField.price.name] : Yup.number().required(formField.price.requiredErrorMsg)
                            })
                        }
                        onSubmit={handleSubmitUpdate}>
                        {({ setFieldValue, errors, touched }) => (
                            <Form>
                                <div className='flex flex-col w-full'>
                                    <div>
                                        <div className='mb-2'>
                                            <InputField name={formField.propertyName.name} type="text" fullWidth size="small" label="Name"/>
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={formField.description.name} type="text" fullWidth size="small" multiple label="Description"/>
                                        </div>
                                        <div className='mb-2'>
                                            <InputField name={formField.price.name} type="number" fullWidth size="small" multiple label="Price"/>
                                        </div>
                                        <div className='mb-2'>
                                            <SelectInput name={formField.type.name}>
                                                <MenuItem value={0} selected>Choose Property Type</MenuItem>
                                                <MenuItem value={1}>Single Unit</MenuItem>
                                                <MenuItem value={2}>Combined Unit</MenuItem>
                                            </SelectInput>
                                            {errors[formField.type.name] && touched[formField.type.name] ? <small className='text-red-600 text-[13px]'>{errors[formField.type.name]}</small> : null}
                                        </div>
                                    </div>
                                    <div>
                                        {(isLoading && updateType.type === 'details') ? <div className='flex justify-center items-center'>
                                            <CircularProgress color='primary' size={30}/>
                                        </div> : 
                                            <button type='submit' className='uppercase shadow-md rounded-lg font-semibold text-xs px-4 py-3 bg-[#ffc108] text-black active:bg-[#ffe109] w-full'>Save</button>}
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <Snackbar
                        open={showSnackbar}
                        autoHideDuration={5000}
                        message={isSuccess ? 'Details are modified successfully' : 'Failed to update details'}
                        onClose={(e, r) => {
                            if("clickaway" === r) return;
                        }}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}
