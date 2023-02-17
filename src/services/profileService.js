import axios from "axios"
import api from "../constants/apiUrl"
import keys from "../constants/keys"

const createNewAgent = async (agentData) => {
    const token = localStorage.getItem(keys.authKey) === null ? "" : localStorage.getItem(keys.authKey);

    const response = await axios.post(`${api}api/profile/agents`, agentData, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })

    return response
}

const getAllAgents = async () => {
    const token = localStorage.getItem(keys.authKey) === null ? "" : localStorage.getItem(keys.authKey);

    const response = await axios.get(`${api}api/profile/agents`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })

    return response;
}

const getProfile = async (type = "agent") => {
    const token = localStorage.getItem(keys.authKey) === null ? "" : localStorage.getItem(keys.authKey);

    const response = await axios.get(`${api}api/profile?type=${type}`, {
        headers : {
            Authorization : `Bearer ${token}`
        }
    })

    if(response.status == 200){
        localStorage.setItem(keys.profileKey, JSON.stringify(response.data))
    }

    return response;
}

const profileService = {
    createNewAgent,
    getAllAgents,
    getProfile
}

export default profileService

