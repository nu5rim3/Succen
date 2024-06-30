import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

const baseURL = import.meta.env.VITE_API_BASE; // Replace with your API base URL

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string, interceptors?: {
        request?: (value: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
        response?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>
    }) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (interceptors && interceptors.request) {
            this.axiosInstance.interceptors.request.use(interceptors.request);
        }

        if (interceptors && interceptors.response) {
            this.axiosInstance.interceptors.response.use(interceptors.response);
        }
    }

    private async request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            return await this.axiosInstance.request<T>(config);
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            throw new Error(error.message);
        }
    }

    public async get<T>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = {
            method: 'get',
            url,
            headers,
        };
        return this.request<T>(config);
    }

    public async post<T>(url: string, data: unknown, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = {
            method: 'post',
            url,
            data,
            headers,
        };
        return this.request<T>(config);
    }

    public async put<T>(url: string, data: unknown, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = {
            method: 'put',
            url,
            data,
            headers,
        };
        return this.request<T>(config);
    }

    public async delete<T>(url: string, headers?: Record<string, string>): Promise<AxiosResponse<T>> {
        const config: AxiosRequestConfig = {
            method: 'delete',
            url,
            headers,
        };
        return this.request<T>(config);
    }
}

const apiService = new ApiService(baseURL);

export interface ApiResponse<T> {
    data: T[];
    error: boolean;
    message: string
}

export default apiService;
