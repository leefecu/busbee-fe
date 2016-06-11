import React from 'react';
import 'whatwg-fetch'

class Favorite extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }
    
    componentWillMount () {
        const self = this
        fetch('http://localhost:3000/searchListResult')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body)
                self.setState({data: lists})
            }).catch(function(ex) {
                console.log('Error', ex)
            })
    }

    renderFavorite(row, index) {
        return (
            <tr key={index}>
                <td>{ row.num }</td>
                <td>{ row.name }</td>
                <td>
                {(() => {
                    switch (row.type) {                    
                      case "B": return <img src="/images/content/bus_black.png" />;
                      case "S": return <img src="/images/content/stop_black.png" />;
                    }
                })()}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div className="favorite_01">
                <table>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Description</th>
                            <th>B/S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(this.renderFavorite)
                        }
                    </tbody>
                </table>
                 <table>
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Description</th>
                            <th>B/S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(this.renderFavorite)
                        }
                    </tbody>
                </table>
            </div>
        );

    }
    
};



    
export default Favorite;
