import { inv, multiply } from "mathjs";
import React, { useState } from "react";
import useStore from "../appStore/appStore";
import det from "../functions/matrixDeterminant";
import MultyplayMatrix from "../functions/MatrixMultiplay";

interface Data {
  numberOfEquation: number;
  setNumberOfEquation: React.Dispatch<React.SetStateAction<number>>;
  resault: number[];
  matrix: number[][];
  Calculate: VoidFunction;
  FinalResault: number[];
  flag: number;
  print: number;
  inversResault: number[];
}

const Context = React.createContext<Data>({} as Data);

export const ContextMatrixProvider = (props: any) => {
  const [numberOfEquation, setNumberOfEquation] = useState(0);
  const [flag, setflag] = useState(0);
  const [print, setPrint] = useState(0);
  let resault: number[] = [];
  let matrix: number[][] = [];
  const [FinalResault, setFinalResault] = useState([] as number[]);
  const [inversResault, setInverseResault] = useState([] as number[]);
  const { setInverse, setPrintMatrix, setFinalResaultPrint } = useStore();
  const Calculate = () => {
    let a = det(matrix);
    // let inv = inverse(matrix);
    setflag(-1);
    if (a == 0) {
      setflag(-1);
    } else {
      let inve = inv(matrix);

      setInverse(matrix);
      let finalResault = MultyplayMatrix(inve, resault, numberOfEquation);
      setflag(1);
      //let FinalResault = multiply(inve, resault);
      //let i = 0;
      for (let i = 0; i < numberOfEquation; i++) {
        FinalResault.push(finalResault[i]);
      }
      for (let i = 0; i < numberOfEquation; i++) {
        for (let j = 0; j < numberOfEquation; j++) {
          inversResault.push(inve[i][j]);
        }
      }
      setFinalResaultPrint(finalResault);
    }
    setPrint(1);
  };
  return (
    <Context.Provider
      value={{
        matrix,
        resault,
        numberOfEquation,
        Calculate,
        setNumberOfEquation,
        FinalResault,
        flag,
        inversResault,
        print,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextMatrixProvider;

export const useMatrixContext = () => React.useContext(Context);
