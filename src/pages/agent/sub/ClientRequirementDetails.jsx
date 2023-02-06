import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Briefing } from '../../../components/requirement/Briefing'
import { Screening } from '../../../components/requirement/Screening'
import { useSelector, useDispatch } from 'react-redux'
import { getOneRequirement, resetEssentialProp, updateStatus } from '../../../features/requirement/requirementSlice'
import { CircularProgress, Snackbar } from '@mui/material'
import { useState } from 'react'
import requirementService from '../../../services/requirementService'

export const ClientRequirementDetails = () => {
    const { requirementId } = useParams()
    const dispatch = useDispatch()
    const [alterRequirementStatus, setAlterRequirementStatus] = useState({
        loading : false,
        isSuccess : false,
        showSnackbar : false,
        statusType : -1
    })

    const { isSuccess, isError, isLoading, requirement } = useSelector(state => state.requirement)

    useEffect(() => {
        dispatch(getOneRequirement(requirementId))

        return () => {
            dispatch(resetEssentialProp())
        }
    }, [dispatch])

    console.log(requirementId)
    console.log(requirement)

    const onAlterStatus = async ({id, statusValue}) => {
        setAlterRequirementStatus({
            loading : true,
            statusType: statusValue,
        })

        const response = await requirementService.alterStatus({ requirementId : id, statusInput : statusValue })
        if(response.status == 200){
            setAlterRequirementStatus({
                loading : false,
                isSuccess : true,
                showSnackbar : true,
                statusType : statusValue
            })
            dispatch(updateStatus({ requirementId, status : statusValue, isInList : false }))
        }else{
            setAlterRequirementStatus({
                loading : false,
                isSuccess : false,
                showSnackbar : true,
                statusType : statusValue
            })
        }
    }

    if(isLoading){
        return <div className='flex justify-center items-center pt-20'>
            <CircularProgress color='primary' size={40}/>
        </div>
    }
  return (
    <div>
        {requirement ? <div className='px-6 py-5'>
            <div className='flex justify-between items-center'>
                {`${requirement?.screening?.buyerInformation?.name}'s`} Requirment
            </div>

            <div>
                <Screening screening={requirement?.screening}/>
                <Briefing/>
                <div className='flex justify-end items-center'>
                    <div className='flex justify-end space-x-1'>
                        {(requirement.status === 2 || requirement.status === 1) && <div className='flex justify-center items-center w-[7rem]'>
                            {(alterRequirementStatus.loading && alterRequirementStatus.statusType === 4) ? <CircularProgress size={25}/> : 
                                <button onClick={() => onAlterStatus({ id: requirement.id, statusValue : 4 })} className='px-4 py-2 uppercase text-xs font-semibold shadow-md rounded-md bg-[#ffc109] text-black active:bg-[#ffe102]'>forward</button>
                            }
                        </div>}
                        {requirement.status === 4 && <div className='flex justify-center items-center w-[5rem]'>
                            {(alterRequirementStatus.loading && alterRequirementStatus.statusType === 2) ? <CircularProgress size={25}/> : 
                                <button onClick={() => onAlterStatus({ id : requirement.id, statusValue : 2 })} className='px-4 py-2 uppercase text-xs font-semibold shadow-md rounded-md bg-red-500 text-black active:bg-red-300'>cancel</button>
                            }
                        </div>}
                    </div>
                </div>
            </div>
            <Snackbar
                open={alterRequirementStatus.showSnackbar}
                autoHideDuration={5000}
                message={alterRequirementStatus.isSuccess ? (alterRequirementStatus.statusType == 4 ? 
                    'Requirement has been successfully forwarded to admin' : 'Cancelled successfully') : (alterRequirementStatus.statusType == 4 ?
                        'Failed to forward' : 'Failed to cancel')}
                onClose={(e, r) => {
                    if("clickaway" === r) return;
                }}
            />
        </div> : <>Not found</>}
    </div>
  )
}
