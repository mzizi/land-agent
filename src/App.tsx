import { useState } from "react";

import { Navbar } from "./components";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/plots", label: "Plots on Sale" },
  { href: "/visits", label: "Location Visits" },
  { href: "/media", label: "Media" },
];

function App() {
  return (
    <main className="w-screen h-full min-h-screen">
      <Navbar links={links} />
      <div className="container px-20 py-10 mx-auto"></div>
    </main>
  );
}

export default App;
