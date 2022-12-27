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


export default {
    [firstName.name] : '',
    [lastName.name] : '',
    [middleName.name] : '',
    [email.name] : '',
    [address.name] : '',
    [contact.name] : '',
    [username.name] : '',
    [password.name] : '',
    [pic.name] : ''
}