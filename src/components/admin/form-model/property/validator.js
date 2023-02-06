import * as Yup from 'yup'
import addPropertyModel from './addPropertyModel'


const {
    formField : {
        propertyName,
        description,
        type,
        agentId,
        price,
        image
    }
} = addPropertyModel;


const addPropertyValidationScheme = [
    Yup.object().shape({
        [propertyName.name] : Yup.string().required(propertyName.requiredErrorMsg),
        [description.name] : Yup.string().required(description.requiredErrorMsg),
        [type.name] : Yup.string().min(1, type.requiredErrorMsg).required(type.requiredErrorMsg),
        [price.name] : Yup.number().required(price.requiredErrorMsg)
    }),
    Yup.object()
        .shape({
            [agentId.name] : Yup.number().min(1, agentId.requiredErrorMsg).required(agentId.requiredErrorMsg)
        }),
    Yup.object()
        .shape({
            [image.name] : Yup.mixed().required(image.requiredErrorMsg)
        })
]

export default addPropertyValidationScheme