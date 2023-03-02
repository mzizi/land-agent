import { Contact, Home, NotFound } from "../pages";
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
    component: <NotFound />,
  },
  {
    label: "For Sale",
    href: "/sale",
    component: <NotFound />,
  },
  {
    label: "Location Visits",
    href: "/visits",
    component: <NotFound />,
  },
  {
    label: "Media",
    href: "/media",
    component: <NotFound />,
  },
  {
    label: "Contact",
    href: "/contact",
    component: <Contact />,
  },
];

export default routes;
