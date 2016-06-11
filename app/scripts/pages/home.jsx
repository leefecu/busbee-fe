import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            searchVal: ""
        };

    }
    handleSubmit() {
        
    }
    handleSearchValue(e){
        const self = this;
        self.setState({searchVal: e.target.value});
    }
    render() {
        return (
            <div className="main-con">
                <div className="main_logo"> 
                    <h1>Real time<br/>bus finder</h1>                 
                    <img className="full-size" src="/images/content/main_logo.png" /> 
                    <h2>auckland</h2>
                </div>
                <div className="search-container">
                    <div className="row label-row">
                        <img className="bus-icon" src="/images/content/bus_side.png" /> 
                        <p>Search Your Bus Information</p>
                    </div>
                    <div className="row search-row">
                        <input className="search-input" type="text" placeholder="Search..." value= {this.state.searchVal} onChange={this.handleSearchValue.bind(this)}/> 
                        <Link to={`search/${this.state.searchVal}`}>
                        <img className="search-icon" src="/images/content/main_search.png"/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;