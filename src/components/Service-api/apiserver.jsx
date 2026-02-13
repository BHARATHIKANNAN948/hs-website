import { environment } from "../Environment";
import { API_URL } from "./endpoint";

const API_BASE_URL = environment.apiBaseUrl;

export const ContactMessage = async (fullname,email,phoneno,subject,sms) => {
    try {
        const response = await fetch(`${API_BASE_URL}${API_URL. contactUs}`,{
            method: "POST",

            body: JSON.stringify({
                fullname: fullname,
                email: email,
                phoneno: phoneno,
                subject: subject,
                message: sms,
            }),
    });

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error(responseData.apiStatus.message || "Message failed")
    }

    return responseData;
    } catch (error) {
        console.error("Error in ContactUs:",error);
        throw error;
    }
   
};