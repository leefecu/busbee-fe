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

/*        componentDidMount() {
                if session != null{
                var user = session.useId;//"user01" 
                const self = this
                    setInterval(function() {
                            fetch('http://localhost:3000/alarmResult')
                            .then(function(response) {
                                return response.text()
                            }).then(function(body) {
                                


                            }).catch(function(ex) {
                                console.log('Error', ex)
                            })
                         }, 3000);   
                }
            }*/
            
    componentDidMount() {}



    componentWillReceivnpeProps () {}

    componentWillUpdate () {}

    componentDidUpdate () {}

    componentWillUnmount () {}




    renderResult(row, index) {

        return (
            <tr key={index}>
                <td>{ row.route_id }</td>
                <td>{ row.stop_id } {" - "} { row.short_name }</td>
                <td><OnOffButton alarmId={row.id} alarmType={row.on_off}/></td>
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