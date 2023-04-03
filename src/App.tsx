import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authors from "./pages/authors";
import Login from "./pages/login";
import Quotes from "./pages/quotes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/quotes",
    element: <Quotes />,
  },
  {
    path: "/authors",
    element: <Authors />,
  },
]);

export default App;
