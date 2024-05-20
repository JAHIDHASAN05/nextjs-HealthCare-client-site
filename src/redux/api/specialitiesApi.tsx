import { tagTypes } from "../tag-types/tagTypes";
import { baseApi } from "./baseApi";

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecility: build.mutation({
      query: (data) => {
        console.log(data, "inside createting");
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
  }),
});

export const { useCreateSpecilityMutation, useGetAllSpecilityQuery } =
  specialitiesApi;

// import { modifyPayload } from '@/utils/modifyPayload';
// import { baseApi } from './baseApi';

// const specialitiesApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     createSpecility: build.mutation({
//       query: (data) => {

//         const formData = modifyPayload(data);
//         return {
//           url: '/specialties',
//           method: 'POST',
//           body: formData,
//           // No need to set content type explicitly for FormData
//         };
//       },
//     }),
//   }),
// });

// export const { useCreateSpecilityMutation } = specialitiesApi;

// import { baseApi } from './baseApi';

// const specialitiesApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     createSpecility: build.mutation({
//       query: (data) => {
//         const formData = new FormData();
//         for (const key in data) {
//           formData.append(key, data[key]);
//         }
//         return {
//           url: '/specialties',
//           method: 'POST',
//           body: formData,
//           // No need to set content type explicitly for FormData
//         };
//       },
//     }),
//   }),
// });

// export const { useCreateSpecilityMutation } = specialitiesApi
