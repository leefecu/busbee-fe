import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {

    getIconType(iconName) {
        if (iconName==='home') {
            return this.props.pathname==='/' ? 'orange' : 'white';
        } else if (iconName==='maps') {
            return this.props.pathname==='/map' ? 'orange' : 'white';
        }
    }

    getIcon(iconName) {
        //return '/images/footer/footer_' + iconName + '_' + this.getIconType(iconName) +'.png';  
        if (iconName === 'home') {
            if (this.props.pathname === '/') {
                return '/images/footer/footer_home_orange.png';
            } else {
                return '/images/footer/footer_home_white.png';
            }
        } else if (iconName === 'maps') {
            if (this.props.pathname === '/map') {
                return '/images/footer/footer_maps_orange.png';
            } else {
                return '/images/footer/footer_maps_white.png';
            }
        }
    }

    render() {
        return (
            <footer>
                 <ul>
                    <li>
                        <Link to="/">
                            <img className="tab-icon" src={ this.getIcon('home') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="map">
                            <img className="tab-icon" src={ this.getIcon('maps') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="tab-icon" src="/images/footer/footer_alarm_white.png" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="tab-icon" src="/images/footer/footer_favorite_white.png" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="tab-icon" src="/images/footer/footer_more_white.png" />
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
    
};
    
export default Footer;
