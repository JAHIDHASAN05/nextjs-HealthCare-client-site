import { authKey } from "@/constans"
import { setToLocalStorage } from "@/utils/local.storage"

export const storeUserInfo=({accessToken}:{accessToken:string})=>{

console.log(accessToken, "inside function");
   return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo=(key:string)=>{

}