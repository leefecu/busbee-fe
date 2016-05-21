import React from 'react';

class SearchResult extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    componentWillMount () {
        // API.call('givemedata', function(result) {
        //     this.setState({data: result})
        // })
        var data = [
            {
                number: "123",
                description: "123 bus"
            },
            {
                number: "456",
                description: "456 bus"
            },
            {
                number: "789",
                description: "789 bus"
            },
            {
                number: "012",
                description: "012 bus"
            }
        ]

        this.setState({data: data})
    }

    componentDidMount () {}

    componentWillReceiveProps () {}

    componentWillUpdate () {}

    componentDidUpdate () {}

    componentWillUnmount () {}

    renderResult(row, index) {
        return (
            <tr key={index}>
                <td>{ row.number }</td>
                <td>{ row.description }</td>
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
