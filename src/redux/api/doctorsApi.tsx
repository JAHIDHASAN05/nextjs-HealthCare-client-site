import { IMeta } from "@/types"
import { baseApi } from "./baseApi"
import { tagTypes } from "../tag-types/tagTypes"
import { url } from "inspector"


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
     invalidatesTags: [tagTypes?.doctor]
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
      },
      providesTags:[tagTypes.doctor]
    }),
    deleteDoctor: build.mutation({
      query: (id) =>{
        return{
          url :`/doctor/soft/${id}`,
          method:"DELETE"
        }
      },
      invalidatesTags: [tagTypes?.doctor]
    })

  }),
  

})

export const { useCreateDoctorsMutation, useGetAllDoctorsQuery, useDeleteDoctorMutation } = doctorsApi;