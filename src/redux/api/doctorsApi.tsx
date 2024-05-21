import { IMeta } from "@/types"
import { baseApi } from "./baseApi"


const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctors: build.mutation({
      query: (data) => {
        return {
            url:'/user/create-doctor',
            method :'POST',
            contentType : "multipart/form-data",
            data:data
        }
      },
    }),
    getAllDoctors: build.query({
      query: (arg:Record<string, any>) => {
        return {
            url:'/doctor',
            method :'GET',  
            params : arg         
        }
      },
      transformResponse:(response , meta:IMeta)=>{
       return {
        doctors:response,
        meta,
       }
      }
    }),
  }),
  overrideExisting: false,

})

export const { useCreateDoctorsMutation, useGetAllDoctorsQuery } = doctorsApi;