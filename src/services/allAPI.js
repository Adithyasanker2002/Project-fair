import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";
// register Api
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}
// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}
// add-project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}
// home project
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}
// user project
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}
// all projects
export const allProjectAPI = async (reqHeader,searchKey)=>{
    // query parameter of url -?search=${searchKey} and query stored in search
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}
// projects/675690c56014df5de41b7b3f/edit
export const updateProjectAPI= async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/projects/${id}/edit`,reqBody,reqHeader)
}