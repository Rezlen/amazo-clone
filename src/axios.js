import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL. Axios is better than JS fetch API because it is easier and easier way of adding BASE URL also widely used.
  baseURL: 'https://us-central1-amazo-clone1.cloudfunctions.net/api'
    // Local host APIfor testing period. "http://localhost:5001/amazo-clone1/us-central1/api",
});

export default instance;