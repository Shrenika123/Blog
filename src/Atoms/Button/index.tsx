import { Button } from "antd";
import Styles from "./index.module.scss";
import cn from "classnames";

export enum ButtonTypes {
  PRIMARY_BUTTON = "primary",
  DEFAULT_BUTTTON = "default",
  LINK_BUTTON = "link",
}

interface buttomProps {
  onClick: () => void;
  type: ButtonTypes;
  text: string;
  small?: boolean;
}

const CutomButton: React.FC<buttomProps> = ({ type, onClick, text, small }) => {
  const getButtonSize = (): string => {
    if (small) {
      return Styles.buttonSmall;
    }
    return Styles.buttonLarge;
  };
  return (
    <>
      <Button type={type} onClick={onClick} className={cn(getButtonSize)}>
        {text}
      </Button>
    </>
  );
};

export default CutomButton;
