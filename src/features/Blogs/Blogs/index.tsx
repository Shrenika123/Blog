import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import Card from "../../../Atoms/Card";
import {
  CounterState,
  asyncFetchPosts,
  blogsStateReducer,
  selectTheBlog,
} from "../blogSlice";
import Search from "../../../Atoms/Search";
import useDebounce from "../../../utils/debounce";
import { IPostsEntity } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import Alert, { AlertTypes } from "../../../Atoms/Alert";
import { ERROR } from "../../../utils/constants";
import HeaderTemplate from "../../../Atoms/Header";
import Styles from "./index.module.scss";
import Loader from "../../../Atoms/Loader";

export function Blogs() {
  const postsState: CounterState = useAppSelector(blogsStateReducer);
  const dispatch = useAppDispatch();
  const [searchStr, setSearchStr] = useState<string>("");
  const [searchData, setSearchData] = useState<string[]>([]);
  const debouncedSearchTerm = useDebounce(searchStr, 300);
  const navigate = useNavigate();
  const [alert, setAlert] = useState<boolean>(false);
  const { posts, status } = postsState;

  useEffect(() => {
    dispatch(asyncFetchPosts());
  }, [dispatch]);

  const onSearchBlog = () => {
    if (debouncedSearchTerm) {
      return posts
        .filter((item) =>
          item.title?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
        .map((item) => item.title!);
    }
    return [];
  };

  useEffect(() => {
    setSearchData(onSearchBlog());
  }, [debouncedSearchTerm]);

  const onSelectedBlog = (selectedItem: IPostsEntity) => {
    dispatch(selectTheBlog(selectedItem));
    navigate(`/${selectedItem.title}`);
  };

  const onSearchEntry = (dropDownStr?: string) => {
    if (!dropDownStr) {
      return posts.find(
        (item) =>
          item.title?.toLowerCase() === debouncedSearchTerm.toLowerCase()
      );
    } else {
      return posts.find(
        (item) => item.title?.toLowerCase() === dropDownStr.toLowerCase()
      );
    }
  };

  const onEnter = (dropDownStr?: string) => {
    if (!dropDownStr) {
      if (debouncedSearchTerm.length > 0) {
        const selectedItem = onSearchEntry();
        if (selectedItem) {
          onSelectedBlog(selectedItem);
        } else {
          setAlert(true);
        }
      }
    } else {
      onSelectedBlog(onSearchEntry(dropDownStr)!);
    }
  };

  return (
    <>
      <HeaderTemplate title="BLOGS" />
      {alert && (
        <Alert
          type={AlertTypes.WARNING}
          text={ERROR.NOT_FOUND}
          onClose={() => setAlert(false)}
        />
      )}
      {status === "loading" ? (
        <Loader />
      ) : (
        <div className={Styles.container}>
          <div className={Styles.searchContainer}>
            <Search
              onChange={(e) => setSearchStr(e.target.value)}
              searchData={searchData}
              onSearch={() => onEnter()}
              onDropDownSearch={(value) => onEnter(value)}
            />
          </div>
          <h2>{"Blogs List:"}</h2>
          <div>
            {posts.map((item) => {
              return (
                <Card key={item.id} onClick={() => onSelectedBlog(item)}>
                  <h2>{item.title}</h2>
                  <div className={Styles.bodyContainer}>
                    <img src="/blogImage.jpeg" />
                    <p className={Styles.word}>{item.content}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
