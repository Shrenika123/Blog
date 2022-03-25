import * as React from "react";
import { Alert as AntDAlert } from "antd";
import Styles from "./index.module.scss";

export enum AlertTypes {
  ERROR = "error",
  WARNING = "warning",
}
interface alertProps {
  type: AlertTypes;
  text: string;
  onClose: () => void;
}

const Alert: React.FC<alertProps> = ({ type, text, onClose }) => {
  return (
    <div className={Styles.container}>
      <AntDAlert type={type} message={text} closable onClose={onClose} />
    </div>
  );
};
export default Alert;
