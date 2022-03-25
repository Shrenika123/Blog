import React from "react";
import { ERROR } from "../../utils/constants";
import Styles from "./index.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={Styles.container}>
      <h4>{ERROR.NOT_FOUND}</h4>
      <img src="/notFound.jpg" alt="not-found" width={"50%"} height={"50%"} />
    </div>
  );
};
export default NotFound;
