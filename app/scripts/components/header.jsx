import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    render() {
        return (
            <header className="clearfix">
                Application Name
                <nav className="clearfix">
                    <div className="nav-item">
                        <Link to="home"><img className="search" src="/images/top/arrows_white.png" /></Link>
                    </div>
                    <div className="nav-item">
                        <Link to="search"><img className="search" src="/images/top/search_white.png" /></Link>
                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;