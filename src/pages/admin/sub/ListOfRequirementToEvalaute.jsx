import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllEvaluations } from '../../../features/evaluation/evaluationSlice'
import status from '../../../helpers/statusClasses'
import statusConverter from '../../../helpers/statusConverter'

export const ListOfRequirementToEvalaute = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError, evaluations } = useSelector(state => state.evaluation)

    useEffect(() => {
        dispatch(getAllEvaluations())
    }, [dispatch])

    console.log(evaluations)

    if(isLoading){
        return <div className='flex justify-center items-center pt-28'>
            <CircularProgress color='primary' size={30}/>
        </div>
    }
    
  return (
    <div>
        <div className='px-7 mt-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-sm font-semibold text-gray-700 uppercase'>Requirements</h2>
            </div>
            <div className='py-6'>
                <TableContainer component={Paper}>
                    <Table arial-label='simple data'>
                        <TableHead>
                            <TableRow>
                                <TableCell>AGENT</TableCell>
                                <TableCell>CLIENT</TableCell>
                                <TableCell>CLIENT ADDRESS</TableCell>
                                <TableCell>STATUS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {evaluations.map(evaluation => (
                                <TableRow key={evaluation.id}>
                                    <TableCell align="left">{evaluation.requirement.agent.profile.firstName} {evaluation.requirement.agent.profile.lastName }</TableCell>
                                    <TableCell align="left">{evaluation.requirement.screening.buyerInformation.name}</TableCell>
                                    <TableCell align="left">{evaluation.requirement.screening.buyerInformation.address}</TableCell>
                                    <TableCell align="left">
                                        <span className={status.getClass(statusConverter.evaluation(evaluation.status))}>{statusConverter.evaluation(evaluation.status)}</span>
                                    </TableCell>
                                    <TableCell align='left'>
                                        <button onClick={() => navigate(`/admin/evaluation/${evaluation.id}`)} className='text-xs uppercase px-3 p-2 text-[#ffc109] font-semibold rounded-md bg-black active:bg-gray-800'>evaluation</button>
                                    </TableCell>
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
