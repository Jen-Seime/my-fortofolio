import { Outlet, ScrollRestoration, type RouteObject } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Project from "../pages/Project"
import Contact from "../pages/Contact"
import ProjectDetail from "../pages/ProjectDetail"
import Certification from "../pages/Certification"
import CertificationDetail from "../pages/CerficationDetail"

// eslint-disable-next-line react-refresh/only-export-components
const RootLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    )
}

const routes: RouteObject[] = [
    {
    element:<RootLayout></RootLayout>,
    children: [

    
    
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/skill",
        element: <Skill/>
    },
    {
        path: "/project",
        element: <Project/>
    },
    {
        path: "/certification",
        element: <Certification/>
    },
    {
        path: "/Contact",
        element: <Contact/>
    },
    {
        path: "/project/:slug",
        element: <ProjectDetail/>
    },
    {
        path: "/certification/:slug",
        element: <CertificationDetail/>
    }
]
}
]

export default routes