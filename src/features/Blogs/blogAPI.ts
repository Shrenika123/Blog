// A mock function to mimic making an async request for data
import axios from "axios";
import { AxiosResponse, IComments, IGetPostResponse } from "../../interfaces";
import { BASE_URL } from "../../utils/constants";

export const fetchPosts = () => {
  return axios
    .get<AxiosResponse<IGetPostResponse>>(`${BASE_URL}/getBlogs`)
    .then((res) => {
      return res.data.response?.posts;
    });
};

export const fetchComments = () => {
  return axios
    .get<AxiosResponse<IComments>>(`${BASE_URL}/getComments`)
    .then((res) => {
      return res.data.response?.comments;
    });
};
