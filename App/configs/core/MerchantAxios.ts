
import apisauce from 'apisauce'
import { AxiosRequestConfig } from "axios"

export interface MerchantAxiosRequestConfig extends AxiosRequestConfig {
    enableAccessToken?: boolean,
    payload?: any,
    url: string,
}
export default class MerchantAxios {
    async httpRequest(requestConfig: MerchantAxiosRequestConfig) {
        let defaultHeaders: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        if (requestConfig?.headers) {
            defaultHeaders = requestConfig.headers;
        } 

        let access_token = "";
        if (access_token && requestConfig.enableAccessToken) {
            defaultHeaders.Authorization = "Bearer " + access_token;
        }
        var api = apisauce.create({
            baseURL: requestConfig.url,
            method: requestConfig.method,
            withCredentials: false,
            headers: defaultHeaders,
            requestTransforms: requestConfig.transformRequest,
            responseTransforms: requestConfig.transformResponse,
            onUploadProgress: requestConfig.onUploadProgress,
            onDownloadProgress: requestConfig.onDownloadProgress,
            maxContentLength: 100000000, // 100MB
            timeout: 20000, // 30s
        });
        return new Promise(async (resolve, reject) => {
            try {
                var result = null;
                switch (requestConfig.method) { // can custom any method 
                    case 'post':
                        result = await api.post(requestConfig.url, requestConfig.payload);
                        resolve(result)
                        break;
                    case 'get':
                        result = await api.get(requestConfig.url, requestConfig.payload);
                        resolve(result)
                        break;
                    case 'put':
                        result = await api.put('', requestConfig.payload);
                        resolve(result)
                        break;
                    case 'delete':
                        result = await api.delete('', requestConfig.payload);
                        resolve(result)
                        break;
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}