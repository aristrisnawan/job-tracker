import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// const BASE_URL = "http://localhost:8081/job-tracker-backend"
const BASE_URL = "http://10.0.2.2/job-tracker-backend"

const API_INSTANCE = axios.create({
    baseURL: BASE_URL
})

API_INSTANCE.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('userToken')
        console.log("Attaching token to request:", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

interface login {
    email: string,
    password: string
}

const handleLogin = async ({ email, password }: login) => {
    try {
        const response = await API_INSTANCE.post(`/auth/login.php`, {
            email: email,
            password: password,
        })
        return response.data
    } catch (error: any) {
        if (error.config) {
            console.log("URL Gagal:", error.config.baseURL + error.config.url);
        }
        throw error;

    }
}

const getListJob = async () => {
    try {
        const jobs = await API_INSTANCE.get(`/jobs/lists.php`)
        return jobs.data
    } catch (error) {
        throw error
    }
}

const API = {
    handleLogin,
    getListJob
}

export default API;
