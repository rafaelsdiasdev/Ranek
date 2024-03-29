import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
