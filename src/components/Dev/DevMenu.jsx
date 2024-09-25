import {NavLink} from "react-router-dom";

export default function DevMenu () {
    return (
        <>
            <NavLink to="/">Home</NavLink> | <NavLink to="/test">Test</NavLink>
        </>
    )
}