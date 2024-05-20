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
  }),
  overrideExisting: false,
})

export const { useCreateDoctorsMutation } = doctorsApi;