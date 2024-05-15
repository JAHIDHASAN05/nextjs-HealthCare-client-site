'use server'

import { FieldValues } from "react-hook-form"

export const loginUser=async(data:FieldValues)=>{
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