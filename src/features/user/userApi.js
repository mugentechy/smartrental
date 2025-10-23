import axios from 'axios'
import { url } from "../../utils/url"




export const  getContactAsync = async (fname,lname,email,phone, message) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(`${url}/contact`, {fname,lname,email,phone, message }, config)   
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}




export const  authUser = async (email, password) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(`${url}/login`, { email, password }, config)   
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}

export const  getCurrentUser = async (id) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.get(`${url}/user/${id}`, config)   
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}


export const  getSubscribe = async (email) => {
    try {
        
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post(`${url}/subscribe`,{email}, config)   
        return data
    } catch(e) {
        console.log('An error occured: ',e)
    }
}