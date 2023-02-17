import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllRequirements } from '../../../features/requirement/requirementSlice'
import { resetEssentialProp, updateStatus } from '../../../features/requirement/requirementSlice'
import { 
    CircularProgress,
    Table, 
    TableContainer, 
    TableHead, 
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Snackbar } from '@mui/material'
import keys from '../../../constants/keys'
import statusConverter from '../../../helpers/statusConverter'
import { useState } from 'react'
import requirementService from '../../../services/requirementService'
import { useNavigate } from 'react-router-dom'


export const ClientRequirementRecords = () => {

    const [requirementAlterStatus, setRequirementAlterStatus] = useState({
        id : 0,
        loading : false,
        success : false,
        showSnackBar : false
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  { requirements, isSuccess, isLoading } = useSelector(state => state.requirement)

    console.log(requirements)
    useEffect(() => {

        const agentProfileData = JSON.parse(localStorage.getItem(keys.profileKey))
        // console.log(agentProfileData.id)
        dispatch(getAllRequirements({ agentId :  agentProfileData.id}))

        return () => {
            dispatch(resetEssentialProp())
        }
    }, [dispatch])

    const onAlterStatus =  async ({requirementId, statusInput}) => {

        setRequirementAlterStatus({
            id : requirementId,
            loading : true,
            success : false
        })
        const response = await requirementService.alterStatus({ requirementId, statusInput })

        if(response.status == 200){
            setRequirementAlterStatus({
                id : requirementId,
                loading : false,
                success : true,
                showSnackBar : true
            })
            dispatch(updateStatus({ requirementId, status : statusInput, isInList : true }))
        }else{
            setRequirementAlterStatus({
                id : requirementId,
                loading : false,
                success : false,
                showSnackBar : true
            })
        }


    }

    if(isLoading){
        return <div className='flex justify-center items-center py-32'>
            <CircularProgress color='primary'/>
        </div>
    }
  return (
    <div>
        <div className='px-5 py-7'>
            <div className='flex justify-between items-center'>
                <p className='text-sm font-semibold uppercase'>Client Records</p>
            </div>
            <div className='mt-3'>
                <TableContainer component={Paper}>
                    <Table arial-label='simple data'>
                        <TableHead>
                            <TableRow>
                                <TableCell>NAME</TableCell>
                                <TableCell>DATE</TableCell>
                                <TableCell>STATUS</TableCell>
                                <TableCell>ACTIONS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requirements?.map(requirement => (
                                <TableRow key={requirement.id}>
                                    <TableCell align="left">{requirement.screening.buyerInformation.name}</TableCell>
                                    <TableCell align="left">{requirement.screening.date}</TableCell>
                                    <TableCell align="left">{statusConverter.requirement(requirement.status)}</TableCell>
                                    <TableCell align="left">
                                        <div className='flex'>
                                            <div className='flex justify-center items-center w-20'>
                                                {(requirementAlterStatus.id == requirement.id && requirementAlterStatus.loading) ? <CircularProgress color='primary' size={20}/>
                                                : <button disabled={requirement.status != 1} onClick={() => onAlterStatus({ requirementId : requirement.id, statusInput : 4 })} className='px-2 py-2 text-xs uppercase bg-green-400 shadow-md rounded-md text-black hover:bg-green-200 hover:text-gray-700 active:bg-green-100'>forward</button>}
                                            </div>
                                            <button onClick={() => navigate(`/agent/client-requirements/${requirement.id}`)} className='ml-2 px-2 py-2 text-xs uppercase bg-black shadow-md rounded-md text-white hover:bg-gray-700 hover:text-white active:bg-gray-800'>details</button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {requirements?.length < 1 && <h1 className='text-center py-8 font-semibold'>No data found</h1>}
                </TableContainer>
                <Snackbar
                open={requirementAlterStatus.showSnackBar}
                autoHideDuration={5000}
                message={requirementAlterStatus.success ? 'Requirement has been successfully forwarded to admin' : 'Failed to forward'}
                onClose={(e, r) => {
                    if("clickaway" === r) return;
                }}
            />
            </div>
        </div>
    </div>
  )
}
