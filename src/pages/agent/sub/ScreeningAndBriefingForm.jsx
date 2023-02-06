
import InputField from '../../../components/common/form-fields/InputField'
import { FilePresent, ErrorOutline } from '@mui/icons-material'
import { Checkbox, Divider, FormControlLabel, Radio, RadioGroup, TextField, CircularProgress, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { FilePicker } from '../../../components/common/FilePicker'
import { Form, Field, Formik } from 'formik'
import initialValues from '../../../components/agent/form-models/requirement/initialValues'
import validationScheme from '../../../components/agent/form-models/requirement/validator'
import requirementFormModel from '../../../components/agent/form-models/requirement/requirementFormModel'
import { useSelector, useDispatch } from 'react-redux'
import { submitRequirements, getAllRequirements } from '../../../features/requirement/requirementSlice'
import keys from '../../../constants/keys'
const {
    formId,
    formFields : {
        buyerName,
        buyerAddress,
        buyerBirthDate,
        buyerContactNo,
        buyerCitizenship,
        buyerEmailAddress,
        buyerFacebook,
        buyerGender,
        buyerCivilStatus,
        buyerTitlingInstruction,
        buyerTitlingInstructionOther,
        buyerFinancing,
        buyerNegativeDataBankRecordsCancelledCreditCards,
        buyerNegativeDataBankRecordsBouncedChecks,
        buyerNegativeDataBankRecordsPendingCourtCases,
        buyerNegativeDataBankRecordsUnpaidTelecomBill,
        buyerNegativeDataBankRecordsOthers,
        buyerPagIbigMembership,
        buyerPagIbigMembershipNumberOfYears,
        buyerPagIbigMembershipUpdated,
        buyerPagIbigMembershipWOHML,
        buyerPagIbigMembershipWFHL,
        buyerEmployerDetailsCompanyName,
        buyerEmployerDetailsAddress,
        buyerEmployerDetailsContactNo,
        buyerEmployerDetailsEmailAdress,
        buyerEmployerDetailsImmediateSuperior,
        documentValidIds,
        documentSpouseValidIds,
        documentTINNumber,
        documentBirthCertificate,
        documentMarriageCertificate,
        documentClearOneByOnePicture,
        documentProofOfMailingOrBilling,
        documentPostDatedChecks,
        documentAAR,
        documentSPA,
        documentBankAndPagIbigSPA,
        documentOAAC,
        documentOthers,
        documentLocallyEmployedNCEC,
        documentLocallyEmployedLatestITR,
        documentLocallyEmployed3MonthsOfPayslips,
        documentSelfEmployedFormalAFS,
        documentSelfEmployedFormalLatest6monsBankStatements,
        documentSelfEmployedFormalLatestITR,
        documentSelfEmployedInformalCOEwithIdSignatory,
        documentSelfEmployedInformalCOEwithOtherAttachment,
        documentOFWCountry,
        documentOFWNCEC,
        documentOFW3MonsPayslipsOrRemittance,
        documentOFWBankStatements,
        documentOFWPassportWithEntryExit,
        computationSellingPrice,
        computationDiscount,
        computationNetSellingPrice,
        computationTaxesAndFees,
        computationTotalReceivable,
        computationNumberOfDownpayments,
        computationEstimatedMonthlyAmortization,
        computationGrossIncome,
        computationMonthlyIncomeRatio,
        computationRemarks,
        screeningInterviewedBy,
        screeningConforme,
        briefingReservationDate,
        briefingSalesChannel,
        briefingProjectName,
        briefingPH,
        briefingLot,
        briefingBlock,
        briefingBroker,
        briefingDirectSeller,
        briefingFinancing,
        briefingReservationDocuments,
        briefingReferenceNumber,
        briefingConforme,
        briefingBriefedBy,
        briefingWitness,
    }
} = requirementFormModel;

export const ScreeningAndBriefingForm = () => {
    const dispatch = useDispatch()
    const { data : dataResponse, errors, isLoading, isSuccess, isError } = useSelector(state => state.requirement)

    const [titlingInstructionFillUp, setTitlingInstructionFillUp] = useState({
        name : '',
        texttFieldOpen : false
    })
    console.log(errors)
    const onSelectTitlingInstructionFillUp = (fieldName) => {
        if(fieldName == 1){
            setTitlingInstructionFillUp({
                name : 'marriedto',
                texttFieldOpen : true
            })
        }else if(fieldName == 3){
            setTitlingInstructionFillUp({
                name : 'co-owners',
                texttFieldOpen : true
            })
        }else{
            setTitlingInstructionFillUp({
                name : '',
                texttFieldOpen : false
            })
        }
    }
    const handleSubmit = (values, actions) => {
        console.log(values)
        const agent = localStorage.getItem(keys.profileKey)
        if(agent == null) return;
        console.log(values[documentOthers.name])
        const formData = data(values)
        dispatch(submitRequirements(formData))
    }
    const data = (values) => {

        const agentProfile = JSON.parse(localStorage.getItem(keys.profileKey))
        const agentId = agentProfile.id;

        const briefing = 'briefing'
        const screening = 'screening'
        const buyerInfo = 'buyerInformation'
        const document = 'document'
        const standardDoc = 'standardDocument'
        const computation = 'computation'

        const formData = new FormData();
        formData.append('agentId', agentId);
        formData.append(`${briefing}.block`, values[briefingBlock.name])
        formData.append(`${briefing}.broker`, values[briefingBroker.name])
        formData.append(`${briefing}.directSeller`, values[briefingDirectSeller.name])
        formData.append(`${briefing}.lot`, values[briefingLot.name])
        formData.append(`${briefing}.ph`, values[briefingPH.name])
        formData.append(`${briefing}.projectName`, values[briefingProjectName.name])
        formData.append(`${briefing}.referenceNumber`, values[briefingReferenceNumber.name])
        formData.append(`${briefing}.salesChannel`, values[briefingSalesChannel.name])
        formData.append(`${screening}.${buyerInfo}.address`, values[buyerAddress.name])
        formData.append(`${screening}.${buyerInfo}.birthDate`, values[buyerBirthDate.name])
        formData.append(`${screening}.${buyerInfo}.citizenship`, values[buyerCitizenship.name])
        formData.append(`${screening}.${buyerInfo}.civilStatus`, values[buyerCivilStatus.name])
        formData.append(`${screening}.${buyerInfo}.contactNumber`, values[buyerContactNo.name])
        formData.append(`${screening}.${buyerInfo}.email`, values[buyerEmailAddress.name])
        formData.append(`${screening}.${buyerInfo}.employerDetail.address`, values[buyerEmployerDetailsAddress.name])
        formData.append(`${screening}.${buyerInfo}.employerDetail.companyName`, values[buyerEmployerDetailsCompanyName.name])
        formData.append(`${screening}.${buyerInfo}.employerDetail.contactNumber`, values[buyerEmployerDetailsContactNo.name])
        formData.append(`${screening}.${buyerInfo}.employerDetail.email`, values[buyerEmployerDetailsEmailAdress.name])
        formData.append(`${screening}.${buyerInfo}.employerDetail.immedaiteSuperior`, values[buyerEmployerDetailsImmediateSuperior.name])
        formData.append(`${screening}.${buyerInfo}.facebook`, values[buyerFacebook.name])
        formData.append(`${screening}.${buyerInfo}.gender`, values[buyerGender.name])
        formData.append(`${screening}.${buyerInfo}.name`, values[buyerName.name])
        formData.append(`${screening}.${buyerInfo}.titlingInstruction.titlingInstructionOption`, values[buyerTitlingInstruction.name])
        formData.append(`${screening}.${buyerInfo}.titlingInstruction.data`, values[buyerTitlingInstructionOther.name] === 'none' ? '' : values[buyerTitlingInstructionOther.name])
        formData.append(`${screening}.${buyerInfo}.negativeDataBankRecord.cancelledCreditCard`,values[buyerNegativeDataBankRecordsCancelledCreditCards.name])
        formData.append(`${screening}.${buyerInfo}.negativeDataBankRecord.bouncedCheck`, values[buyerNegativeDataBankRecordsBouncedChecks.name])
        formData.append(`${screening}.${buyerInfo}.negativeDataBankRecord.pendingCourtCases`, values[buyerNegativeDataBankRecordsPendingCourtCases.name])
        formData.append(`${screening}.${buyerInfo}.negativeDataBankRecord.unpaidTelecomBill`, values[buyerNegativeDataBankRecordsUnpaidTelecomBill.name])
        formData.append(`${screening}.${buyerInfo}.negativeDataBankRecord.others`, values[buyerNegativeDataBankRecordsOthers.name])
        formData.append(`${screening}.${buyerInfo}.pagIbigMembership.pagIBIGMembership`, values[buyerPagIbigMembership.name])
        formData.append(`${screening}.${buyerInfo}.pagIbigMembership.numberOfYears`, values[buyerPagIbigMembershipNumberOfYears.name])
        formData.append(`${screening}.${buyerInfo}.pagIbigMembership.wohml`, values[buyerPagIbigMembershipWOHML.name])
        formData.append(`${screening}.${buyerInfo}.pagIbigMembership.updated`, values[buyerPagIbigMembershipUpdated.name])
        formData.append(`${screening}.${buyerInfo}.pagIbigMembership.wfhl`, values[buyerPagIbigMembershipWFHL.name])

        for(let file of values[documentValidIds.name]){
            formData.append(`${screening}.${document}.${standardDoc}.govtIssuedValidIds`, file, file['name'])
        }

        for(let file of values[documentSpouseValidIds.name]){
            formData.append(`${screening}.${document}.${standardDoc}.govtIssuedSpouseValidIds`, file, file['name'])
        }
        
        formData.append(`${screening}.${document}.${standardDoc}.TINNumber`, values[documentTINNumber.name], values[documentTINNumber.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.birthCertificate`, values[documentBirthCertificate.name], values[documentBirthCertificate.name]['name'])
        if(values[documentMarriageCertificate.name] !== '') {
            formData.append(`${screening}.${document}.${standardDoc}.marriageCertificate`, values[documentMarriageCertificate.name], values[documentMarriageCertificate.name]['name'])
        }
        console.log(values[documentMarriageCertificate.name] === '')
        formData.append(`${screening}.${document}.${standardDoc}.clearOneByOnePicture`, values[documentClearOneByOnePicture.name], values[documentClearOneByOnePicture.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.proofOfMailingOrBilling`, values[documentProofOfMailingOrBilling.name], values[documentProofOfMailingOrBilling.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.postDatedChecks`, values[documentPostDatedChecks.name], values[documentPostDatedChecks.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.authorizeRepresentative`, values[documentAAR.name], values[documentAAR.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.spaNotarizedAndConsularized`, values[documentSPA.name], values[documentSPA.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.bankAndPagIbigSPA`, values[documentBankAndPagIbigSPA.name], values[documentBankAndPagIbigSPA.name]['name'])
        formData.append(`${screening}.${document}.${standardDoc}.oathOfAllegianceOrAffidavitOfCitizenship`, values[documentOAAC.name], values[documentOAAC.name]['name'])
        if(values[documentOthers.name] !== ''){
            formData.append(`${screening}.${document}.${standardDoc}.others`, values[documentOthers.name], values[documentOthers.name]['name'])
        }
        console.log(values[documentOthers.name] === '')
        
        formData.append(`${screening}.${document}.sourceOfIncome.locallyEmployed.compensation`, values[documentLocallyEmployedNCEC.name])
        formData.append(`${screening}.${document}.sourceOfIncome.locallyEmployed.latestITR`, values[documentLocallyEmployedLatestITR.name])
        formData.append(`${screening}.${document}.sourceOfIncome.locallyEmployed.threeMonthsOfPayslips`, values[documentLocallyEmployed3MonthsOfPayslips.name])
        formData.append(`${screening}.${document}.sourceOfIncome.selfEmployed.formal.latest2YearsITR`, values[documentSelfEmployedFormalLatestITR.name])
        formData.append(`${screening}.${document}.sourceOfIncome.selfEmployed.formal.latest2YearsAFS`, values[documentSelfEmployedFormalAFS.name])
        formData.append(`${screening}.${document}.sourceOfIncome.selfEmployed.formal.latest6MonthsBankStatements`, values[documentSelfEmployedFormalLatest6monsBankStatements.name])
        formData.append(`${screening}.${document}.sourceOfIncome.selfEmployed.informal.coeIdOfSignatory`, values[documentSelfEmployedInformalCOEwithIdSignatory.name])
        formData.append(`${screening}.${document}.sourceOfIncome.selfEmployed.informal.coeOtherAttachments`, values[documentSelfEmployedInformalCOEwithOtherAttachment.name])
        formData.append(`${screening}.${document}.sourceOfIncome.overseasFilipinoWorker.country`, values[documentOFWCountry.name])
        formData.append(`${screening}.${document}.sourceOfIncome.overseasFilipinoWorker.ncec`, values[documentOFWNCEC.name])
        formData.append(`${screening}.${document}.sourceOfIncome.overseasFilipinoWorker.threeMonthsPayslipsOrRemittance`, values[documentOFW3MonsPayslipsOrRemittance.name])
        formData.append(`${screening}.${document}.sourceOfIncome.overseasFilipinoWorker.bankStatements`, values[documentOFWBankStatements.name])
        formData.append(`${screening}.${document}.sourceOfIncome.overseasFilipinoWorker.passportWithEntryAndExit`, values[documentOFWPassportWithEntryExit.name])
        formData.append(`${screening}.${computation}.sellingPrice`, values[computationSellingPrice.name])
        formData.append(`${screening}.${computation}.discount`, values[computationDiscount.name])
        formData.append(`${screening}.${computation}.netSellingPrice`, values[computationNetSellingPrice.name])
        formData.append(`${screening}.${computation}.taxesAndFees`, values[computationTaxesAndFees.name])
        formData.append(`${screening}.${computation}.totalReceivable`, values[computationTotalReceivable.name])
        formData.append(`${screening}.${computation}.numberOfDownpayments`, values[computationNumberOfDownpayments.name])
        formData.append(`${screening}.${computation}.ema`, values[computationEstimatedMonthlyAmortization.name])
        formData.append(`${screening}.${computation}.grossIncome`, values[computationGrossIncome.name])
        formData.append(`${screening}.${computation}.monthlyIncomeRatio`, values[computationMonthlyIncomeRatio.name])
        formData.append(`${screening}.interviewedBy`, values[screeningInterviewedBy.name], values[screeningInterviewedBy.name]['name'])
        formData.append(`${screening}.conforme`, values[screeningConforme.name], values[screeningConforme.name]['name'])
        formData.append(`${screening}.remarks`, values[computationRemarks.name])
        formData.append(`${briefing}.reservationDate`, values[briefingReservationDate.name])
        formData.append(`${briefing}.financing`, values[briefingFinancing.name])
        formData.append(`${briefing}.reservationDocuments`, values[briefingReservationDocuments.name])
        formData.append(`${briefing}.conforme`, values[briefingConforme.name], values[briefingConforme.name]['name'])
        formData.append(`${briefing}.briefedBy`, values[briefingBriefedBy.name], values[briefingBriefedBy.name]['name'])
        formData.append(`${briefing}.witness`, values[briefingWitness.name], values[briefingWitness.name]['name'])
        formData.append(`${briefing}.date`, new Date().toISOString())
        formData.append(`${screening}.${buyerInfo}.financing`, values[buyerFinancing.name])

        return formData;
    }
  return (
    <div className='w-full px-7 py-3'>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationScheme}
            onSubmit={handleSubmit}>
            {({ errors, touched, setFieldValue, handleSubmit, isSubmitting }) => (
                <Form id={formId} onSubmit={handleSubmit}>
                <h1 className='text-lg font-semibold uppercase text-center mt-5 mb-3'>Screening</h1>
                <div className='px-7 py-6 border-2 border-[#ffc109] rounded-lg'>
                    <h4 className='text-xs font-semibold mb-5 uppercase'>Buyer's Information</h4>
                    <div className='flex flex-col'>
                        <div className='flex items-center'>
                            <div className='w-full mr-2'>
                                <div className='mb-3'>
                                    {/* <TextField type="text" size="small" fullWidth label="First Name"/> */}
                                    <InputField name={buyerName.name} type="text" label="Name" fullWidth size="small"/>
                                </div>
                                <div className='mb-3'>
                                    {/* <TextField type="text" size="small" fullWidth label="Address"/> */}
                                    <InputField name={buyerAddress.name} type="text" label="Address" fullWidth size="small"/>
                                </div>
                                <div className='mb-3'>
                                    {/* <TextField type="date" size="small" fullWidth label="Birth Date" InputLabelProps={{ shrink : true }} /> */}
                                    <InputField name={buyerBirthDate.name} type="date" label="Birth Date" InputLabelProps={{ shrink : true }} fullWidth size="small"/>
                                </div>
                                <div>
                                    <p className='text-xs'>Gender</p>
                                    <RadioGroup row name={buyerGender.name} onChange={(e) => setFieldValue(buyerGender.name, e.target.value)}>
                                        <FormControlLabel value={1} control={<Radio size='small'/>} label="Female"/>
                                        <FormControlLabel value={0} control={<Radio size='small'/>} label="Male"/>
                                    </RadioGroup>
                                    {errors[buyerGender.name] && touched[buyerGender.name] ? (<small className='text-red-700'>{errors[buyerGender.name]}</small>) : null}
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='mb-3'>
                                    {/* <TextField type="text" size="small" fullWidth label="Contact no"/> */}
                                    <InputField name={buyerContactNo.name} type="text" label="Contact no" fullWidth size="small"/>
                                </div>
                                <div className='mb-3'>
                                    {/* <TextField type="text" size="small" fullWidth label="Citizenship"/> */}
                                    <InputField name={buyerCitizenship.name} type="text" label="Citizenship" fullWidth size="small"/>
                                </div>
                                <div className='mb-3'>
                                    {/* <TextField type="text" size="small" fullWidth label="Facebook"/> */}
                                    <InputField name={buyerFacebook.name} type="text" label="Facebook" fullWidth size="small"/>
                                </div>
                                <div className='mb-3'>
                                    {/* <TextField type="email" size="small" fullWidth label="Email Address"/> */}
                                    <InputField name={buyerEmailAddress.name} type="email" label="Email Address" fullWidth size="small"/>
                                </div>
                            </div>
                        </div>
                        {/* <Divider className='my-5'/> */}
                        <hr className='my-5' />
                        <div className='flex justify-center'>
                            <div className='w-full'>
                                <p className='text-xs font-semibold'>Civil Status</p>
                                <RadioGroup name={buyerCivilStatus.name} onChange={(e) => setFieldValue(buyerCivilStatus.name, e.target.value)}>
                                    <FormControlLabel value={0} control={<Radio size='small'/>} label="Single"/>
                                    <FormControlLabel value={1} control={<Radio size='small'/>} label="Married"/>
                                    <FormControlLabel value={2} control={<Radio size='small'/>} label="Widow/Widower"/>
                                    <FormControlLabel value={3} control={<Radio size='small'/>} label="Legally Separated"/>
                                </RadioGroup>
                                {errors[buyerCivilStatus.name] && touched[buyerCivilStatus.name] ? (<small className='text-red-700'>{errors[buyerCivilStatus.name]}</small>) : null}
                            </div>
                            <div className='w-full px-4'>
                                <p className='text-xs font-semibold'>Titling Instructions:</p>
                                <div>
                                    
                                    <RadioGroup row onChange={(e) => {
                                        onSelectTitlingInstructionFillUp(e.target.value)
                                        if(e.target.value == 1 || e.target.value == 3){
                                            setFieldValue(buyerTitlingInstructionOther.name, '')
                                        }else{
                                            setFieldValue(buyerTitlingInstructionOther.name, 'none')
                                        }

                                        setFieldValue(buyerTitlingInstruction.name, e.target.value)
                                    }}>
                                        <div className='mb-2'>
                                            <p className='text-xs text-gray-600'>Solely in my name:</p>
                                            <FormControlLabel value={0} control={<Radio size='small'/>} label="Individual"/>
                                            <FormControlLabel value={1} control={<Radio size='small'/>} label="Married to:"/>
                                            {(titlingInstructionFillUp.name === 'marriedto' && 
                                                titlingInstructionFillUp.texttFieldOpen) && <InputField name={buyerTitlingInstructionOther.name} size='small' label='Married to' type={'text'} fullWidth/>}
                                        </div>
                                        <div>
                                            <p className='text-xs text-gray-600'>In our names:</p>
                                            <FormControlLabel value={2} control={<Radio size='small'/>} label="Spouses"/>
                                            <FormControlLabel value={3} control={<Radio size='small'/>} label="Co-Owners:"/>
                                            {(titlingInstructionFillUp.name === 'co-owners' && 
                                                titlingInstructionFillUp.texttFieldOpen) && <InputField name={buyerTitlingInstructionOther.name} size='small' label='Co-Owners' type={'text'} fullWidth/>}
                                        </div>
                                    </RadioGroup>
                                    {errors[buyerTitlingInstruction.name] && touched[buyerTitlingInstruction.name] ? (<small className='text-red-700'>{errors[buyerTitlingInstruction.name]}</small>) : null}
                                </div>
                            </div>
                            <div className="w-full">
                                <p className='text-xs font-semibold'>Financing:</p>
                                <div>
                                    <RadioGroup name={buyerFinancing.name} onChange={(e) => setFieldValue(buyerFinancing.name, e.target.value)}>
                                        <FormControlLabel value={0} label="Cash" control={<Radio size='small' />}/>
                                        <FormControlLabel value={1} label="Pag-Ibig" control={<Radio size='small' />}/>
                                        <FormControlLabel value={2} label="Bank" control={<Radio size='small' />}/>
                                        <FormControlLabel value={3} label="Deffered" control={<Radio size='small' />}/>
                                    </RadioGroup>
                                    {errors[buyerFinancing.name] && touched[buyerFinancing.name] ? (<small className='text-red-700'>{errors[buyerFinancing.name]}</small>) : null}
                                </div>
                            </div>
                        </div>
                        <hr className='my-5'/>
                        <div className='flex justify-center'>
                            <div className='w-full'>
                                <p className='text-xs font-semibold'>Negative Data Bank Records:</p>
                                <div className='flex flex-col'>
                                    <FormControlLabel label="Cancelled Credit Card/s" control={<Checkbox size='small' onChange={(e) => setFieldValue(buyerNegativeDataBankRecordsCancelledCreditCards.name, e.target.checked)} />}/>
                                    <FormControlLabel label="Bounced Check/s" control={<Checkbox size='small' onChange={(e) => setFieldValue(buyerNegativeDataBankRecordsBouncedChecks.name, e.target.value)} />}/>
                                    <FormControlLabel label="Pending Court Cases" control={<Checkbox size='small' onChange={(e) => setFieldValue(buyerNegativeDataBankRecordsPendingCourtCases.name, e.target.checked)}/>}/>
                                    <FormControlLabel label="Unpaid Telecom Bill" control={<Checkbox size='small' onChange={(e) => setFieldValue(buyerNegativeDataBankRecordsUnpaidTelecomBill.name, e.target.checked)}/>}/>
                                    {/* <TextField multiline label="Others" size='small' type="text"/> */}
                                    <InputField name={buyerNegativeDataBankRecordsOthers.name} type="text" multiline label="Others" fullWidth size="small"/>
                                </div>
                            </div>
                            <div className='w-full px-3'>
                                <p className='text-xs font-semibold'>Pag-IBIG Memberships:</p>
                                <div className='flex flex-col'>
                                    <div className='flex py-2 items-center justify-between'>
                                        <p className='text-xs text-gray-600'>Pag-IBIG Membership?</p>
                                        <RadioGroup row className='ml-2' onChange={(e) => setFieldValue(buyerPagIbigMembership.name, e.target.value)}>
                                            <FormControlLabel value={true} label="YES" control={<Radio size='small' />}/>
                                            <FormControlLabel value={false} label="NO" control={<Radio size='small' />}/>
                                        </RadioGroup>
                                        {errors[buyerPagIbigMembership.name] && touched[buyerPagIbigMembership.name] ? (<small className='text-red-700'>{errors[buyerPagIbigMembership.name]}</small>) : null}
                                    </div>
                                    <div className='flex py-2 items-center justify-between'>
                                        <p className='text-xs text-gray-600 nowrap'>Number of Years:</p>
                                        <InputField name={buyerPagIbigMembershipNumberOfYears.name} className="ml-2" type={'number'} fullWidth size='small' label="Number of Years"/>
                                    </div>
                                    
                                    <div className='flex py-2 items-center justify-between'>
                                        <p className='text-xs text-gray-600'>With Outstanding Housing/Multipurpose Loan</p>
                                        <RadioGroup row className="ml-2" onChange={(e) => setFieldValue(buyerPagIbigMembershipWOHML.name, e.target.value)}>
                                            <FormControlLabel value={true} label="YES" control={<Radio size='small' />}/>
                                            <FormControlLabel value={false} label="NO" control={<Radio size='small' />}/>
                                        </RadioGroup>
                                        {errors[buyerPagIbigMembershipWOHML.name] && touched[buyerPagIbigMembershipWOHML.name] ? (<small className='text-red-700'>{errors[buyerPagIbigMembershipWOHML.name]}</small>) : null}
                                    </div>
                                    <div className='flex py-2 items-center justify-between'>
                                        <p className='text-xs text-gray-600'>Updated?</p>
                                        <RadioGroup row className="ml-2" onChange={(e) => setFieldValue(buyerPagIbigMembershipUpdated.name, e.target.value)}>
                                            <FormControlLabel value={true} label="YES" control={<Radio size='small' />}/>
                                            <FormControlLabel value={false} label="NO" control={<Radio size='small' />}/>
                                        </RadioGroup>
                                        {errors[buyerPagIbigMembershipUpdated.name] && touched[buyerPagIbigMembershipUpdated.name] ? (<small className='text-red-700'>{errors[buyerPagIbigMembershipUpdated.name]}</small>) : null}
                                    </div>
                                    <div className='flex py-2 items-center justify-between'>
                                        <p className='text-xs text-gray-600'>With Foreclosed Housing Loan</p>
                                        <RadioGroup row className="ml-2" onChange={(e) => setFieldValue(buyerPagIbigMembershipWFHL.name, e.target.value)}>
                                            <FormControlLabel value={true} label="YES" control={<Radio size='small' />}/>
                                            <FormControlLabel value={false} label="NO" control={<Radio size='small' />}/>
                                        </RadioGroup>
                                        {errors[buyerPagIbigMembershipWFHL.name] && touched[buyerPagIbigMembershipWFHL.name] ? (<small className='text-red-700'>{errors[buyerPagIbigMembershipWFHL.name]}</small>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full px-2'>
                                <p className='text-xs font-semibold'>Employer's Details</p>
                                <div className='mt-2'>
                                    <div className='mb-2'>
                                        <InputField name={buyerEmployerDetailsCompanyName.name} label="Company Name" type={'text'} size="small" fullWidth/>
                                    </div>
                                    <div className="mb-2">
                                        <InputField name={buyerEmployerDetailsAddress.name} label="Address" type={'text'} size="small" fullWidth/>
                                    </div>
                                    <div className="mb-2">
                                        <InputField name={buyerEmployerDetailsContactNo.name} label="Contact Number" type={'text'} size="small" fullWidth/>
                                    </div>
                                    <div className='mb-2'>
                                        <InputField name={buyerEmployerDetailsImmediateSuperior.name} label="Immediate Superior" type={'text'} size="small" fullWidth/>
                                    </div>
                                    {/* <div className='mb-2'>
                                        <TextField label="Contact Number" type={'text'} size="small" fullWidth/>
                                    </div> */}
                                    <div className='mb-2'>
                                        <InputField name={buyerEmployerDetailsEmailAdress.name} label="Email Address" type={'text'} size="small" fullWidth/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='px-7 py-6 border-2 border-[#ffc109] rounded-lg mt-2'>
                    <h4 className='text-xs font-semibold mb-5 uppercase'>Documents</h4>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <div className='flex mb-5'>
                                <div className='flex flex-col mr-6'>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Valid IDs (2 govt issued)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            console.log(e.length)
                                            if(e.length < 1) return;
                                            setFieldValue(documentValidIds.name, e)
                                        }} fileOpts={{ multiple : true }}/>
                                        {errors[documentValidIds.name] && touched[documentValidIds.name] ? (<small className='text-red-700'>{errors[documentValidIds.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Spouses Valid IDs (2 govt issued)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            setFieldValue(documentSpouseValidIds.name, e)
                                        }} fileOpts={{ multiple : true }}/>
                                        {errors[documentSpouseValidIds.name] && touched[documentSpouseValidIds.name] ? (<small className='text-red-700'>{errors[documentSpouseValidIds.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>TIN Number</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            console.log(e[0] === undefined)
                                            setFieldValue(documentTINNumber.name, e[0])
                                        }} />
                                        {errors[documentTINNumber.name] && touched[documentTINNumber.name] ? (<small className='text-red-700'>{errors[documentTINNumber.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Birth Certificate</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            setFieldValue(documentBirthCertificate.name, e[0])
                                        }} />
                                        {errors[documentBirthCertificate.name] && touched[documentBirthCertificate.name] ? (<small className='text-red-700'>{errors[documentBirthCertificate.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Marriage Certificate (if married)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => setFieldValue(documentMarriageCertificate.name, e[0])} />
                                        {/* {errors[documentBirthCertificate.name] && touched[documentBirthCertificate.name] ? (<small className='text-red-700'>{errors[documentBirthCertificate.name]}</small>) : null} */}
                                    </div>
                                </div>
                                <hr className='my-5'/>
                                <div className='flex flex-col'>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Clear 1x1 picture (with white background)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            if(e?.length < 1) return;
                                            setFieldValue(documentClearOneByOnePicture.name, e[0])
                                        }}/>
                                        {errors[documentClearOneByOnePicture.name] && touched[documentClearOneByOnePicture.name] ? (<small className='text-red-700'>{errors[documentClearOneByOnePicture.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Proof of Mailing/Billing</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            if(e?.length < 1) return;
                                            setFieldValue(documentProofOfMailingOrBilling.name, e[0])
                                        }}/>
                                        {errors[documentProofOfMailingOrBilling.name] && touched[documentProofOfMailingOrBilling.name] ? (<small className='text-red-700'>{errors[documentProofOfMailingOrBilling.name]}</small>) : null}
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Post Dated Checks (PDC)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => {
                                            if(e?.length < 1) return;
                                            setFieldValue(documentPostDatedChecks.name, e[0])
                                        }}/>
                                        <p className='text-xs text-gray-500 mt-1'>
                                            for Monthly Downpayment (Poll-End <br></br> and Gemell units and Deffered financing) <br></br>
                                            and Monthly Amortization (Pag-IBIG financing)
                                        </p>
                                        {errors[documentPostDatedChecks.name] && touched[documentPostDatedChecks.name] ? (<small className='text-red-700'>{errors[documentPostDatedChecks.name]}</small>) : null}
                                    </div>
                                    {/* <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Spouses Valid IDs (2 govt issued)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => console.log(e)} fileOpts={{ multiple : true }}/>
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Birth Certificate</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => console.log(e)} />
                                    </div>
                                    <div className='py-2'>
                                        <p className='text-xs text-gray-600 mb-2'>Marriage Certificate (if mirried)</p>
                                        <FilePicker icon={<FilePresent/>} getData={(e) => console.log(e)} />
                                    </div> */}
                                </div>
                            </div>
                            <div>
                                <p className='text-xs font-semibold text-gray-700 uppercase'>Other Documents if Applicable:</p>
                                <div className='flex'>
                                    <div className='flex flex-col mr-6'>
                                        <div className='py-2'>
                                            <p className='text-xs text-gray-600 mb-2'>AAR (Authorize Representative)</p>
                                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                                if(e?.length < 1) return;
                                                setFieldValue(documentAAR.name, e[0])
                                            }}/>
                                            {errors[documentAAR.name] && touched[documentAAR.name] ? (<small className='text-red-700'>{errors[documentAAR.name]}</small>) : null}
                                        </div>
                                        <div className='py-2'>
                                            <p className='text-xs text-gray-600 mb-2'>SPA (Special Power of Attorney) 
                                            <br></br>Notarize/Consularized</p>
                                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                                if(e?.length < 1) return;
                                                setFieldValue(documentSPA.name, e[0])
                                            }}/>
                                            {errors[documentSPA.name] && touched[documentSPA.name] ? (<small className='text-red-700'>{errors[documentSPA.name]}</small>) : null}
                                        </div>
                                    </div>
                                    <div className='flex flex-col mr-6'>
                                        <div className='py-2'>
                                            <p className='text-xs text-gray-600 mb-2'>Bank and Pag-IBIG SPA (Special <br></br>
                                            Power of Attorney)</p>
                                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                                if(e?.length < 1) return;
                                                setFieldValue(documentBankAndPagIbigSPA.name, e[0])
                                            }}/>
                                            {errors[documentBankAndPagIbigSPA.name] && touched[documentBankAndPagIbigSPA.name] ? (<small className='text-red-700'>{errors[documentBankAndPagIbigSPA.name]}</small>) : null}
                                        </div>
                                        <div className='py-2'>
                                            <p className='text-xs text-gray-600 mb-2'>Oath og Allegiance/ 
                                            <br></br>Affidavit of Citizenship</p>
                                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                                if(e?.length < 1) return;
                                                setFieldValue(documentOAAC.name, e[0])
                                            }}/>
                                            {errors[documentOAAC.name] && touched[documentOAAC.name] ? (<small className='text-red-700'>{errors[documentOAAC.name]}</small>) : null}
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='py-2'>
                                            <p className='text-xs text-gray-600 mb-2'>Others:</p>
                                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                                if(e?.length < 1) return;
                                                setFieldValue(documentOthers.name, e[0]);
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5">
                            <div className="flex">
                                <div className='flex flex-col'>
                                    <div className='flex flex-col'>
                                        <p className='text-xs font-semibold text-gray-600 mb-2 uppercase'>Locally Employed:</p>
                                        <div className='flex flex-col'>
                                            <div className='w-full mb-3'>
                                                <p className='text-xs text-gray-600'>Notarized Certificate of Employment with <br></br>Compensation (COEC)</p>
                                                <RadioGroup row onChange={(e) => setFieldValue(documentLocallyEmployedNCEC.name, e.target.value)}>
                                                    <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                    <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                </RadioGroup>
                                                {errors[documentLocallyEmployedNCEC.name] && touched[documentLocallyEmployedNCEC.name] ? (<small className='text-red-700'>{errors[documentLocallyEmployedNCEC.name]}</small>) : null}
                                            </div>
                                            <div className='w-full mb-3'>
                                                <p className='text-xs text-gray-600'>Latest ITR</p>
                                                <RadioGroup row onChange={(e) => setFieldValue(documentLocallyEmployedLatestITR.name, e.target.value)}>
                                                    <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                    <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                </RadioGroup>
                                                {errors[documentLocallyEmployedLatestITR.name] && touched[documentLocallyEmployedLatestITR.name] ? (<small className='text-red-700'>{errors[documentLocallyEmployedLatestITR.name]}</small>) : null}
                                            </div>
                                            <div className='w-full'>
                                                <p className='text-xs text-gray-600'>3 mons of Payslips</p>
                                                <RadioGroup row onChange={(e) => setFieldValue(documentLocallyEmployed3MonthsOfPayslips.name, e.target.value)}>
                                                    <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                    <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                </RadioGroup>
                                                {errors[documentLocallyEmployed3MonthsOfPayslips.name] && touched[documentLocallyEmployed3MonthsOfPayslips.name] ? (<small className='text-red-700'>{errors[documentLocallyEmployed3MonthsOfPayslips.name]}</small>) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-6'>
                                        <p className='text-xs font-semibold text-gray-600 mb-2 uppercase'>Self-Employed:</p>
                                        <div>
                                            <p className='text-xs text-gray-500'>Formal</p>
                                            <div className='flex flex-col'>
                                                <div className='w-full mb-3'>
                                                    <p className='text-xs text-gray-600'>Latest 2yrs ITR</p>
                                                    <RadioGroup row onChange={(e) => setFieldValue(documentSelfEmployedFormalLatestITR.name, e.target.value)}>
                                                        <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                        <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                    </RadioGroup>
                                                    {errors[documentSelfEmployedFormalLatestITR.name] && touched[documentSelfEmployedFormalLatestITR.name] ? (<small className='text-red-700'>{errors[documentSelfEmployedFormalLatestITR.name]}</small>) : null}
                                                </div>
                                                <div className='w-full mb-3'>
                                                    <p className='text-xs text-gray-600'>Latest 2yrs Audited Financial Statements</p>
                                                    <RadioGroup row onChange={(e) => setFieldValue(documentSelfEmployedFormalAFS.name, e.target.value)}>
                                                        <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                        <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                    </RadioGroup>
                                                    {errors[documentSelfEmployedFormalAFS.name] && touched[documentSelfEmployedFormalAFS.name] ? (<small className='text-red-700'>{errors[documentSelfEmployedFormalAFS.name]}</small>) : null}
                                                </div>
                                                <div className='w-full'>
                                                    <p className='text-xs text-gray-600'>
                                                        Latest 6 mons Bank Statements:<br></br>
                                                        <small>(if Pag-IBIG Certificate of Engagement is submitted)</small>
                                                    </p>
                                                    
                                                    <RadioGroup row onChange={(e) => setFieldValue(documentSelfEmployedFormalLatest6monsBankStatements.name, e.target.value)}>
                                                        <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                        <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                    </RadioGroup>
                                                    {errors[documentSelfEmployedFormalLatest6monsBankStatements.name] && touched[documentSelfEmployedFormalLatest6monsBankStatements.name] ? (<small className='text-red-700'>{errors[documentSelfEmployedFormalLatest6monsBankStatements.name]}</small>) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-xs text-gray-500'>Informal</p>
                                            <div className='flex flex-col'>
                                                <div className='w-full mb-3'>
                                                    <p className='text-xs text-gray-600'>COE with Id signatory</p>
                                                    <RadioGroup row onChange={(e) => setFieldValue(documentSelfEmployedInformalCOEwithIdSignatory.name, e.target.value)}>
                                                        <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                        <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                    </RadioGroup>
                                                    {errors[documentSelfEmployedInformalCOEwithIdSignatory.name] && touched[documentSelfEmployedInformalCOEwithIdSignatory.name] ? (<small className='text-red-700'>{errors[documentSelfEmployedInformalCOEwithIdSignatory.name]}</small>) : null}
                                                </div>
                                                <div className='w-full mb-3'>
                                                    <p className='text-xs text-gray-600'>COE with Other Attachment</p>
                                                    <RadioGroup row onChange={(e) => setFieldValue(documentSelfEmployedInformalCOEwithOtherAttachment.name, e.target.value)}>
                                                        <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                        <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                                    </RadioGroup>
                                                    {errors[documentSelfEmployedInformalCOEwithOtherAttachment.name] && touched[documentSelfEmployedInformalCOEwithOtherAttachment.name] ? (<small className='text-red-700'>{errors[documentSelfEmployedInformalCOEwithOtherAttachment.name]}</small>) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-8">
                                    <p className='text-xs font-semibold text-gray-600 uppercase'>Overseas Filipino Workers (OFW):</p>
                                    <div className='flex flex-col mt-3'>
                                        <div className='mb-3'>
                                            <InputField name={documentOFWCountry.name} type="text" size="small" fullWidth label="Country"/>
                                        </div>
                                        <div className='w-full mb-3'>
                                            <p className='text-xs text-gray-600'>
                                                Notarize Certificate Of Employment with <br></br>
                                                Compensation (COEC)
                                            </p>
                                            <RadioGroup row onChange={(e) => setFieldValue(documentOFWNCEC.name, e.target.value)}>
                                                <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                            </RadioGroup>
                                            {errors[documentOFWNCEC.name] && touched[documentOFWNCEC.name] ? (<small className='text-red-700'>{errors[documentOFWNCEC.name]}</small>) : null}
                                        </div>
                                        <div className='w-full mb-3'>
                                            <p className='text-xs text-gray-600'>
                                                3 mons Payslips or Rimittance
                                            </p>
                                            <RadioGroup row onChange={(e) => setFieldValue(documentOFW3MonsPayslipsOrRemittance.name, e.target.value)}>
                                                <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                            </RadioGroup>
                                            {errors[documentOFW3MonsPayslipsOrRemittance.name] && touched[documentOFW3MonsPayslipsOrRemittance.name] ? (<small className='text-red-700'>{errors[documentOFW3MonsPayslipsOrRemittance.name]}</small>) : null}
                                        </div>
                                        <div className='w-full mb-3'>
                                            <p className='text-xs text-gray-600'>
                                                Bank Statements <small>(if payslips are not available)</small>
                                            </p>
                                            <RadioGroup row onChange={(e) => setFieldValue(documentOFWBankStatements.name, e.target.value)}>
                                                <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                            </RadioGroup>
                                            {errors[documentOFWBankStatements.name] && touched[documentOFWBankStatements.name] ? (<small className='text-red-700'>{errors[documentOFWBankStatements.name]}</small>) : null}
                                        </div>
                                        <div className='w-full mb-3'>
                                            <p className='text-xs text-gray-600'>
                                                Passport with entry and exit
                                            </p>
                                            <RadioGroup row onChange={(e) => setFieldValue(documentOFWPassportWithEntryExit.name, e.target.value)}>
                                                <FormControlLabel value={true} control={<Radio size='small'/>} label="YES"/>
                                                <FormControlLabel value={false} control={<Radio size='small'/>} label="NO"/>
                                            </RadioGroup>
                                            {errors[documentOFWPassportWithEntryExit.name] && touched[documentOFWPassportWithEntryExit.name] ? (<small className='text-red-700'>{errors[documentOFWPassportWithEntryExit.name]}</small>) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-7 py-6 border-2 border-[#ffc109] rounded-lg mt-2'>
                    <p className='text-xs font-semibold uppercase mb-5'>Computation</p>
                    <div className='flex'>
                        <div className='flex flex-col w-full mr-5'>
                            <div className='mb-3'>
                                <InputField name={computationSellingPrice.name} type="number" size="small" fullWidth label="Selling Price"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationDiscount.name} type="number" size="small" fullWidth label="Discount (if any)"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationNetSellingPrice.name} type="number" size="small" fullWidth label="Net Selling Price"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationTaxesAndFees.name} type="number" size="small" fullWidth label="Taxes and fees"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationTotalReceivable.name} type="number" size="small" fullWidth label="Total Receivable"/>
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='mb-3'>
                                <InputField name={computationNumberOfDownpayments.name} type="number" size="small" fullWidth label="Number Of Downpayments"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationEstimatedMonthlyAmortization.name} type="number" size="small" fullWidth label="Esitimated Monthly Amortization"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationGrossIncome.name} type="number" size="small" fullWidth label="Gross Income"/>
                            </div>
                            <div className='mb-3'>
                                <InputField name={computationMonthlyIncomeRatio.name} type="number" size="small" fullWidth label="Monthly Income Ratio"/>
                            </div>
                        </div>
                    </div>
                    <hr  className='my-5'/>
                    <div className='w-full'>
                        <div className='mb-3'>
                            <InputField name={computationRemarks.name} type="text" size="small" multiline fullWidth label="Remarks"/>
                        </div>
                    </div>
                    <hr className='my-5'/>
                    <div className='flex flex-col'>
                        <p className='text-xs font-semibold uppercase mb-3'>Data Privacy:</p>
                        <p className='text-xs indent-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet provident, voluptate dolore facilis alias ipsam. Quas, vero sapiente optio assumenda debitis mollitia, quos commodi perferendis veniam repudiandae deleniti sunt vitae?
                        Explicabo itaque libero sint, enim quidem sequi voluptatum doloribus autem praesentium illo ratione accusamus, quos dolore impedit! Voluptas delectus culpa perferendis, odio iste consequatur veniam repellat veritatis, illum ipsum perspiciatis.
                        Itaque eaque minus eius voluptatum consequuntur consequatur explicabo consectetur quas magni dolore. Impedit beatae aspernatur deleniti sed rem iusto ipsa at consequuntur vitae, officia amet rerum iure aliquam possimus vero.
                        Ipsum, libero itaque? Reprehenderit eveniet quaerat unde odio necessitatibus numquam excepturi quis eaque, vero assumenda nisi deserunt aspernatur quam veritatis soluta, quibusdam eius, dicta voluptatibus harum? Voluptate mollitia et nostrum?
                        Earum voluptatum, tempora reiciendis dolorem doloribus quod. Voluptates aliquam officiis quod amet nobis quos inventore, ullam tempora praesentium fugit minus enim distinctio harum quidem magnam labore temporibus. Nisi, voluptate eaque!
                        Ea architecto voluptates tempora provident quasi quidem, dolor facilis libero animi ullam obcaecati perferendis explicabo labore accusamus reiciendis eos iure est fuga! Tempore, sint? Fugiat ex cum provident odit nam?
                        Tempore, dolorem! Dolores nesciunt, laudantium sit alias suscipit pariatur at similique. Vel nisi vero sequi saepe eos fugit dicta blanditiis doloremque quibusdam laudantium est voluptatum eaque aliquam, quod cum ut!
                        Animi reprehenderit, cumque natus corporis iste voluptatibus nulla in accusamus earum! Saepe id illum maiores obcaecati beatae iste ab distinctio cum libero odit? Autem provident laborum pariatur itaque minus quae!
                        Unde, cupiditate dolore iusto sunt eius facere reprehenderit at repellat rem. Impedit dignissimos rem dolorem et non aperiam, quasi animi eligendi deserunt molestias. Consequatur explicabo natus consequuntur temporibus vel architecto.
                        Enim vero ut deleniti neque eius, rem ipsa laboriosam saepe assumenda, magnam sed repudiandae dicta quis fuga libero cum ratione consectetur aut eos aliquam officiis aperiam. Hic id dolores quam?</p>
                    </div>
                    <hr className='my-5'/>
                    <div className='flex justify-end'>
                        <div className='py-2 mr-5'>
                            <p className='text-xs text-gray-600 mb-2'>Interviewed By <small>(Sales Coordinator/SDA)</small></p>
                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                if(e?.length < 1) return;
                                setFieldValue(screeningInterviewedBy.name, e[0])
                            }} />
                            {errors[screeningInterviewedBy.name] && touched[screeningInterviewedBy.name] ? (<small className='text-red-700'>{errors[screeningInterviewedBy.name]}</small>) : null}
                        </div>
                        <div className='py-2'>
                            <p className='text-xs text-gray-600 mb-2'>Conforme <small>(Buyer Signature over printed name)</small></p>
                            <FilePicker icon={<FilePresent/>} getData={(e) => {
                                if(e?.length < 1) return;
                                setFieldValue(screeningConforme.name, e[0])
                            }} />
                            {errors[screeningConforme.name] && touched[screeningConforme.name] ? (<small className='text-red-700'>{errors[screeningConforme.name]}</small>) : null}
                        </div>
                    </div>
                </div>
                <h1 className='text-lg font-semibold uppercase text-center mt-5 mb-3'>Briefing</h1>
                <div className='px-7 py-6 border-2 border-[#ffc109] rounded-lg'>
                    <h4 className="text-xs font-semibold uppercase mb-5">Buyer's Information</h4>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <div className='w-full mr-3'>
                                <div className='mb-3'>
                                    <InputField name={briefingReservationDate.name} type="date" size="small" fullWidth label="Reservation Date" InputLabelProps={{ shrink : true }} />
                                </div>
                                <div className='mb-3'>
                                    <InputField name={briefingProjectName.name} type="text" size="small" fullWidth label="Project Name"/>
                                </div>
                                <div className='flex'>
                                    <div className='mb-3'>
                                        <InputField name={briefingPH.name} type="text" size="small" fullWidth label="PH"/>
                                    </div>
                                    <div className='mb-3 mx-2'>
                                        <InputField name={briefingBlock.name} type="text" size="small" fullWidth label="Block"/>
                                    </div>
                                    <div className='mb-3'>
                                        <InputField name={briefingLot.name} type="text" size="small" fullWidth label="Lot"/>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div className='mb-3'>
                                    <InputField name={briefingSalesChannel.name} type="text" size="small" fullWidth label="Sales Channel"/>
                                </div>
                                <div className='mb-3'>
                                    <InputField name={briefingBroker.name} type="text" size="small" fullWidth label="Broker"/>
                                </div>
                                <div className='mb-3'>
                                    <InputField name={briefingDirectSeller.name} type="text" size="small" fullWidth label="Direct Seller"/>
                                </div>
                            </div>
                        </div>
                        <hr className='my-5'/>
                        <div className='flex'>
                            <div className="w-full">
                                <p className='text-xs font-semibold'>Financing:</p>
                                <div>
                                    <RadioGroup onChange={(e) => setFieldValue(briefingFinancing.name, e.target.value)}>
                                        <FormControlLabel value={0} label="Cash" control={<Radio size='small' />}/>
                                        <FormControlLabel value={1} label="Pag-Ibig" control={<Radio size='small' />}/>
                                        <FormControlLabel value={2} label="Bank" control={<Radio size='small' />}/>
                                        <FormControlLabel value={3} label="Deffered" control={<Radio size='small' />}/>
                                    </RadioGroup>
                                    {errors[briefingFinancing.name] && touched[briefingFinancing.name] ? (<small className='text-red-700'>{errors[briefingFinancing.name]}</small>) : null}
                                </div>
                            </div>
                            <div className="w-full">
                                <p className='text-xs font-semibold'>Reservation Documents:</p>
                                <div>
                                    <RadioGroup onChange={(e) => setFieldValue(briefingReservationDocuments.name, [e.target.value])}>
                                        <FormControlLabel value={'Fully filled up and Signed Reservation Form (RA)'} label="Fully filled up and Signed Reservation Form (RA)" control={<Radio size='small' />}/>
                                        <FormControlLabel value={'Reservation fee'} label="Reservation fee" control={<Radio size='small' />}/>
                                        <FormControlLabel value={'Valid Ids (govt issued)'} label="Valid Ids (govt issued)" control={<Radio size='small' />}/>
                                        <FormControlLabel value={'Signed Sample Computation'} label="Signed Sample Computation" control={<Radio size='small' />}/>
                                    </RadioGroup>
                                    {errors[briefingReservationDocuments.name] && touched[briefingReservationDocuments.name] ? (<small className='text-red-700'>{errors[briefingReservationDocuments.name]}</small>) : null}
                                </div>
                            </div>
                            <div className='w-full flex flex-col'>
                                <div className='mb-3'>
                                    <InputField name={briefingReferenceNumber.name} type="text" size="small" fullWidth label="Reference Number"/>
                                </div>
                                <div className="flex flex-col">
                                    <p className='text-sm font-semibold mb-2'>Payment Channels:</p>
                                    <div className='flex justify-center items-center px-2'>
                                        <p className='text-xs font-semibold'>BPI,</p>
                                        <p className='text-xs font-semibold'>CEBUANA,</p>
                                        <p className='text-xs font-semibold'>BPI,</p>
                                        <p className='text-xs font-semibold'>ACQUIRED & GCASH</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='my-5'/>
                        <div className='flex justify-end'>
                            <div className='flex'>
                                
                                <div className='py-2'>
                                    <p className='text-xs text-gray-600 mb-2'>Conforme:</p>
                                    <FilePicker icon={<FilePresent/>} getData={(e) => {
                                        if(e?.length < 1) return;
                                        setFieldValue(briefingConforme.name, e[0])
                                    }} />
                                    <small className='text-xs text-gray-600 mb-2'>(Buyer/AIF/Co-Owner <br></br> Signature over printed name)</small>
                                    {errors[briefingConforme.name] && touched[briefingConforme.name] ? (<small className='text-red-700'>{errors[briefingConforme.name]}</small>) : null}
                                </div>
                                <div className='py-2 mr-5 mx-3'>
                                    <p className='text-xs text-gray-600 mb-2'>Briefed By:</p>
                                    <FilePicker icon={<FilePresent/>} getData={(e) => {
                                        if(e?.length < 1) return;
                                        setFieldValue(briefingBriefedBy.name, e[0])
                                    }} />
                                    <small className='text-xs text-gray-600 mb-2'>(Sales coordiantor/ SDA)</small>
                                    {errors[briefingBriefedBy.name] && touched[briefingBriefedBy.name] ? (<small className='text-red-700'>{errors[briefingBriefedBy.name]}</small>) : null}
                                </div>
                                <div className='py-2 mr-5'>
                                    <p className='text-xs text-gray-600 mb-2'>Witness:</p>
                                    <FilePicker icon={<FilePresent/>} getData={(e) => {
                                        if(e?.length < 1) return;
                                        setFieldValue(briefingWitness.name, e[0])
                                    }} />
                                    <small className='text-xs text-gray-600 mb-2'>(Broker/Seller)</small>
                                    {errors[briefingWitness.name] && touched[briefingWitness.name] ? (<small className='text-red-700'>{errors[briefingWitness.name]}</small>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Snackbar
                open={isSuccess}
                autoHideDuration={5000}
                message="Submitted successfully."
                onClose={(e, r) => {
                    if("clickaway" === r) return;
                }}
            />
                <div className='flex justify-end py-6'>
                    <div className='flex justify-center'>
                        {!isLoading ? <button type='submit' className='bg-[#ffc109] w-[10rem] py-3 px-5 font-bold uppercase text-xs rounded-full shadow-md active:shadow-lg hover:text-gray-800'>Save</button>
                            : <CircularProgress color="primary"/>}
                    </div>
                    
                </div>
            </Form>
            )}
        </Formik>
        {isError && <div className='flex justify-end'>
            <div>
                {errors.map((e,i) => {
                    return <div key={i} className="flex items-center"><ErrorOutline color='warning'/><p className='ml-1 text-xs text-red-600'>{e}</p></div>
                })}
            </div>
        </div>}
    </div>
  )
}
