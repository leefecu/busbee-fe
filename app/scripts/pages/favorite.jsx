import React from 'react';
import 'whatwg-fetch'

class Favorite extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            busList: [],
            stopList: []
        }
    }
    
    componentWillMount () {
        const self = this
        fetch('http://localhost:3000/favoriteList')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body);
                self.setState({busList: lists[0]['busList']})
                self.setState({stopList: lists[0]['stopList']})                
            }).catch(function(ex) {
                console.log('Error', ex)
            })
    }

    renderFavorite(row, index) {
        return (
            <tr key={index}>
                <td>{ row.target_id }</td>
                <td>{ row.target_name }</td>
                <td>
                {(() => {
                    switch (row.type) {                    
                      case "B": return <img src="/images/content/delete_red.png" />;
                      case "S": return <img src="/images/content/delete_red.png" />;
                    }
                })()}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div className="favorite">
                <table>
                    <thead>
                        <tr>
                            <th>Bus Num</th>
                            <th>Description</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.busList.map(this.renderFavorite)
                        }
                    </tbody>
                </table>
                 <table >
                    <thead> 
                        <tr>
                            <th>Stop Num</th>
                            <th>Description</th>
                            <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.stopList.map(this.renderFavorite)
                        }
                    </tbody>
                </table>
            </div>
        );

    }
    
};



    
export default Favorite;
