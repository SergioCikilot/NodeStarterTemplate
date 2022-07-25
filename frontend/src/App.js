import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <HomePage></HomePage>
      </ChakraProvider>
    </div>
  );
}

export default App;
