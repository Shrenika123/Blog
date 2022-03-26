import React from "react";
import { Input as AntDInput } from "antd";
import Styles from "./index.module.scss";

interface inputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (searchStr?: string) => void;
  searchData: string[];
  onDropDownSearch: (searchStr: string) => void;
}

const Input: React.FC<inputProps> = ({
  searchData,
  onChange,
  onSearch,
  onDropDownSearch,
}) => {
  const { Search } = AntDInput;
  return (
    <>
      <Search
        placeholder="Search for Blogs"
        onChange={(e) => onChange(e)}
        onSearch={() => onSearch()}
        enterButton
      />
      {searchData?.map((item, index) => {
        return (
          <p
            className={Styles.dropDownField}
            onClick={() => {
              onDropDownSearch(item);
            }}
            key={index + 1}
          >
            {item}
          </p>
        );
      })}
    </>
  );
};
export default Input;
