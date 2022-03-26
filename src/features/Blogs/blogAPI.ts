// A mock function to mimic making an async request for data
import axios from "axios";
import { AxiosResponse, IComments, IGetPostResponse } from "../../interfaces";
import { BASE_URL } from "../../utils/constants";

export const fetchPosts = () => {
  return axios
    .get<AxiosResponse<IGetPostResponse>>(
      `${BASE_URL}/5be8ac29-27c4-4316-adfc-a32ad1e233ce`
    )
    .then((res) => {
      return res.data.response?.posts;
    });
};

export const fetchComments = () => {
  return axios
    .get<AxiosResponse<IComments>>(
      `${BASE_URL}/178e6cea-b223-4e81-b472-fbe3e72f1bec`
    )
    .then((res) => {
      return res.data.response?.comments;
    });
};
