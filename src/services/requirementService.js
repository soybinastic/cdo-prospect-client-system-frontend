import axios from 'axios'
import api from '../constants/apiUrl'
import keys from '../constants/keys'

const submit = async (formData) => {
    const response = await axios.post(`${api}api/requirements/submit`, formData)
    return response;
}

const getAll = async (agentId = 0) => {
    const response = await axios.get(`${api}api/requirements?agentId=${agentId}`)
    return response;
}

const getOne = async (id) => {
    const response = await axios.get(`${api}api/requirements/${id}`)
    return response;
}

const alterStatus = async ({ requirementId, statusInput }) => {
    const response = await axios.put(`${api}api/requirements/status-modification`, {
        requirementId,
        status : statusInput
    })
    return response;
}

const requirementService = {
    submit,
    getAll,
    alterStatus,
    getOne
}

export default requirementService;