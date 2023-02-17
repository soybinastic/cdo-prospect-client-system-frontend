import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Briefing } from '../../../components/requirement/Briefing'
import { Screening } from '../../../components/requirement/Screening'
import { getOneEvaluation, updateStatus } from '../../../features/evaluation/evaluationSlice'
import { CircularProgress, IconButton, Snackbar } from '@mui/material'
import evaluationService from '../../../services/evaluationService'
import status from '../../../helpers/statusClasses'
import statusConverter from '../../../helpers/statusConverter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const EvaluationForm = () => {

  const [alterRequirementStatus, setAlterRequirementStatus] = useState({
    loading : false,
    success : false,
    statusType : -1,
    showSnackbar : false
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { evaluationId } = useParams()
  const { isError, isSuccess, isLoading, evaluation } = useSelector(state => state.evaluation)

  useEffect(() => {
    dispatch(getOneEvaluation(evaluationId))

  }, [dispatch, evaluationId])

  console.log(evaluation)

  const onAlterStatus = async ({ id, statusValue }) => {
    setAlterRequirementStatus({
      statusType : statusValue,
      loading: true,
    })

    const response = await evaluationService.evaluate({ evaluationId : id, status : statusValue })
    if(response.status == 200){
      setAlterRequirementStatus({
        statusType : statusValue,
        loading: false,
        success : true,
        showSnackbar : true
      })
      dispatch(updateStatus({ statusValue }))
    }else{
      setAlterRequirementStatus({
        statusType : statusValue,
        loading: false,
        success : false,
        showSnackbar : true
      })
    }
  }
  if(isLoading){
    return <div className='flex justify-center items-center pt-28'>
        <CircularProgress color='primary' size={30}/>
    </div>
  }
  return (
    <div>
        <div className='px-6 py-4'>
            <div className='flex justify-between items-center mb-3'>
                <div className='flex items-center'>
                    <IconButton color='primary' onClick={() => navigate('/admin/status-list')}>
                      <ArrowBackIcon/>
                    </IconButton>
                    <h2 className='ml-3 text-xs font-semibold uppercase'>Evaluation Form</h2>
                </div>
                {evaluation && <span title='STATUS' className={status.getClass(statusConverter.evaluation(evaluation?.status))}>{statusConverter.evaluation(evaluation.status)}</span>}
            </div>
            <div>
                <Screening screening={evaluation?.requirement?.screening}/>
                <Briefing/>
                {evaluation?.status == 0 && <div className='flex justify-end items-center'>
                    <div className='flex justify-end space-x-1'>
                        <div className='flex justify-center items-center w-[7rem]'>
                            {(alterRequirementStatus.loading && alterRequirementStatus.statusType === 1) ? <CircularProgress size={25}/> : 
                                <button onClick={() => onAlterStatus({ id: evaluation.id, statusValue : 1 })} className='px-4 py-2 uppercase text-xs font-semibold shadow-md rounded-md bg-[#ffc109] text-black active:bg-[#ffe102]'>approve</button>
                            }
                        </div>
                        <div className='flex justify-center items-center w-[5rem]'>
                            {(alterRequirementStatus.loading && alterRequirementStatus.statusType === 3) ? <CircularProgress size={25}/> : 
                                <button onClick={() => onAlterStatus({ id : evaluation.id, statusValue : 3 })} className='px-4 py-2 uppercase text-xs font-semibold shadow-md rounded-md bg-red-500 text-black active:bg-red-300'>reject</button>
                            }
                        </div>
                    </div>
                </div>}
                <Snackbar
                  open={alterRequirementStatus.showSnackbar}
                  autoHideDuration={5000}
                  message={alterRequirementStatus.success ? (alterRequirementStatus.statusType == 1 ? 
                      'Approved' : 'Rejected') : (alterRequirementStatus.statusType == 1 ?
                          'Failed to Approve' : 'Failed to reject')}
                  onClose={(e, r) => {
                      if("clickaway" === r) return;
                  }}
                />
            </div>
        </div>
    </div>
  )
}
