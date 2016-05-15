import React from 'react';

class Home extends React.Component {
    
    render() {
        return (
            <div className="main_con">
                <div className="main_logo"> 
                    <h1>Real time<br/>bus finder</h1>                 
                    <img src="/images/content/main_logo.png" /> 
                    <h2>auckland</h2>
                </div>
                <div className="main_search_title">
                    <img src="/images/content/bus_side.png" /> 
                    <p>Search Your Bus Information</p>
                </div>
                <div className="clear"></div>
                <div className="main_search">
                    <form> 
                    <input type="text" placeholder="Search..." /> 
                    <img src="/images/content/main_search.png" />               
                </form>
                </div>
            </div>
        );
    }
}

export default Home;