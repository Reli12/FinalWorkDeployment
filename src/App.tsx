import NavBar from "./components/Molecules/NavBar";
import Home from "./components/Pages/Home";
import ContextMatrixProvider from "./context/Context";

function App() {
  return (
    <ContextMatrixProvider>
      <NavBar />
      <Home />
    </ContextMatrixProvider>
  );
}
//deploy yyyy
export default App;
