import React, { useState } from "react";
import styled from "styled-components";
import useStore from "../../appStore/appStore";
import { useMatrixContext } from "../../context/Context";
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
const Button = styled.button`
  background-color: #379392;
  border-radius: 10px;
  border: 1px solid #379392;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fffffa;
  font-weight: bold;
  white-space: nowrap;
  :hover {
    cursor: pointer;
  }
`;
const SelectItem = styled.select`
  width: 40px;
  height: 30px;
  border-radius: 4px;
`;
const MatrixPrintStyle = styled.div`
  display: flex;
  gap: 20px;
  border-left: solid 2px black;
  border-right: solid 2px black;
  padding: 10px;
  margin: 20px;
`;
const BorderLeft = styled.div`
  margin: -10px;
  margin-left: -12px;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  width: 5px;
`;
const BorderRight = styled.div`
  margin: -10px;
  margin-right: -12px;
  border-top: solid 2px black;
  border-bottom: solid 2px black;
  width: 5px;
`;
const Colum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WrapperColum = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
const TextInverse = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #383b53;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
const TextWrapper = styled.div`
  height: 100%;
  margin-right: -40px;
  font-size: 20px;
  font-weight: bold;
  color: #383b53;
`;
const SmallText = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: -4px;
`;
const BigText = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
`;
const Home = () => {
  const { numberOfEquation, setNumberOfEquation, flag, print } =
    useMatrixContext();
  const [showeInverse, setShoweInverse] = useState(false);
  let a: string;
  const onChange = () => {
    const input = document.getElementById("ddlViewBy") as HTMLInputElement;
    a = input.value;
    setNumberOfEquation(parseInt(a));
  };
  const { inverse, matrixPrint, printResault } = useStore();
  console.log(inverse);
  return (
    <Root>
      {print !== 1 && (
        <>
          <Text>Unesite broj jednadžbi koje želite imati:</Text>
          <SelectItem id="ddlViewBy">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </SelectItem>
          <Button onClick={onChange}>Unesite</Button>
        </>
      )}

      {numberOfEquation > 1 && (
        <>
          <Text>
            Bitno je napomenuti da ako polje se ostavi prazno prilikom unosa,
            tada će njegova vrijednost biti jednaka nuli.
          </Text>
          <Text>Unesite vrijednosti koeficijenata jednadžbe:</Text>
          <Table />
        </>
      )}
      <Wrapper>
        {print === 1 && (
          <>
            <TextWrapper>A=</TextWrapper>
            <MatrixPrintStyle>
              <BorderLeft />
              <WrapperColum>
                {[...Array(numberOfEquation)].map((_, i) => (
                  <Row>
                    {[...Array(numberOfEquation)].map((_, j) => (
                      <React.Fragment key={i + j}>
                        <TextInverse> {matrixPrint[i][j]}</TextInverse>
                      </React.Fragment>
                    ))}
                  </Row>
                ))}
              </WrapperColum>
              <BorderRight />
            </MatrixPrintStyle>
          </>
        )}
        {print === 1 && (
          <>
            <TextWrapper>X=</TextWrapper>
            <MatrixPrintStyle>
              <BorderLeft />
              <WrapperColum>
                {[...Array(numberOfEquation)].map((_, i) => (
                  <Row key={i}>
                    <TextInverse>
                      x <SmallText>{i + 1}</SmallText>
                    </TextInverse>
                  </Row>
                ))}
              </WrapperColum>
              <BorderRight />
            </MatrixPrintStyle>
          </>
        )}
        {print === 1 && (
          <>
            <TextWrapper>B=</TextWrapper>
            <MatrixPrintStyle>
              <BorderLeft />
              <WrapperColum>
                {[...Array(numberOfEquation)].map((_, i) => (
                  <Row key={i}>
                    <TextInverse> {printResault[i]}</TextInverse>
                  </Row>
                ))}
              </WrapperColum>
              <BorderRight />
            </MatrixPrintStyle>
          </>
        )}
      </Wrapper>
      {<Resault />}
      {flag === 1 && inverse != 0 && (
        <Button onClick={() => setShoweInverse(!showeInverse)}>
          Prikazi inverznu matricu
        </Button>
      )}
      {flag === 1 && inverse !== 0 && showeInverse && (
        <Wrapper>
          <TextWrapper> A^-1=</TextWrapper>
          <MatrixPrintStyle>
            <BorderLeft />
            <WrapperColum>
              {[...Array(numberOfEquation)].map((el, i) => (
                <Row>
                  {[...Array(numberOfEquation)].map((ele, j) => (
                    <React.Fragment key={j}>
                      <div>
                        <TextInverse> {inverse[i][j]}</TextInverse>
                      </div>
                    </React.Fragment>
                  ))}
                </Row>
              ))}
            </WrapperColum>
            <BorderRight />
          </MatrixPrintStyle>
        </Wrapper>
      )}
      {print === 1 && (
        <Button onClick={() => window.location.reload()}>Reset all</Button>
      )}
    </Root>
  );
};
export default Home;
