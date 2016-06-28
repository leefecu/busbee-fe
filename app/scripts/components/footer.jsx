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
        } else if (iconName === 'alarm') {
            if (this.props.pathname === '/alarm') {
                return '/images/footer/footer_alarm_orange.png';
            } else {
                return '/images/footer/footer_alarm_white.png';
            }
        } else if (iconName === 'favorite') {
            if (this.props.pathname === '/favorite') {
                return '/images/footer/footer_favorite_orange.png';
            } else {
                return '/images/footer/footer_favorite_white.png';
            }
        } else if (iconName === 'more') {
            if (this.props.pathname === '/more') {
                return '/images/footer/footer_more_orange.png';
            } else {
                return '/images/footer/footer_more_white.png';
            }
        }
    }

    render() {
        return (
            <footer id='ft'>
                 <ul>
                    <li>
                        <Link to="/">
                            <img className="tab-icon" src={ this.getIcon('home') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <img className="tab-icon" src={ this.getIcon('maps') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="/alarm">
                            <img className="tab-icon" src={ this.getIcon('alarm') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorite">
                            <img className="tab-icon" src={ this.getIcon('favorite') } />
                        </Link>
                    </li>
                    <li>
                        <Link to="/more">
                            <img className="tab-icon" src={ this.getIcon('more') } />
                        </Link>
                    </li>
                </ul>
            </footer>
        );
    }
    
};
    
export default Footer;
