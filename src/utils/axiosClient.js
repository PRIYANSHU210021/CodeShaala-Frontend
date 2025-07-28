import axios from "axios"

const axiosClient = axios.create({
    // baseURL:'http://localhost:3000',
    baseURL:'https://code-shaala-backend.vercel.app',
    // baseURL: isLocalhost 
    //     ? "http://localhost:3000" 
    //     : "https://code-shaala-backend.vercel.app",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default axiosClient;

    