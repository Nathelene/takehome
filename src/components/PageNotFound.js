import { NavLink } from "react-router-dom";

const PageNotFound = () => {

    return (
        <div className="page-not-found">
            <h2>404 page not found</h2>
            <NavLink to="/">
                <p className="error-home">Please Try Again</p>
            </NavLink>
        </div>
    )
}

export default PageNotFound