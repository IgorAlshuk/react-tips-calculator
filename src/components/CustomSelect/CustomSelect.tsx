import { ITipsOption } from "../../types/types";
import Select from "react-select";
import { customStyles } from "./styles";

interface IProps {
  tips: ITipsOption;
  handleSelect: (option: ITipsOption | null) => void;
}

export const CustomSelect = ({ tips, handleSelect }: IProps) => {
  const options: ITipsOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  return (
    <Select
      onChange={handleSelect}
      value={tips}
      options={options}
      styles={customStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};