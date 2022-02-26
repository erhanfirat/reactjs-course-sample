import axios from 'axios';
import { toaster } from '../utils';

const BASE_URL = "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/";

const API = axios.create({
    baseURL: BASE_URL
});

export const REQ_TYPES = Object.freeze({
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete"
});



export const doRequest = ({ type, url, payload }) => {
    return new Promise((resolve, reject) => {

        API[type](url, payload)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                // Do app general err logic here

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    // console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log('Error', error.message);
                }
                console.log(error.config);

                toaster(`API ${url} [${type}]: ${error.message}`, "error");
                reject(error)
            });
    });
}