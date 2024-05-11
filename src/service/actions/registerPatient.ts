export const registerPatient= async(formData:FormData)=>{
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BECKEND_API_URL}/user/create-patient`,{
        method :"POST",
        body :formData
    })


 const userInfo=  await res.json()


  return userInfo
   
}