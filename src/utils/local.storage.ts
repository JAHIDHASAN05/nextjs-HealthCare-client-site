export const setToLocalStorage=(key:string, value:string):any=>{
    if(!key || typeof window === undefined){
        return ''
    }
    return localStorage.setItem(key, value)

}


// export const getFromLocalStorage=(key:string)=>{
//     if(!key || typeof window)
//     return localStorage.getItem(key)
// }