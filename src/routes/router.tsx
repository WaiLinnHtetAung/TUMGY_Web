import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../components/NotFound";
import HomePage from "../modules/landing/pages/HomePage";
import AnnouncementPage from "../modules/announcements/pages/AnnouncementPage";
import AnnouncementDetailPage from "../modules/announcements/pages/AnnouncementDetailPage";
import DepartmentPage from "../modules/departments/pages/DepartmentPage";
import NewEventPage from "../modules/news_events/pages/NewEventPage";
import NewEventDetailPage from "../modules/news_events/pages/NewEventDetailPage";
import ThesisPage from "../modules/thesis/pages/ThesisPage";
import ActivityPage from "../modules/activities/pages/ActivityPage";
import AboutUsPage from "../modules/about_us/pages/AboutUsPage";
import ContactUsPage from "../modules/contact_us/pages/ContactUsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/announcements',
                element: <AnnouncementPage />
            },
            {
                path: '/announcements/:id',
                element: <AnnouncementDetailPage />
            },
            {
                path: '/departments/:department',
                element: <DepartmentPage />
            },
            {
                path: '/news-events',
                element: <NewEventPage />
            },
            {
                path: '/news-events/:id',
                element: <NewEventDetailPage />
            },
            {
                path: '/thesis/:department_slug',
                element: <ThesisPage />
            },
            {
                path: '/our-activities',
                element: <ActivityPage />
            },
            {
                path: '/about-us',
                element: <AboutUsPage />
            },
            {
                path: '/contact-us',
                element: <ContactUsPage />
            }
        ]
    }
])

export default router;