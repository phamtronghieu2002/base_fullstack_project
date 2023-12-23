import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {PublicRoutes.map(r=><Route {...r}  />)}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
