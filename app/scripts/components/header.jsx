import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    render() {
        return (
            <header>
                <ul>
                    <li><img className="arrow" src="/images/top/arrows_white.png" /></li>
                    <li><input type="text"/></li>
                    <li><img className="search" src="/images/top/search_white.png" /></li>
                </ul>
            </header>
        )
    }
};

export default Header;