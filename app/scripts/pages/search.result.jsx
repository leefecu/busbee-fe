import React from 'react';

class SearchResult extends React.Component {
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
                        <tr><a href="#">
                            <td>8874</td>
                            <td>Takapuna</td>
                            <td><img src="../images/content/stop_black.png" /></td>
                        </a></tr>
                        <tr>
                            <td>887</td>
                            <td>Britomart</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                        <tr>
                            <td>8874</td>
                            <td>Takapuna</td>
                            <td><img src="../images/content/stop_black.png" /></td>
                        </tr>
                        <tr>
                            <td>887</td>
                            <td>Britomart</td>
                            <td><img src="../images/content/bus_black.png" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
};
    
export default SearchResult;
