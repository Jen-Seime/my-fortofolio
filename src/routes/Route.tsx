import type { RouteObject } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"
import Project from "../pages/Project"
import Contact from "../pages/Contact"


const routes: RouteObject[] = [
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
        path: "/Contact",
        element: <Contact/>
    }
]

export default routes