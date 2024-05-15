import { authKey } from "@/constans"
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local.storage"

export const storeUserInfo=({accessToken}:{accessToken:string})=>{

console.log(accessToken, "inside function");
   return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo=()=>{
 const authToken=getFromLocalStorage(authKey)   
 if(authToken){
    const decodedData:any= decodedToken(authToken)
    return {
        ...decodedData,
        role: decodedData.role?.toLowerCase()
    }
}
}