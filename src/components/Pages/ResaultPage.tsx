import { useEffect } from "react";
import styled from "styled-components";
import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";
import Resault from "../Molecules/Resault";
import Table from "../Molecules/Table";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
`;

const ResaultPage = () => {
  const { numberOfEquation, setNumberOfEquation, FinalResault, flag } =
    useMatrixContext();

  return <Root>{flag && <Resault />}</Root>;
};
export default ResaultPage;
