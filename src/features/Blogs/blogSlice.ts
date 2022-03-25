import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IComments, IPostsEntity } from "../../interfaces";
import { fetchComments, fetchPosts } from "./blogAPI";

export interface CounterState {
  posts: IPostsEntity[];
  status: "idle" | "loading" | "failed";
  blogComments?: IComments["comments"];
  selectedBlog: IPostsEntity;
}

const initialState: CounterState = {
  posts: [],
  status: "idle",
  blogComments: [],
  selectedBlog: {},
};

export const asyncFetchPosts = createAsyncThunk("blogs/fecthPost", async () => {
  const response = await fetchPosts();
  return response;
});

export const asyncFetchComments = createAsyncThunk(
  "blogs/fecthComments",
  async () => {
    const response = await fetchComments();
    return response;
  }
);

export const counterSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    selectTheBlog: (state, action: PayloadAction<IPostsEntity>) => {
      state.selectedBlog = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(asyncFetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncFetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action?.payload || [];
      })
      .addCase(asyncFetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncFetchComments.fulfilled, (state, action) => {
        state.status = "idle";
        state.blogComments = action.payload;
      });
  },
});

export const { selectTheBlog } = counterSlice.actions;

export const blogsStateReducer = (state: RootState) => state.blogs;

export default counterSlice.reducer;
