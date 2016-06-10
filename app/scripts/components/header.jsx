import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    checkPathName(){
        if(this.props.pathname === '/search'){
            return ( 
                    <ul className="search">
                        <li>
                        <img className="back" src="/images/top/arrows_white.png" /></li>
                        <li><input type="text" className="searchBar" /></li>
                        <li><img className="search" src="/images/top/search_white.png" /></li>
                        
                    </ul>
                )

         } else if (this.props.pathname === '/favorite'){
            return (
                <ul className="favorite">
                        <li>
                        <img className="back" src="/images/top/arrows_black.png" /></li>
                        <li className="favoriteText">Favourite List</li>
                        <li><img className="bus" src="/images/content/bus_white.png" /></li>
                        <li><img className="stop" src="/images/content/stop_black.png" /></li>
                        
                 </ul>

                )

        } else if (this.props.pathname === '/alarm'){
            return (
                <ul className="alarm">
                        <li>
                        <img className="back" src="/images/top/arrows_black.png" /></li>
                        <li className="alarmText">Alarm Set List</li>
                        <li><img className="bin" src="/images/top/bin_black.png" /></li>
                        
                 </ul>

                )

        }

    }

    render() {
        return (
            <header className="clearfix">
                Application Name
                <nav className="clearfix">

                    <div className="nav-item left">
                        <Link to="home"><img className="search" src="/images/top/arrows_white.png" /></Link>
                    </div>
                    <div className="nav-item right">
                        <Link to="search"><img className="search" src="/images/top/search_white.png" /></Link>

                    </div>
                </nav>
            </header>
        )
    }
};

export default Header;