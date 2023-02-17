import React from 'react'
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllAppointment } from '../../../features/appointment/appointmentSlice'
import status from '../../../helpers/statusClasses'
import statusConverter from '../../../helpers/statusConverter'


export const AppointmentList = () => {

    const dispatch = useDispatch()
    const { appointments, isSuccess, isError } = useSelector(state => state.appointment)

    useEffect(() => {
        dispatch(getAllAppointment({agentId : 0}))
    }, [dispatch])

    console.log(appointments)
  return (
    <div>
        <div className='px-5 py-6'>
            <div></div>
            <div>
                <TableContainer component={Paper}>
                    <Table arial-label='simple data'>
                        <TableHead>
                            <TableRow>
                                <TableCell>AGENT</TableCell>
                                <TableCell>CLIENT</TableCell>
                                <TableCell>APPOINTMENT DATE</TableCell>
                                <TableCell>STATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.map(appointment => (
                                <TableRow key={appointment.id}>
                                    <TableCell align="left">{appointment.agent.profile.firstName} {appointment.agent.profile.lastName }</TableCell>
                                    <TableCell align="left">{appointment.client.name}</TableCell>
                                    <TableCell align="left">{appointment.dateAppointment}</TableCell>
                                    <TableCell align="left">
                                        <span className={status.getClass(statusConverter.evaluation(appointment.status))}>{statusConverter.appointment(appointment.status)}</span>
                                    </TableCell>
                                    {/* <TableCell align='left'>
                                        <button className='text-xs uppercase px-3 p-2 text-[#ffc109] font-semibold rounded-md bg-black active:bg-gray-800'>evaluation</button>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  )
}
