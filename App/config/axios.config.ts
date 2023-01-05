import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

import config, { ENV, ENVIRONMENT } from './index';



/**

 * Timeout for 10 second

 */

const TIMEOUT = Number(config().APP_API_REQUEST_TIMEOUT)

axios.defaults.timeout = (TIMEOUT * 1000);

axios.defaults.baseURL = config().APP_AJAX_URL;


const setupAxiosInterceptors = (onUnauthenticated: (status: number) => void) => {


    const onRequestSuccess = async (axios_config: any) => {
        axios_config.headers['X-Authorization'] = await AsyncStorage.getItem('session');
        axios_config.timeout = 15000;


        if (ENVIRONMENT === ENV.DEVELOPMENT) {


            /**

             * Make color: https://backbencher.dev/articles/nodejs-colored-text-console

             */


            let Reset = "\x1b[0m";

            let  Bright = "\x1b[1m";

            let  FgGreen = "\x1b[32m";

            let  BgGreen = "\x1b[42m";

            let  BgBlue = "\x1b[44m";

            let  BgMagenta = "\x1b[45m";


            console.info("==========<<<<<<<<<<<<<<<START AXIOS<<<<======================")

            let Method = String(axios_config.method).toUpperCase();

            console.log( Bright + BgBlue + ` ${ Method } ` + Reset, FgGreen + axios_config.url + Reset);

            console.log( Bright + BgMagenta + ` BODY ` + Reset, FgGreen + JSON.stringify(axios_config.body, null, 4) + Reset);

            console.log( Bright + BgGreen + ` AUTH ` + Reset, FgGreen +  axios_config.headers['X-Authorization'] + Reset);



        }

        return axios_config;

    };

    const onResponseSuccess = async (response: any) => {

        // set session

        const session = response.headers['x-authorization'];

        // console.info(session, '==========>>>>>>>>>>>>>>>>>>======================');

        if (session) await AsyncStorage.setItem('session', session);

        return response;

    };

    const onResponseError = async (err: any) => {

        // set session

        // const session = err?.response?.headers['x-authorization'];

        // if (session) await AsyncStorage.setItem('session', session);
        const env = await AsyncStorage.getItem('env') || "product";

        const status = err.status || (err.response ? err?.response?.status : 0);

        /**

         * 401: Chuwa login

         * 403: vuot quyen, khong co quyen

         */

        let requestUrl: string = err?.request?._url || ""

        if ((status === 401 || status === 403) && requestUrl.toLowerCase().includes(config(env).APP_AJAX_URL.toLowerCase())) {

            onUnauthenticated(status);

        }


        return Promise.reject(err);

    };

    axios.interceptors.request.use(onRequestSuccess);

    axios.interceptors.response.use(onResponseSuccess, onResponseError);

};


export default setupAxiosInterceptors;