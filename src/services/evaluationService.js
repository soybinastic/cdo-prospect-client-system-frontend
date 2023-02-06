import axios from "axios"
import api from "../constants/apiUrl"


const getAllEvaluations = async () => {
    const response = await axios.get(`${api}api/evaluation`)
    return response
}

const getOneEvaluation = async (id) => {
    const response = await axios.get(`${api}api/evaluation/${id}`)
    return response
}

const evaluate = async ({ evaluationId, status }) => {
    const response = await axios.put(`${api}api/evaluation`, {
        evaluationId,
        status
    })
    return response
}

const evaluationService = {
    getAllEvaluations,
    getOneEvaluation,
    evaluate
}

export default evaluationService;