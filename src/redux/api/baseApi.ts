import { axiosBaseQuery } from '@/helpers/axious/axiosBaseQuery'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tag-types/tagTypes'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({

  }),

  tagTypes : tagTypesList,
})
