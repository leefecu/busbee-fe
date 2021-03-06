import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    checkPathName(){

        if(this.props.pathname.indexOf('/search/') > -1){
            return ( 
                    <ul className="search">
                        <li>
                        { this.props.pathRouteName === 'dashboard-child' ? <img className="back" src="/images/top/arrows_white.png" /> : ""}
                        </li>
                        <li><input type="text" className="searchBar" /></li>
                        <li><img className="search" src="/images/top/search_white.png" /></li>
                    </ul>
                )

         } else if (this.props.pathname === '/favorite'){
            return (
                <ul className="favorite">
                        <li>
                        { this.props.pathRouteName === 'dashboard-child' ? <img className="back" src="/images/top/arrows_white.png" /> : ""}
                        </li>
                        <li className="favoriteText">Favourite List</li>
                        <li><img className="bus" src="/images/content/bus_white.png" /></li>
                        <li><img className="stop" src="/images/content/stop_black.png" /></li>
                        
                 </ul>

                )

        } else if (this.props.pathname === '/alarm'){
            return (
                <ul className="alarm">
                    <li>
                    { this.props.pathRouteName === 'dashboard-child' ? <img className="back" src="/images/top/arrows_white.png" /> : ""}
                    </li>
                        <li className="alarmText">Alarm Set List</li>
                        <li><img className="bin" src="/images/top/bin_black.png" /></li>
                 </ul>

                )

        }  else if (this.props.pathname === '/map'){
            return (
                <ul className="map">
                       <li>
                        { this.props.pathRouteName === 'dashboard-child' ? <img className="back" src="/images/top/arrows_white.png" /> : ""}
                        </li>
                        <li><input type="text" className="searchBar" /></li>
                        <li><img className="search" src="/images/top/search_white.png" /></li>
                </ul>

                )

        } 

    }

    render() {
        return (
            <header className="clearfix">
                {this.checkPathName()}
            </header>
        )
    }
};

export default Header;