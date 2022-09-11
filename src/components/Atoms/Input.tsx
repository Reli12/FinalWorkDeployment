import { useState } from "react";
import styled from "styled-components";

interface IProps {
  Id?: string;
}

const RootInput = styled.input`
  width: 60px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 5px;
`;
const Input = ({ Id }: IProps) => {
  const [first, setfirst] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirst(parseInt(e.target.value));
  };
  return (
    <div>
      <RootInput type="number" onChange={onChange} id={Id} step="any" />
    </div>
  );
};
export default Input;
