import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import InfoPage from "../pages/InfoPage";
import EditPage from "../pages/EditPage";
import AddPage from "../pages/AddPage";
import ProfilePage from "../pages/ProfilePage";
import DiscoverPage from "../pages/DiscoverPage";
import CreatorsPage from "../pages/CreatorsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "discover",
        element: <DiscoverPage />,
      },
      {
        path: "creators",
        element: <CreatorsPage />,
      },
      {
        path: "info/:id",
        element: <InfoPage />,
      },
      {
        path: "edit/:id",
        element: <EditPage />,
      },
      {
        path: "add",
        element: <AddPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);
