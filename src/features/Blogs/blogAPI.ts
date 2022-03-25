// A mock function to mimic making an async request for data
import axios from "axios";
import { AxiosResponse, IComments, IGetPostResponse } from "../../interfaces";
import { BASE_URL } from "../../utils/constants";

export const fetchPosts = () => {
  return axios
    .get<AxiosResponse<IGetPostResponse>>(
      `${BASE_URL}/f154c5d2-3ddd-4be8-a06c-5406c01f6291`
    )
    .then((res) => {
      return res.data.response?.posts;
    });
};

export const fetchComments = () => {
  return axios
    .get<AxiosResponse<IComments>>(
      `${BASE_URL}/bcb9bc55-1cb8-477a-810a-4eeda4b8fbdb`
    )
    .then((res) => {
      return res.data.response?.comments;
    });
};
