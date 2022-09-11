import styled from "styled-components";
import useStore from "../../appStore/appStore";
import { useMatrixContext } from "../../context/Context";

const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #383b53;
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
const TextWrapper = styled.div`
  height: 100%;
  margin-right: -40px;
  font-size: 20px;
  font-weight: bold;
  color: #383b53;
`;
const MatrixPrintStyle = styled.div`
  display: flex;
  gap: 20px;
  border-left: solid 2px black;
  border-right: solid 2px black;
  padding: 10px;
  margin: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const TextRow = styled.span`
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
const Resault = () => {
  const { numberOfEquation, flag } = useMatrixContext();
  const { finalResault } = useStore();
  return (
    <>
      {flag === -1 ? (
        <>
          <Text>Sustav se ne može riješiti jer matrica A </Text>
          <Text>nije regularna odnosno nema inverznu matricu.</Text>
        </>
      ) : (
        <>
          {flag === 1 && (
            <>
              <Text>Riješenje sustava linearnih jednadžbi:</Text>
              <Wrapper>
                <TextWrapper>X=</TextWrapper>
                <MatrixPrintStyle>
                  <BorderLeft />
                  <WrapperColum>
                    {[...Array(numberOfEquation)].map((_, i) => (
                      <Row key={i}>
                        <TextRow> {finalResault[i]}</TextRow>
                      </Row>
                    ))}
                  </WrapperColum>
                  <BorderRight />
                </MatrixPrintStyle>
              </Wrapper>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Resault;
