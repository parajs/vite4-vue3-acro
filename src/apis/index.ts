import type { PageData, KVObject } from "@/types"
import axios from "axios"

const apiPrefix = getEnvValue('VITE_API_PREFIX')

export function indexlist(params?: KVObject): Promise<PageData> {
    return axios.get(`${apiPrefix}/subject/index/list`, { params })
}

export function homelist(params?: KVObject): Promise<KVObject[]> {
    return axios.get(`${apiPrefix}/home/list`, { params })
}

export function userLogin(data: KVObject): Promise<KVObject> {
    return axios.post(`${apiPrefix}/user/login`, data)
}