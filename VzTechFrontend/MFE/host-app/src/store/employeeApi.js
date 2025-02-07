import {createApi} from '@reduxjs/toolkit/query/react'; 
import {graphqlRequestBaseQuery} from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    bassQuery: graphqlRequestBaseQuery({
        baseUrl: 'http://localhost:3000/graphql'
    }),
    endpoints: (builder) => ({  
            getAllEmployees: builder.query({
                    document: `
                        query GetAllEmployees {
                            getAllEmployees {
                                id
                                name
                                email
                                department
                            }
                        }
                    `
            }),
        createEmploees: builder.mutation({
            query: ({ name, salary, department }) => {
                return {
                    document: `
                        mutation createEmployee($name: String!, $salary: Float!, $department: String!) {
                            createEmployee(name: $name, salary: $salary, department: $department) {
                                id
                                name
                                email
                                department
                            }
                        }
                    `,
                    variables: { name, salary, department },
                };
            },
        }),
    }),
});

export const { useGetAllEmployeeQuery, useCreateEmployeeMutation } = employeeApi;
