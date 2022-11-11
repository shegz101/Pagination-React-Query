import axios from "axios";

//get api request from axios
export const axiosRequest = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (pageParam = 1) => {
    const resp = await axiosRequest.get(`/posts?_page=${pageParam}`);
    return resp.data
}