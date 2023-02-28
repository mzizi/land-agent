import { FC, ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { ThemeProvider } from "./context";
import { NotFound } from "./pages";
import { routes } from "./utils";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="w-full h-full min-h-screen min-w-screen dark:bg-brand-800 dark:text-brand-50">
      <Navbar links={routes} />
      <div className="container flex min-h-[80vh] items-center justify-center h-full py-10 mx-auto">
        {children}
      </div>
    </main>
  );
};

function App() {
  return (
    <ThemeProvider initialTheme="light">
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
