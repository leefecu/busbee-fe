import React from 'react';
import 'whatwg-fetch'

class SearchResult extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    /*componentWillMount () {
        const self = this
        fetch('http://localhost:3000/stops')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body)
                self.setState({data: lists})
            }).catch(function(ex) {
                console.log('Error', ex)
            })
    }*/

    componentDidMount () {}

    componentWillReceiveProps () {}

    componentWillUpdate () {}

    componentDidUpdate () {}

    componentWillUnmount () {}

    renderResult(row, index) {
        return (
            <tr key={index}>
                <td>{ row.num }</td>
                <td>{ row.name }</td>
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
                            <th>Num</th>
                            <th>Description</th>
                            <th></th>
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
    
export default SearchResult;
