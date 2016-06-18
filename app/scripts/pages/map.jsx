import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';
import TabPanel, { TabStrip } from 'react-tab-panel';
import 'whatwg-fetch'


class Map extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            makerList:[],
            lat: -36.844276,
            lng: 174.767695,
  			data: []
        }
    }

    componentWillMount () {
        // API.call('givemedata', function(result) {
        //     this.setState({data: result})
        // }), 
        const self = this
        fetch('http://localhost:3000/nearStopList')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body)
                self.setState({makerList: lists})
            }).catch(function(ex) {
                console.log('Error', ex)
            })
        
    }
    renderResult(row, index) {
        return (
            <tr key={index}>
                <td>{ row.num }</td>
                <td>{ row.name }</td>               
            </tr>
        )
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

    makeMaker(row){
        return(
            <Marker
              lat={row.lat}
              lng={row.lng}
              draggable={row.draggable}/>
            )
    }
    render() {
        return (

            <div className="map-container" >
            <TabPanel onActivate={(index) => console.log('Tab ' + index + ' was activated!')} tabAlign="stretch" tabPosition="top">
			    <div tabTitle="Stop list">
			      <div className="search-result">
	                <table>
	                    <thead>
	                        <tr>
	                            <th>Num</th>
	                            <th>Description</th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        {
	                            this.state.makerList.map(this.renderResult)
	                        }
	                    </tbody>
	                </table>
	              </div>
			    </div>

			    <div tabTitle="Map">
			      <div class="googlemap" >
                	<Gmaps

                		width={'100%'}
                		height={'100vh'}                	    
				        lat={this.state.lat}
				        lng={this.state.lng}
				        zoom={16}
				        loadingMessage={'Be happy'}
				        params={{v: '3.exp', key: 'AIzaSyAnXBKXJ1snb4k5fp_mTAGl64x4UREM6YI'}}
				        onMapCreated={this.onMapCreated}>
                        {this.state.makerList.map(this.makeMaker)}
				        <InfoWindow
				          lat={this.state.lat}
				          lng={this.state.lng}
				          content={'Hello, React :)'}
				          onCloseClick={this.onCloseClick} />
				       
				      </Gmaps>
                </div>
			    </div>
			  </TabPanel>
                
            </div>
        );
    }
    
};
    
export default Map;
