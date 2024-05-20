
export const modifyPayload=(values: any)=>{
      const obj={...values}
      console.log('modified payload', obj);
       
      const file = obj['file']
      delete obj['file']
      const data= JSON.stringify(obj)
      const formData= new FormData()
      formData.append("data" , data)
      formData.append('file', file  as Blob)     
      return formData
}

