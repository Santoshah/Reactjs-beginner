import React  from 'react';
//stateless functional component : sfc
const NavBar = ({totalCounters}) => {
        return (
        <nav className="navbar navbar-light bg-light">
            <button className="navbar-brand btn btn-success">Navbar 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>    
            </button>
        </nav>
    );
}
 
export default NavBar;

