/* istanbul ignore file */
import axios from 'axios';

const instance = axios.create({
  baseURL: window.location.href,
});

const getApiParams = (url, requestMethod, payload, reqHeaders = {}) => {
  const method = requestMethod && requestMethod.toLowerCase();
  const params = {
    url,
    method,
    headers: reqHeaders,
  };

  if (method !== 'get' && payload) {
    params.data = payload;
  }

  return params;
};

const invokeAPI = (url, requestMethod, payload, reqHeaders) => {
  return instance(getApiParams(url, requestMethod, payload, reqHeaders))
    .then(response => {
      const { status } = response;
      return {
        status,
        data: response.data,
        headers: response.headers,
        isSuccess: true,
      };
    })
    .catch(error => {
      const { status } = error;
      return {
        status,
        error,
        isSuccess: false,
      };
    });
};

export default invokeAPI;
