import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                 <ul>
                    <li><Link to="home"><img src="/images/footer/footer_home_orange.png" /></Link></li>
                    <li><Link to="home"><img src="/images/footer/footer_maps_black.png" /></Link></li>
                    <li><Link to="home"><img src="/images/footer/footer_alarm_black.png" /></Link></li>
                    <li><Link to="home"><img src="/images/footer/footer_favorite_black.png" /></Link></li>
                    <li><Link to="home"><img src="/images/footer/footer_more_white.png" /></Link></li>
                </ul>
            </footer>
        );
    }
    
};
    
export default Footer;
