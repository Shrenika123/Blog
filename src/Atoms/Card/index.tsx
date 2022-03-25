import * as React from "react";
import { Card as AntDCard } from "antd";
import Styles from "./index.module.scss";

type CardPropsType = React.ComponentProps<typeof AntDCard>;

const Card: React.FC<CardPropsType> = (props) => (
  <div className={Styles.cardWrapper}>
    <AntDCard {...props} />
  </div>
);

export default Card;
