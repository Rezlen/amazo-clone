import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL. Axios is better than JS fetch API because it is easier and easier way of adding BASE URL also widely used.
  baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;