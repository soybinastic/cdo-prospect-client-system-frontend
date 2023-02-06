import addPropertyModel from './addPropertyModel'

const { formField : {
    propertyName,
    description,
    price,
    agentId,
    type,
    image

} } = addPropertyModel


export default {
    [propertyName.name] : '',
    [description.name] : '',
    [price.name] : '',
    [agentId.name] : '',
    [type.name] : '',
    [image.name] : ''
}