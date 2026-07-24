import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import OurTeamPage from "@/pages/OurTeamPage";
import EventsPage from "@/pages/EventsPage";
import ContactPage from "@/pages/ContactPage";
import SignupPage from "@/pages/SignupPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/our-team", element: <OurTeamPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/sign-up", element: <SignupPage /> },
  { path: "/events", element: <EventsPage /> },
]);
