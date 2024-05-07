import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const TaskApi = createApi({
  reducerPath: 'TaskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => `/task`,
    }),
    addTask: builder.mutation({
      query: (obj) => ({
        url: '/task',
        method: 'POST',
        body: obj
      }),
    }),
    updateTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: 'PUT',
      }),
    }),
      deleteTask: builder.mutation({
        query: (id) => ({
          url: `/task/${id}`,
          method: 'DELETE',
        }),
    }),
  }),
})

export const { useGetAllTaskQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = TaskApi