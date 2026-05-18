/// <reference types="node" />


const envName = process.env.TEST_ENV ||'qa';

const environments ={

    qa:
    {
        baseURL:'https://rahulshettyacademy.com'
    },

    uat:
    {
        baseURL:'https://www.google.com'

    }

};
export const env = environments[envName as keyof typeof environments];
