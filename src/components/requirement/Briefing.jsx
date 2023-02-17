import { ArrowDropDown } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

export const Briefing = (props) => {
  return (
    <div>
        <div className='py-4'>
            <div className='flex mb-3'>
                <h2 className='text-sm text-gray-800 font-semibold'>Briefing</h2>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary>
                        <ArrowDropDown/>
                        <h1>Buyer Information</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div>
                                    John Doe
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary>
                        <ArrowDropDown/>
                        <h1>Document</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='flex'>
                            <div className='flex flex-col'>
                                <div>
                                    Valid Id
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
