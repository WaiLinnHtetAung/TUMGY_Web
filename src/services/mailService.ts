import axios from "axios";
import { EmailType } from "../types/generalTypes";

export const submitMail = async(payload: EmailType) => {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    formData.append('subject', payload.subject);
    formData.append('message', payload.message);
    

    try {
        const response = await axios.post(import.meta.env.VITE_API_URL + 'submit-email', formData)
        return response.data
    } catch (error) {
        return error;
    }

}