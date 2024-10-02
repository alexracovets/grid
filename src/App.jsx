import { Route, Routes } from "react-router-dom";

import Default from "./layout/Default";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App