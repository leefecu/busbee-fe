import React from 'react';
import 'whatwg-fetch'


class StopResult extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    componentWillMount () {
        var searchParam = this.props.params.saerchVal;
        const self = this
        fetch('http://localhost:3000/StopResult')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body)
                self.setState({data: lists})
            }).catch(function(ex) {
                console.log('Error', ex)
            })
    }
    renderResult(row, index) {

        return (
            <tr key={index} >
                <td>{ row.num}</td>
                <td className="left">{ row.name}</td>
                <td>{ row.arr_time}</td>
                <td></td>
            </tr>
        )
    }
    

    render() {
        return (
            <div className="search-result">
                <table>
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Description</th>
                            <th>Sched</th>
                            <th>Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(this.renderResult)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    
};
    
export default StopResult;
