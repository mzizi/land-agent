import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Layout } from "./components";
import { ThemeProvider } from "./context";
import { NotFound } from "./pages";
import { routes } from "./utils";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            {routes.map(({ href, label, component: Component }, key) => (
              <Route
                key={key}
                path={href}
                element={<>{Component}</>}
                loader={() => <p>Loading ${label}</p>}
              />
            ))}
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
