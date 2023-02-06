import merchantAxios from './MerchantAxios';
import {MerchantAxiosRequestConfig} from './MerchantAxios';

const {Set} = require('immutable');
const axios = new merchantAxios();
export default class MerchantRequestCenter {
  static requestSet = Set();
  static instance: any = null;
  static services = [];

  static createInstance() {
    var object = new MerchantRequestCenter();
    return object;
  }

  static getInstance() {
    if (!MerchantRequestCenter.instance) {
      MerchantRequestCenter.instance = MerchantRequestCenter.createInstance();
    }
    return MerchantRequestCenter.instance;
  }

  register(key?: string) {
    if (MerchantRequestCenter.requestSet.has(key)) {
      return false;
    }
    return true;
  }

  async doRequest(
    method: string,
    header: any,
    path: string,
    body: any,
    key: string,
    enableAccessToken: boolean,
  ) {
    MerchantRequestCenter.requestSet = MerchantRequestCenter.requestSet.add(key);
    MerchantRequestCenter.monitorKeyAndClearKeyExpired(key);
    try {
      let madeRequest: MerchantAxiosRequestConfig = {
        url: path,
        method: method,
        headers: header,
        payload: body,
        enableAccessToken: enableAccessToken,
        transformRequest: data => {
          return data;
        },
        transformResponse: data => {
          return data;
        },
      };

      return await axios.httpRequest(madeRequest);
    } catch (e) {
      return null;
    } finally {
      MerchantRequestCenter.requestSet =
        MerchantRequestCenter.requestSet.delete(key);
    }
  }

  static monitorKeyAndClearKeyExpired(path: any) {
    setTimeout(function () {
      MerchantRequestCenter.requestSet =
        MerchantRequestCenter.requestSet.delete(path);
    }, 2000);
  }
}
