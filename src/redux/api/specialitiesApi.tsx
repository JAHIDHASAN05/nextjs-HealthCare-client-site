import { tagTypes } from "../tag-types/tagTypes";
import { baseApi } from "./baseApi";

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecility: build.mutation({
      query: (data) => {        
        return {
          url: "/specialties",
          method: "POST",
          contentType: "multipart/form-data",
          data: data,
        };
      },
      invalidatesTags : [tagTypes.speciality]
    }),
    GetAllSpecility: build.query({
      query: (data) => {
        return {
          url: "/specialties",
          method: "GET",
        };
      },
      providesTags :[tagTypes.speciality]
    }),

    deleteSpecility: build.mutation({
      query: (id) => {
        
        return {
          url: `/specialties/${id}`,
          method: "DELETE",         
        };
      },
      invalidatesTags : [tagTypes.speciality]
    }),
  }),
});

export const { useCreateSpecilityMutation, useGetAllSpecilityQuery,  useDeleteSpecilityMutation } =
  specialitiesApi;
