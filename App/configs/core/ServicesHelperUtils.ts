import CoreService from './MerchantRequestCenter';
const core = CoreService.getInstance();

export default class ServicesHelperUtils {
    static instance: any = null;
    static createInstance() {
        var object = new ServicesHelperUtils();
        return object;
    }

    static getInstance() {
        if (!ServicesHelperUtils.instance) {
            ServicesHelperUtils.instance = ServicesHelperUtils.createInstance();
        }
        return ServicesHelperUtils.instance;
    }

    async initRequest(method: string, headers: any, url: string, params: any, enable_access_token: boolean) {
        let key = url + JSON.stringify(params);
        if (core.register(key) === false) {
            return new Promise((resolve, reject) => {
                resolve("Disable Access");
            });
        }
        if ((method == 'post' || method == 'put' || method == 'delete') && !params) {
            return new Promise((resolve, reject) => {
                resolve("Params Notfound");
            });
        }
        return await core.doRequest(method, headers, url, params, key, enable_access_token);
    }
}