import axios from 'axios'
import api from '../constants/apiUrl'
import keys from '../constants/keys'
import getUserRole from '../helpers/jwtHelper'

const signIn = async (userCredential) => {
    const response = await axios.post(`${api}api/Auth`, userCredential)
    if(response.data["data"]["token"]){
        localStorage.setItem(keys.authKey, response.data["data"]["token"])
        console.log(getUserRole(response.data["data"]["token"]))
    }
    return response;
}

const authService = {
    signIn,
}

export default authService;