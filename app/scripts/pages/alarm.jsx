import React from 'react';


class Alarm extends React.Component {

    render() {
        return (
        	<div className="alarm-list">
                <table>
                    <thead>
                        <tr>
                            <th>Bus</th>
                            <th>Bus Stop</th>
                            <th>On/Off</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><a href="#">
                            <td>887</td>
                            <td>2475 - Constellation</td>
                            <td><img src="../images/content/stop_black.png" /></td>
                        </a></tr>
                        <tr>
                            <td>887</td>
                            <td>2475 - Constellation</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                        <tr>
                            <td>656</td>
                            <td>4334 - Hibury Shops</td>
                            <td><img src="../images/content/stop_black.png" /></td>
                        </tr>
                        <tr>
                            <td>887</td>
                            <td>2475 - Constellation</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                        <tr>
                            <td>656</td>
                            <td>4334 - Hibury Shops</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                        <tr>
                            <td>887</td>
                            <td>2475 - Constellation</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                        <tr>
                            <td>656</td>
                            <td>2475 - Constellation</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
    
};
    
export default Alarm;
