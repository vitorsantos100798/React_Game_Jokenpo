import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://www.randomnumberapi.com/api/v1.0/random?min=0&max=3&count=2",
});
