import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {

    render() {
        return (
            <footer>
                 <ul>
                    <li><Link to="home"><img className="tab-icon" src="/images/footer/footer_home_orange.png" /></Link></li>
                    <li><Link to="home"><img className="tab-icon" src="/images/footer/footer_maps_white.png" /></Link></li>
                    <li><Link to="home"><img className="tab-icon" src="/images/footer/footer_alarm_white.png" /></Link></li>
                    <li><Link to="home"><img className="tab-icon" src="/images/footer/footer_favorite_white.png" /></Link></li>
                    <li><Link to="home"><img className="tab-icon" src="/images/footer/footer_more_white.png" /></Link></li>
                </ul>
            </footer>
        );
    }
    
};
    
export default Footer;
