import axios from 'axios';

//API base URL
const API_URL = '/api/clients/';
//API PORT
const API_PORT = process.env.NODE_LOCAL_PORT || 6868;

// All the requests to API are made here

class RequestService {
  // Request to create a new client in DB
  createClient(data) {
    return axios
      .post(`http://localhost:${API_PORT}${API_URL}createClient`, data)
      .then((response) => {
        return response;
      });
  }

  // Request to get all clients in DB
  getAllClients() {
    return axios
      .get(`http://localhost:${API_PORT}${API_URL}retrieveAllClients`)
      .then((response) => {
        return response.data;
      });
  }

  // Request to get average grade of clients
  getGradesMean() {
    return axios
      .get(`http://localhost:${API_PORT}${API_URL}retrieveGradesMean`)
      .then((response) => {
        return response.data;
      });
  }

  // Request to retrieve client(s) by string
  getClient(data) {
    return axios
      .get(`http://localhost:${API_PORT}${API_URL}/retrieveClient`, {
        params: data,
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new RequestService();
