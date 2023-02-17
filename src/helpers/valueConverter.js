const financing = (numberValue) => {
    switch(numberValue)
    {
        case 0:
            return 'Cash';
        case 1:
            return 'PagIBIG';
        case 2:
            return 'Bank';
        case 3:
            return 'Deffered';
        default: 
            return 'Cash';
    }
}

const civilStatus = (numberValue) => {
    switch(numberValue)
    {
        case 0:
            return 'Single';
        case 1:
            return 'Married';
        case 2:
            return 'Widow Or Widower';
        case 3:
            return 'Legally Separated';
        default:
            return 'Single';
    }
}

const titlingInstruction = (numberValue) => {
    switch (numberValue)
    {
        case 0:
            return 'Individual';
        case 1:
            return 'Married To';
        case 2:
            return 'Spouses';
        case 3:
            return 'Co-Owners';
        default:
            return 'Individual';
    }
}

const valueConverter = {
    financing,
    civilStatus,
    titlingInstruction
}

export default valueConverter;