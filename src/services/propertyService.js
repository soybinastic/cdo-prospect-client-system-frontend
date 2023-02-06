import axios from "axios"
import api from "../constants/apiUrl"

const getAllProperties = async () => {
    const response = await axios.get(`${api}api/property`)
    return response
}

const getOneProperty = async (id) => {
    const response = await axios.get(`${api}api/property/${id}`)
    return response
}

const createProperty = async (formData) => {
    const response = await axios.post(`${api}api/property`, formData)
    return response
}

const updatePropertyDetails = async (id, data) => {
    const response = await axios.put(`${api}api/property/details/${id}`, data)
    return response
}

const updatePropertyImage = async (formData) => {
    const response = await axios.put(`${api}api/property/profile-image`, formData)
    console.log(response)
    return response
}


const propertyService = {
    getAllProperties,
    createProperty,
    getOneProperty,
    updatePropertyDetails,
    updatePropertyImage
}

export default propertyService;