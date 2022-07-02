import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <NavLink
        to="dashboard/create-band"
        key="1"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <span className="icon"></span>
        Create a Band
      </NavLink>
      <NavLink
        to="dashboard/see-bands"
        key="2"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <span className="icon"></span>
        See Bands
      </NavLink>
      <NavLink
        to="dashboard/profile"
        key="3"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <span className="icon"></span>
        Profile
      </NavLink>
    </div>
  );
};

export default NavLinks;
