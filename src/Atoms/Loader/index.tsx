import React from "react";
import Styles from "./index.module.scss";

const Loader: React.FC = () => {
  return (
    <>
      <img className={Styles.loader} src="/download.png" />
    </>
  );
};
export default Loader;
