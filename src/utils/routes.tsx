import { Home } from "../pages/Home";
import { IRoute } from "../types";

const routes: IRoute[] = [
  {
    label: "Home",
    href: "/",
    component: <Home />,
  },
  {
    label: "About Us",
    href: "/about",
    component: <Home />,
  },
  {
    label: "For Sale",
    href: "/sale",
    component: <Home />,
  },
  {
    label: "Location Visits",
    href: "/visits",
    component: <Home />,
  },
  {
    label: "Media",
    href: "/media",
    component: <Home />,
  },
  {
    label: "Contact",
    href: "/contact",
    component: <Home />,
  },
];

export default routes;
