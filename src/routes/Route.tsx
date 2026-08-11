import type { RouteObject } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Skill from "../pages/Skill"


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
    }
]

export default routes