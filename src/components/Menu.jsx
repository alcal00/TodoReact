import {
    Typography,
} from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom"
//className={({ isActive }) => (isActive ? 'activeLink' : undefined) }
export function Menu() {
    const location = useLocation();
    return (
        <div className="bg-gray-50 py-4 shadow-lg" >
            <ul className="mb-2 mt-2 flex flex-row gap-2 lg:mb-3 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li> <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium">
                    <NavLink to="/"
                          className={`flex items-center hover:text-purple-500 transition-colors text-2xl 
                          ${location.pathname === "/" ? "border-b-2 border-purple-500" : ""
                              }`}>
                        Home
                    </NavLink>
                </Typography> </li>

                <li> <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium">
                    <NavLink to="/add"
                          className={`flex items-center hover:text-purple-500 transition-colors text-2xl 
                          ${location.pathname === "/add" ? "border-b-2 border-purple-500" : ""
                              }`}>
                        Add
                    </NavLink>
                </Typography> </li>

                <li> <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium">
                    <NavLink
                        to="/list"
                        className={`flex items-center hover:text-purple-500 transition-colors text-2xl 
                        ${location.pathname === "/list" ? "border-b-2 border-purple-500" : ""
                            }`}
                    >
                        List
                    </NavLink>
                </Typography> </li>
            </ul>
        </div>
    )
}