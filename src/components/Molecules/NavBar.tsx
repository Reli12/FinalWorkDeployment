import styled from "styled-components";

const Root = styled.div`
  height: 50px;
  background-color: #379392;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: #fffffa;
`;

const NavBar = () => {
  return (
    <>
      <Root>
        <Text>Calculate system of equations</Text>
      </Root>
    </>
  );
};

export default NavBar;
