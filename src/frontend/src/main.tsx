import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import Home from "./pages/Home/Home.tsx";
import Productos from "./pages/Productos/Productos.tsx";
import Login from "./pages/Login/Login.tsx";

// Versión estática: solo Inicio, Productos y Login, sin backend.
// Se usa HashRouter (#/productos) para que funcione en cualquier hosting estático.
const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "productos", element: <Productos /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
