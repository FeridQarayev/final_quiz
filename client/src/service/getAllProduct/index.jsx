import axios from "axios";
import { BASE_URL } from "../../consts";

export const getAllProduct = () => {
  return axios.get(`${BASE_URL}/products`);
};