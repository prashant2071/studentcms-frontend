import axios from "axios";
// const base_url = process.env.BASE_URL;
// import Base_url from "../../../config/config";

const http = axios.create({
    baseURL:"http://localhost:8000/api",
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

const GET = (url,isSecured = false,params = {}) =>{
  return http.get(url,{
    headers:getHeaders(isSecured),
    params
  });
};

const POST = (url,data,isSecured = false,params = {}) =>{
    return http.post(url,data,{
      headers:getHeaders(isSecured),
      params
    });
  };

  const UPDATE = (url,data,isSecured = false,params = {}) =>{
    return http.patch(url,data,{
      headers:getHeaders(isSecured),
      params
    });
  };

  const DELETE = (url, isSecured = false,params = {}) =>{
    return http.delete(url,{
      headers:getHeaders(isSecured),
      params
    });
  };
export const httpClient = {
    GET,
    POST,
    UPDATE,
    DELETE

}