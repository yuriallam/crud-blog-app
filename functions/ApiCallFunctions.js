import { IP } from "../constants/IP";
import axios from "axios";

const instance = axios.create();

export async function makeRemoteRequest(url, method, data = null) {
    return instance({
        method: method,
        url: url,
        data: data
    });
}


export async function getRequest(path) {
    return makeRemoteRequest(IP + path, "GET");
}

export async function postRequest(path, body) {
    return makeRemoteRequest(IP + path, "POST", body);
}

export async function putRequest(path, body) {
    return makeRemoteRequest(IP + path, "PUT", body);
}

export async function deleteRequest(path) {
    return makeRemoteRequest(IP + path, "DELETE");
}
