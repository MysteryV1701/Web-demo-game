import { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

export const ScrollContext = createContext();
function App() {
  const [position, setPosition] = useState(0);
  return (
    <ScrollContext.Provider value={{ position, setPosition }}>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Router>
    </ScrollContext.Provider>
  );
}

export default App;
