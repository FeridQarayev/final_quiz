import axios from "axios";
import { BASE_URL } from "../../consts";

export const createProduct = (product) => {
  return axios.post(`${BASE_URL}/products`, product);
};
