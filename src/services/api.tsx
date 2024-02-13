import axios, {AxiosError, AxiosResponse} from 'axios';
import Config from 'react-native-config';

const rapiBaseUrl = 'https://covid-19-tracking.p.rapidapi.com/v1';
const countriesBaseUrl = 'https://restcountries.com/v2/all';

const BASE_URL = Config.API_BASE_URL || rapiBaseUrl;
const BASE_COUNTRY_URL = Config.COUNTRIES_BASE_URL || countriesBaseUrl;

// Add a request interceptor
axios.interceptors.request.use(async config => {
  config.headers['X-RapidAPI-Key'] =
    'a4f8daaae6msheb78aba0e96bc17p1823e9jsnbca5b9499eea';
  config.headers['X-RapidAPI-Host'] = 'covid-19-tracking.p.rapidapi.com';
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle errors globally
    if (error.response?.status === 401) {
      console.log('You are not authorized to access this resource.');
    }
    return Promise.reject(error);
  },
);

export const getAllCases = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const casesByCountry = async (country: string) => {
  const response = await axios.get(`${BASE_URL}/${country}`);
  return response.data;
};

export const getAllCountries = async () => {
  const response = await axios.get(`${BASE_COUNTRY_URL}`);
  return response.data;
};
