import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

class Map extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            lat: 0,
  			lng: 0
        }
    }

    componentWillMount () {
        // API.call('givemedata', function(result) {
        //     this.setState({data: result})
        // }), 
        var lat =  -36.844276;
  		var lng =  174.767695;
        this.setState({lat: lat})
        this.setState({lng: lng})
    }

    onMapCreated(map) {
     map.setOptions({
       disableDefaultUI: true
     });
    }

    onDragEnd(e) {
     console.log('onDragEnd', e);
    }
 
    onCloseClick() {
     console.log('onCloseClick');
    }

    onClick(e) {
     console.log('onClick', e);
    }

    render() {
        return (
            <div className="map-container">
                <ul className="map-tab">
                	<li><Link to="/Map">Bus list</Link></li>
                	<li className="tab-active"><Link to="/Map">Map</Link></li>
                </ul>
                <div class="googlemap">
                	<Gmaps
				        width={'100%'}
				        height={'600px'}
				        lat={this.state.lat}
				        lng={this.state.lng}
				        zoom={14}
				        loadingMessage={'Be happy'}
				        params={{v: '3.exp', key: 'AIzaSyAnXBKXJ1snb4k5fp_mTAGl64x4UREM6YI'}}
				        onMapCreated={this.onMapCreated}>
				        <Marker
				          lat={this.state.lat}
				          lng={this.state.lng}
				          draggable={true}
				          onDragEnd={this.onDragEnd} />
				        <InfoWindow
				          lat={this.state.lat}
				          lng={this.state.lng}
				          content={'Hello, React :)'}
				          onCloseClick={this.onCloseClick} />
				       
				      </Gmaps>
                </div>
            </div>
        );
    }
    
};
    
export default Map;
