import React from "react";
import Styles from "./index.module.scss";

type HeaderTemplatePropsType = {
  title: string;
};

const HeaderTemplate: React.FC<Partial<HeaderTemplatePropsType>> = ({
  title,
}) => {
  return (
    <div className={Styles.container}>
      <h4>{title}</h4>
    </div>
  );
};

export default HeaderTemplate;
