export enum ENV {
    PRODUCTION = "production",
    DEVELOPMENT = "development"
  }
  
  /**
  *
  *
  * Thay đổi khi build or dev
  *
  *
  */
  
  
  export const ENVIRONMENT: ENV = __DEV__ ? ENV.DEVELOPMENT : ENV.PRODUCTION

export default (envirount = "product") => {
    const isProduct = ENVIRONMENT === ENV.PRODUCTION && envirount == "product"
   
  
    return {
      env: 'development', // or production
      APP_API_REQUEST_TIMEOUT: 15, // in second, NOT microseconds
      APP_AJAX_URL:   '',
    }
  }
  