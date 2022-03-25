export interface AxiosResponse<T = any> {
  response: T | null;
}

export interface IGetPostResponse {
  posts?: IPostsEntity[];
}
export interface IPostsEntity {
  id?: string;
  title?: string;
  content?: string;
  likes?: number;
}
export interface IComments {
  comments?: string[];
}
