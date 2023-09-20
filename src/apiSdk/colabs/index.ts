import axios from 'axios';
import queryString from 'query-string';
import { ColabInterface, ColabGetQueryInterface } from 'interfaces/colab';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getColabs = async (query?: ColabGetQueryInterface): Promise<PaginatedInterface<ColabInterface>> => {
  const response = await axios.get('/api/colabs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createColab = async (colab: ColabInterface) => {
  const response = await axios.post('/api/colabs', colab);
  return response.data;
};

export const updateColabById = async (id: string, colab: ColabInterface) => {
  const response = await axios.put(`/api/colabs/${id}`, colab);
  return response.data;
};

export const getColabById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/colabs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteColabById = async (id: string) => {
  const response = await axios.delete(`/api/colabs/${id}`);
  return response.data;
};
