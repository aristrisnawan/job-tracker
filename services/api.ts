import axios from 'axios';

const BASE_URL = "https://brynlee-unkind-brooklynn.ngrok-free.dev/job-tracker-backend"
interface login {
    email: string,
    password: string
}

const handleLogin = async ({ email, password }: login) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/login.php`, {
            email: email,
            password: password,
        })

        return response.data
    } catch (error: any) {
        throw error
        
    }
}

const handleLogout = async () => {
    try {
        
    } catch (error) {
        
    }
}

const API = {
    handleLogin
}

export default API;
