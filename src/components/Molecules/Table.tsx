import styled from "styled-components";
import useStore from "../../appStore/appStore";
import { useMatrixContext } from "../../context/Context";
import Input from "../Atoms/Input";

const Button = styled.button`
  background-color: #379392;
  border-radius: 10px;
  border: 1px solid #379392;
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fffffa;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

const Table = () => {
  const { numberOfEquation, resault, matrix, Calculate } = useMatrixContext();
  const { setPrintMatrix, setPrintResault } = useStore();
  let array = new Array(numberOfEquation);
  for (let i = 0; i < numberOfEquation; i++) {
    array[i] = i;
  }

  const HandleSumbit = () => {
    let d: string;
    for (let i = 0; i < numberOfEquation; i++) {
      matrix[i] = [];
      for (let j = 0; j < numberOfEquation; j++) {
        const input = document.getElementById(`${i},${j}`) as HTMLInputElement;
        d = input.value;

        if (d === "") {
          matrix[i][j] = 0;
        } else {
          matrix[i][j] = parseFloat(d);
        }
      }
    }
    setPrintMatrix(matrix);
    for (let j = 0; j < numberOfEquation; j++) {
      const input = document.getElementById(`Resault${j}`) as HTMLInputElement;
      d = input.value;
      if (d === "") {
        resault[j] = 0;
      } else {
        resault[j] = parseFloat(d);
      }
    }
    setPrintResault(resault);
    Calculate();
  };

  return (
    <>
      <div>
        <table>
          <tbody>
            {array.map((el, i) => (
              <tr>
                {array.map((el, j) => (
                  <>
                    <th>
                      <Input key={`${i}${j}`} Id={`${i},${j}`} />
                    </th>
                    {j + 1 !== numberOfEquation ? (
                      <th>x{`${j + 1}`}+</th>
                    ) : (
                      <th>x{`${j + 1}`}</th>
                    )}
                  </>
                ))}
                <th>=</th>
                <th>
                  <Input key={`${i}+Resault`} Id={`Resault${i}`} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={HandleSumbit}>Izračunaj</Button>
    </>
  );
};

export default Table;
