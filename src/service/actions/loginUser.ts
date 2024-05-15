'use server'

export const loginUser=async(data:any)=>{
  const res= await fetch(`${process.env.NEXT_PUBLIC_BECKEND_API_URL}/auth/login`,{
    method: "POST",
    headers :{
        'content-type' : "application/json"
    },
    body: JSON.stringify(data),
    cache :'no-store'

  })
  const loginInfo= res.json()
  return loginInfo
}