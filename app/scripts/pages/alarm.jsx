import React from 'react';
import OnOffButton from '../components/onoff.button.jsx'
import 'whatwg-fetch'


class Alarm extends React.Component {




    constructor(props){
        super(props)

        this.state = {
            data: []
        }
    }

    componentWillMount () {
        const self = this
        fetch('http://localhost:3000/alarmList')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                var lists = JSON.parse(body)
                self.setState({data: lists})
            }).catch(function(ex) {
                console.log('Error', ex)
            })
    }

    componentDidMount () {}

    componentWillReceivnpeProps () {}

    componentWillUpdate () {}

    componentDidUpdate () {}

    componentWillUnmount () {}

    renderResult(row, index) {
        return (
            <tr key={index}>
                <td>{ row.num }</td>
                <td>{ row.stop }</td>
                <td><OnOffButton alarmId={row.id} alarmType={row.type} /></td>

            </tr>
        )
    }

    render() {
       
        return (
            <div className="alarm-list">
                <div className="scrollable">
                    <table>
                        <thead>
                            <tr>
                                <th>Bus</th>
                                <th>Bus Stop</th>
                                <th>On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map(this.renderResult)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

};
    
export default Alarm;