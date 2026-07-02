import * as yup from 'yup'

export const userschema =yup.object({
    name:yup.string().required('name is required'),
    username:yup.string().required('username is required'),
    email:yup.string().email('Invalid email').required('email is required'),
    age:yup.number().positive().integer().required()
})