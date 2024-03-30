import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
// import Pokemon from "./components/Pokemon.jsx";
// import Profile from "./components/Profile.jsx";
// import PokemonDetail from "./components/PokemonDetail.jsx";

// lazy loading usinng react.lazy and suspense

const Pokemon = lazy(() => import("./components/Pokemon.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const PokemonDetail = lazy(() => import("./components/PokemonDetail.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/pokemon",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Pokemon />
      </Suspense>
    ),
    children: [
      {
        path: ":pokemonId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <PokemonDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "profile",
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Profile />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* themeprovider */}
    {/* <UserProvider> */}
    {/* DashBoardProvider */}
    <RecoilRoot>
      {/* <App /> */}
      <RouterProvider router={router} />
    </RecoilRoot>
    {/* </UserProvider> */}
  </React.StrictMode>
);
