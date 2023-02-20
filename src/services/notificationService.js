import axios from "axios"
import api from "../constants/apiUrl"


const getAll = async (userId) => {
    const response = await axios.get(`${api}api/Notification/${userId}`)
    return response;
}

const notificationService = {
    getAll
}

export default notificationService;