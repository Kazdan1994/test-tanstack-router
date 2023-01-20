import "./App.css";
import {
  createRouteConfig,
  Link,
  ReactRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const rootRoute = createRouteConfig();

const homeRoute = rootRoute.createRoute({ path: "/", component: Home });
const aboutRoute = rootRoute.createRoute({ path: "/about", component: About });
const blogRoute = rootRoute.createRoute({ path: "/blog" });
const postRoute = rootRoute.createRoute({ path: "$slug" });

const routeConfig = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  blogRoute.addChildren([postRoute]),
]);

const router = new ReactRouter({
  routeConfig,
  defaultPreload: "intent",
});

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default App;
