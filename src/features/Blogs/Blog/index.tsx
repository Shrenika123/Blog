import { Card } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Button, { ButtonTypes } from "../../../Atoms/Button";
import HeaderTemplate from "../../../Atoms/Header";
import Loader from "../../../Atoms/Loader";
import NotFound from "../../../Components/NotFound.tsx";
import {
  asyncFetchComments,
  blogsStateReducer,
  CounterState,
} from "../blogSlice";
import Styles from "./index.module.scss";

const Blog: React.FC = () => {
  const postsState: CounterState = useAppSelector(blogsStateReducer);
  const { selectedBlog } = postsState;
  const dispatch = useAppDispatch();
  const [showComment, setShowComment] = useState<boolean>(false);

  const { blogComments, status } = postsState;
  const showCommentMethod = () => {
    if (!showComment) {
      dispatch(asyncFetchComments());
    }
    setShowComment(!showComment);
  };

  return (
    <>
      {status === "loading" && <Loader />}
      {selectedBlog.title && status !== "loading" ? (
        <>
          <HeaderTemplate title="BLOGS" />
          <div className={Styles.container}>
            <h1>{selectedBlog.title}</h1>
            <p>{selectedBlog.content}</p>
            <div className={Styles.commentContainer}>
              <Button
                text="Comments"
                type={ButtonTypes.PRIMARY_BUTTON}
                onClick={() => showCommentMethod()}
                small
              />
              {showComment && (
                <Card>
                  <>
                    {blogComments?.map((item) => {
                      return <p className={Styles.comment}>{item}</p>;
                    })}
                  </>
                </Card>
              )}
            </div>
          </div>
        </>
      ) : (
        status !== "loading" && <NotFound />
      )}
    </>
  );
};
export default Blog;
