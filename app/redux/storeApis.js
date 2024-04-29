import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const TAG_TYPES = { user: 'user'}

export const taskBasedProjectApi = createApi({
    reducerPath: 'taskBasedProjectApi',
    baseQuery: fetchBaseQuery({

        baseUrl: 'https://lessonapi.educationforalliraqis.com/',

        prepareHeaders: async (headers, { endpoint }) => {

            const storedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVkYzYyY2MxYWEwMDc4MDAwZjljMDEiLCJpYXQiOjE3MTM3MzQxOTh9.2ZIPdqfGIEbm0t6iSE14HTQw1ASehe_hijG_iEnWFJU';
            if (storedToken && endpoint !== 'refresh') headers.set('Authorization', `Bearer ${storedToken}`);

            return headers;
        },
    }),
    tagTypes: [TAG_TYPES.user],
    endpoints: (builder) => ({
        getSubjects: builder.query({ query: (data) => `courseregistration/${data?.user_id}/${data?.grade_id}`, transformResponse: (response) => response?.data }),
        getChapters: builder.query({ query: (id) => `lessons/subject/${id}`, transformResponse: (response) => response?.data }),
        getLesson: builder.query({ query: (id) => `lessons?_id=${id}`, transformResponse: (response) => response?.data }),
    }),
});

export const { useGetSubjectsQuery, useGetChaptersQuery, useGetLessonQuery } = taskBasedProjectApi;

