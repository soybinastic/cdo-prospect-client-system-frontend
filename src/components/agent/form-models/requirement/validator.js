import * as Yup from 'yup'
import requirementFormModel from './requirementFormModel'

const {
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


const validationScheme = Yup.object()
    .shape({
        [buyerName.name] : Yup.string().required('This field is required'),
        [buyerAddress.name] : Yup.string().required('This field is required'),
        [buyerBirthDate.name] : Yup.string().required('This field is required'),
        [buyerContactNo.name] : Yup.string().required('This field is required'),
        [buyerCitizenship.name] : Yup.string().required('This field is required'),
        [buyerEmailAddress.name] : Yup.string().required('This field is required'),
        [buyerFacebook.name] : Yup.string().required('This field is required'),
        [buyerGender.name] : Yup.string().required('This field is required'),
        [buyerCivilStatus.name] : Yup.string().required('This field is required'),
        [buyerTitlingInstruction.name] : Yup.string().required('This field is required'),
        [buyerTitlingInstructionOther.name] : Yup.string().required('This field is required'),
        [buyerFinancing.name] : Yup.string().required('This field is required'),
        [buyerNegativeDataBankRecordsCancelledCreditCards.name] : Yup.boolean(),
        [buyerNegativeDataBankRecordsBouncedChecks.name] : Yup.boolean(),
        [buyerNegativeDataBankRecordsPendingCourtCases.name] : Yup.boolean(),
        [buyerNegativeDataBankRecordsUnpaidTelecomBill.name] : Yup.boolean(),
        [buyerNegativeDataBankRecordsOthers.name] : Yup.string(),
        [buyerPagIbigMembership.name] : Yup.boolean().required('Pag-IBIG membership?'),
        [buyerPagIbigMembershipNumberOfYears.name] : Yup.number().required('This field is required'),
        [buyerPagIbigMembershipUpdated.name] : Yup.boolean().required('Is updated?'),
        [buyerPagIbigMembershipWOHML.name] : Yup.boolean().required('Yes or no?'),
        [buyerPagIbigMembershipWFHL.name] : Yup.boolean().required('Yes or no?'),
        [buyerEmployerDetailsCompanyName.name] : Yup.string().required('This field is required'),
        [buyerEmployerDetailsAddress.name] : Yup.string().required('This field is required'),
        [buyerEmployerDetailsContactNo.name] : Yup.string().required('This field is required'),
        [buyerEmployerDetailsEmailAdress.name] : Yup.string().required('This field is required'),
        [buyerEmployerDetailsImmediateSuperior.name] : Yup.string().required('This field is required'),
        [documentValidIds.name] : Yup.mixed().required('This field is required'),
        [documentSpouseValidIds.name] : Yup.mixed().required('This field is required'),
        [documentTINNumber.name] : Yup.mixed().required('This field is required'),
        [documentBirthCertificate.name] : Yup.mixed().required('This field is required'),
        [documentMarriageCertificate.name] : Yup.mixed(),
        [documentClearOneByOnePicture.name] : Yup.mixed().required('This field is required'),
        [documentProofOfMailingOrBilling.name] : Yup.mixed().required('This field is required'),
        [documentPostDatedChecks.name] : Yup.mixed().required('This field is required'),
        [documentAAR.name] : Yup.mixed().required('This field is required'),
        [documentSPA.name] : Yup.mixed().required('This field is required'),
        [documentBankAndPagIbigSPA.name] : Yup.mixed().required('This field is required'),
        [documentOAAC.name] : Yup.mixed().required('This field is required'),
        [documentOthers.name] : Yup.mixed(),
        [documentLocallyEmployedNCEC.name] : Yup.boolean().required('Yes or no?'),
        [documentLocallyEmployedLatestITR.name] : Yup.boolean().required('Yes or no?'),
        [documentLocallyEmployed3MonthsOfPayslips.name] : Yup.boolean().required('Yes or no?'),
        [documentSelfEmployedFormalAFS.name] : Yup.boolean().required('Yes or no?'),
        [documentSelfEmployedFormalLatest6monsBankStatements.name] : Yup.boolean().required('Yes or no?'),
        [documentSelfEmployedFormalLatestITR.name] : Yup.boolean().required('Yes or no?'),
        [documentSelfEmployedInformalCOEwithIdSignatory.name] : Yup.boolean().required('Yes or no?'),
        [documentSelfEmployedInformalCOEwithOtherAttachment.name] : Yup.boolean().required('Yes or no?'),
        [documentOFWCountry.name] : Yup.string().required('This field is required'),
        [documentOFWNCEC.name] : Yup.boolean().required('Yes or no?'),
        [documentOFW3MonsPayslipsOrRemittance.name] : Yup.boolean().required('Yes or no?'),
        [documentOFWBankStatements.name] : Yup.boolean().required('Yes or no?'),
        [documentOFWPassportWithEntryExit.name] : Yup.boolean().required('Yes or no?'),
        [computationSellingPrice.name] : Yup.number().required('This field is required'),
        [computationDiscount.name] : Yup.number().min(0, 'Not a valid number'),
        [computationNetSellingPrice.name] : Yup.number().required('This field is required'),
        [computationTaxesAndFees.name] : Yup.number().required('This field is required'),
        [computationTaxesAndFees.name] : Yup.number().required('This field is required'),
        [computationTotalReceivable.name] : Yup.number().required('This field is required'),
        [computationNumberOfDownpayments.name] : Yup.number().required('This field is required'),
        [computationEstimatedMonthlyAmortization.name] : Yup.number().required('This field is required'),
        [computationGrossIncome.name] : Yup.number().required('This field is required'),
        [computationMonthlyIncomeRatio.name] : Yup.number().required('This field is required'),
        [computationRemarks.name] : Yup.string(),
        [screeningInterviewedBy.name] : Yup.mixed().required('This field is required'),
        [screeningConforme.name] : Yup.mixed().required('This field is required'),
        [briefingReservationDate.name] : Yup.date().required(),
        [briefingSalesChannel.name] : Yup.string().required('This field is required'),
        [briefingProjectName.name] : Yup.string().required('This field is required'),
        [briefingPH.name] : Yup.string().required('This field is required'),
        [briefingLot.name] : Yup.string().required('This field is required'),
        [briefingBlock.name] : Yup.string().required('This field is required'),
        [briefingBroker.name] : Yup.string().required('This field is required'),
        [briefingDirectSeller.name] : Yup.string().required('This field is required'),
        [briefingFinancing.name] : Yup.number().required('This field is required'),
        [briefingReservationDocuments.name] : Yup.array().required('This field is required'),
        [briefingReferenceNumber.name] : Yup.string().required('This field is required'),
        [briefingConforme.name] : Yup.mixed().required('This field is required'),
        [briefingBriefedBy.name] : Yup.mixed().required('This field is required'),
        [briefingWitness.name] : Yup.mixed().required('This field is required')
    })

export default validationScheme