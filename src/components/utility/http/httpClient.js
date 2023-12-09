import axios from "axios";
const base_url = process.env.BASE_URL;

const http = axios.create({
    baseURL:base_url,
    responseType:"json",
    timeout:20000,
    timeoutErrorMessage: "server took too much time to respond"
})

const getHeaders = (isSecured = false) =>{
    const option = {
        "Content-Type":"application/json"
    };
    if(isSecured){
        option["Authorization"] = localStorage.getItem("token");
    }
    return option;
};

const GET = (url,data,isSecured = false,params = {}) =>{
  return http.get(url,{
    headers:getHeaders(isSecured),
    params
  });
};

export const httpClient = {
    GET
}