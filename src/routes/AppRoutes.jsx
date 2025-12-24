import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import NotFound from "@/pages/NotFound";
import TopCompanies from "@/pages/TopCompanies";
import JobTracker from "@/pages/JobTracker";
import MyCalender from "@/pages/MyCalender";
import Documents from "@/pages/Documents";
import Messages from "@/pages/Messages";
import Notifications from "@/pages/Notifications";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "top-companies", element: <TopCompanies /> },
      { path: "job-tracker", element: <JobTracker /> },
      { path: "my-calendar", element: <MyCalender /> },
      { path: "documents", element: <Documents /> },
      { path: "messages", element: <Messages /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
