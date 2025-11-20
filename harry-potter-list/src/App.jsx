import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import MealList from "./pages/MealList";
import MealDetails from "./pages/MealDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/items", element: <MealList /> },
      { path: "/items/:id", element: <MealDetails /> },
      { path: "/login", element: <Login /> },
      {path: "/signup", element: <Signup />},
      {path: "/profile", element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      )},
    ],
  },
]);

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
  
}

export default App;