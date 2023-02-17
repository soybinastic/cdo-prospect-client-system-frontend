import { 
    Box, 
    Typography, 
    Button, 
    Table, 
    TableContainer, 
    TableHead, 
    TableRow,
    TableCell,
    TableBody,
    Paper, 
    CircularProgress} from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import keys from '../../../constants/keys'
import { getAllAppointment } from '../../../features/appointment/appointmentSlice'
import status from '../../../helpers/statusClasses'
import statusConverter from '../../../helpers/statusConverter'

export const ListOfClients = () => {
    const agent = JSON.parse(localStorage.getItem(keys.profileKey))
    const dispatch = useDispatch()
    const {isLoading, appointments, isSuccess} = useSelector(state => state.appointment)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getAllAppointment({ agentId : agent.id }))
    }, [dispatch])
    console.log(appointments)

    if(isLoading){
        return <div className='flex justify-center pt-28'>
            <CircularProgress color='primary' size={30}/>
        </div>
    }
  return (
    <div>
        <div className='px-4 py-8'>
            <div className='flex flex-col'>
                <div className='mb-3 flex justify-between'>
                    <h2 className='text-xs font-semibold uppercase'>List of Clients</h2>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table arial-label='simple data'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>NAME</TableCell>
                                    <TableCell>PHONE #</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>TIME</TableCell>
                                    <TableCell>STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.map((appointment) => (
                                    <TableRow key={appointment.id}>
                                        <TableCell align="left">{appointment.client.name}</TableCell>
                                        <TableCell align="left">{appointment.client.phoneNumber}</TableCell>
                                        <TableCell align="left">{new Date(appointment.dateAppointment).toISOString()}</TableCell>
                                        <TableCell align="left">{new Date(appointment.dateAppointment).getTime()}</TableCell>
                                        <TableCell align="left"><span className={status.getClass(statusConverter.appointment(appointment.status))}>{statusConverter.appointment(appointment.status)}</span></TableCell>
                                        <TableCell align="left">
                                            <button onClick={() => navigate('/agent/client-details/' + appointment.id
                                            )} className='px-3 py-2 shadow-md rounded-lg uppercase text-xs font-semibold active:bg-[#ffc108] bg-[#ffe108]'>view</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    </div>
  )
}
