import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormularioInicio from "./componentes/FormularioInicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioInicio />} />
      </Routes>
    </Router>
  );
}

export default App;
