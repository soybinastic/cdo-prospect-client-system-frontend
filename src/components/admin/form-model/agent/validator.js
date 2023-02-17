import * as Yup from 'yup'
import addAgentFormModel from "./addAgentFormModel";

const { formField : {
    firstName,
    lastName,
    middleName,
    email,
    address,
    contact,
    username,
    password,
    pic
} } = addAgentFormModel

const validationScheme = [
    Yup.object()
        .shape({
            [firstName.name] : Yup.string().required(`${firstName.requiredErrorMsg}`),
            [lastName.name] : Yup.string().required(lastName.requiredErrorMsg),
            [middleName.name] : Yup.string().required(middleName.requiredErrorMsg),
            [email.name] : Yup.string().required(email.requiredErrorMsg),
            [address.name] : Yup.string().required(address.requiredErrorMsg),
            [contact.name] : Yup.string().required(contact.requiredErrorMsg)
        }),
    Yup.object()
        .shape({
            [username.name] : Yup.string().required(username.requiredErrorMsg),
            [password.name] : Yup.string().required(password.requiredErrorMsg)
        }),
     Yup.object()
        .shape({
            [pic.name] : Yup.mixed().required(pic.requiredErrorMsg)
        })   
    
]

export default validationScheme;