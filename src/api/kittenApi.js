import axios from "axios";


export const kittenApi = axios.create({
    baseURL: "http://localhost:4000"
})