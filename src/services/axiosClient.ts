// services/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor (handle token)
axiosClient.interceptors.request.use(
    async (config) => {
        const token = 'your-access-token';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (handle 401)
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // TODO: handle logout or refresh flow
            console.warn('Unauthorized');
        }
        return Promise.reject(error);
    }
);

export default axiosClient;
