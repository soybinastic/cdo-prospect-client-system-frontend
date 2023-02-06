import axios from "axios"
import api from "../constants/apiUrl"


const getAllAppointments = async (agentId) => {
    const response = await axios.get(`${api}api/appointment?agentId=${agentId}`)

    return response;
}

const setAppointment = async (data) => {
    const response = await axios.post(`${api}api/appointment`, data)
    return response
}

const getOneAppointment = async (id) => {
    const response = await axios.get(`${api}api/appointment/${id}`)
    return response
}

const alterAppointmentStatus = async ({ id, statusValue}) => {
    const response = await axios.put(`${api}api/appointment/alter-status`, {
        appointmentId : id,
        status : statusValue
    })

    return response;
}


const appointmentService = {
    getAllAppointments,
    getOneAppointment,
    setAppointment,
    alterAppointmentStatus
}



export default appointmentService;