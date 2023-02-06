
// add property model not yet complete
export default {
    formId : 'addProperty',
    formField : {
        propertyName : {
            name : 'propertyName',
            label : 'Property Name',
            requiredErrorMsg : 'Property name is required'
        },
        description : {
            name : 'description',
            label : 'Description',
            requiredErrorMsg : 'Description is required'
        },
        type : {
            name : 'type',
            label : 'Property Type',
            requiredErrorMsg : 'Property type is required'
        },
        agentId : {
            name : 'agentId',
            label : 'Agent',
            requiredErrorMsg : 'Please choose an agent to assign to this property.'
        },
        price : {
            name : 'price',
            label : 'Price',
            requiredErrorMsg : 'Price is required'
        },
        image : {
            name : 'image',
            label : 'Image',
            requiredErrorMsg : 'Please upload an image'
        }
    }
}