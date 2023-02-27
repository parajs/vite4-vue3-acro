import axios from 'axios';

const apiPrefix = getEnvValue('VITE_API_PREFIX');

export function getKuggamaxIndexPaging(params?: KVObject): Promise<PageData> {
  return axios.get(`${apiPrefix}/subject/index/list`, { params });
}

export function getMockList(params?: KVObject): Promise<KVObject[]> {
  return axios.get(`${apiPrefix}/mock/list`, { params });
}

export function userLogin(data: KVObject): Promise<KVObject> {
  return axios.post(`${apiPrefix}/user/login`, data);
}
