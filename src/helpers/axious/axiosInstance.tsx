import { authKey } from "@/constans";
import { getFromLocalStorage } from "@/utils/local.storage";
import axios from "axios";

type ResponseSuccesType={
    data:any;
    meta: {
      page :number;
      limit: number;
      total: number;
    }
  }

  type IGenericErorrResponse ={
    statusCode :number;
    message:string;
    errorMessage :IGenericErorrMessag[]
  }

  type IGenericErorrMessag ={
    path: string| number;
    message: string;
  }
const Instance= axios.create();
Instance.defaults.headers.post['content-type']="application/json";
Instance.defaults.headers['Accept']='application/json';
Instance.defaults.timeout=60000;




// Add a request interceptor
Instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    const accessToken= getFromLocalStorage(authKey)

    if(accessToken){
        config.headers.Authorization= accessToken
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
Instance.interceptors.response.use(

  //@ts-ignore
    function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data


    const responseObject:ResponseSuccesType ={
        data: response?.data?.data,
        meta :response?.data?.meta
    }
    return responseObject;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error


    
    const responseObject :IGenericErorrResponse ={
        statusCode: error?.response?.data?.statusCode ||500,
        message:error?.response?.data?.message || 'something went wrong',
        errorMessage:error?.response?.data?.message
    }
    // return Promise.reject(error);
    return responseObject;
  });

export {Instance} 