import { ArrowDropDown } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import valueConverter from '../../helpers/valueConverter'
import React from 'react'

export const Screening = ({screening}) => {
  return (
    <div>
        <div className='py-4'>
            <div className='flex mb-3'>
                <h2 className='text-sm text-gray-800 font-semibold'>Screening</h2>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary>
                        <ArrowDropDown/>
                        <h1 className='text-sm font-semibold text-[#ffc109]'>Buyer Information</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div className='flex justify-start items-center space-x-4'>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>Name</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.name}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>address</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.address}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>gender</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.gender == 0 ? 'MALE' : 'FEMALE'}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>Email</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.email}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>contact number</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.contactNumber}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>facebook</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.facebook}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>citizenship</label>
                                            <p className='text-[16px] text-black font-medium'>{screening?.buyerInformation?.citizenship}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>birth date</label>
                                            <p className='text-[16px] text-black font-medium'>{new Date(screening?.buyerInformation?.birthDate).toString()}</p>
                                        </div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>Civil Status</label>
                                            <p className='text-[16px] text-black font-medium'>{valueConverter.civilStatus(screening?.buyerInformation?.civilStatus)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <ArrowDropDown/>
                        <h1 className='text-sm font-semibold text-[#ffc109]'>Document</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>Govt Issued Valid Ids</label>
                                            <div className='w-[15rem]'>
                                                {screening?.document?.standardDocument?.govtIssuedValidIds?.map((id, i) => (
                                                    <img className='w-full h-full rounded-lg' key={i} src={id} alt="" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>Govt Issued Spouse Valid Ids</label>
                                            <div className='w-[15rem]'>
                                                {screening?.document?.standardDocument?.govtIssuedSpouseValidIds?.map((id, i) => (
                                                    <img className='w-full h-full rounded-lg' key={i} src={id} alt="" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2'>
                                            <label className='text-xs text-gray-600 text-[11px] font-semibold uppercase'>TIN Number</label>
                                            <div className='w-[15rem]'>
                                                <img className='w-full h-full rounded-lg' src={screening?.document?.standardDocument?.tinNumber} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </div>
  )
}
