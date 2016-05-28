import React from 'react';
import { Link } from 'react-router';

class Map extends React.Component {

    render() {
        return (
            <div className="map-container">
                <ul className="map-tab">
                   <li><Link to="/">Bus list</Link></li>
                   <li className="tab-active"><Link to="/">Map</Link></li>
                </ul>
                <div id="googlemap"> d               
                </div>
                
            </div>
        );
    }
    
};
    
export default Map;