import { ArrowBack } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getOneAppointment } from '../../../features/appointment/appointmentSlice'

export const ClientDetails = () => {
    const dispatch = useDispatch()
    const { appointmentId } = useParams()
    const navigate = useNavigate()
    const { appointment, isLoading, isSuccess } = useSelector(state => state.appointment)

    useEffect(() => {
        dispatch(getOneAppointment(appointmentId))
    }, [dispatch, appointmentId])
    console.log(appointment)
    if(isLoading || !appointment){
        return <div className='flex justify-center pt-28'>
            <CircularProgress color='primary' size={30}/>
        </div>
    }
  return (
    <div>
        <div className='py-4'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center   '>
                    <IconButton color='primary' onClick={() => navigate('/agent/clients')}>
                      <ArrowBack/>
                    </IconButton>
                    <h2 className='font-semibold text-sm text-gray-900'>Client Details</h2>
                </div>
            </div>

            <div className='px-5'>
                <div className='space-y-3'>
                    <div>
                        <label className='text-xs font-medium text-gray-700 uppercase'>Client Name</label>
                        <p className='text-sm font-semibold text-black'>{appointment.client.name}</p>
                    </div>
                    <div>
                        <label className='text-xs font-medium text-gray-700 uppercase'>Phone #</label>
                        <p className='text-sm font-semibold text-black'>{appointment.client.phoneNumber}</p>
                    </div>
                    <div>
                        <label className='text-xs font-medium text-gray-700 uppercase'>Occupation</label>
                        <p className='text-sm font-semibold text-black'>{appointment.client.occupation}</p>
                    </div>
                    <div className='flex'>
                        <div>
                            <button className='px-3 py-2 shadow-md rounded-lg uppercase font-semibold text-xs bg-gray-400'>Confirm</button>
                        </div>
                        {/* <div>
                            <button className='px-3 py-2 shadow-md rounded-lg uppercase font-semibold text-xs '>Archive</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
