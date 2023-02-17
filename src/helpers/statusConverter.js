

const requirement = (numberValue) => {
    switch(numberValue)
    {
        case 0:
            return 'Approved';
        case 1:
            return 'Pending';
        case 2:
            return 'Cancelled';
        case 3:
            return 'Archived';
        case 4: 
            return 'Forwarded';
        case 5:
            return 'Received';
        case 6:
            return 'Rejected';
        default:
            return 'Pending';
    }
}

const evaluation = (numberValue) => {
    switch(numberValue)
    {
        case 0:
            return 'Pending';
        case 1:
            return 'Approved';
        case 2:
            return 'Cancelled';
        case 3:
            return 'Rejected';
        default:
            return 'Pending';
    }
}

const appointment = (numberValue) => {
    switch(numberValue){
        case 0:
            return 'Pending';
        case 1:
            return 'Confirm';
        case 2:
            return 'Archive';
        default:
            return 'Pending';
    }
}
const statusConverter = {
    requirement,
    evaluation,
    appointment
}

export default statusConverter;