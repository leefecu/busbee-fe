var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header>
              <ul className="header-content">
                <li><a href="#back"><img className="back" src="../build/images/png/top/arrows_white.png" /></a></li>
                <li><input className="searchBar" type="text" /></li>
                <li><a href="#search"><img className="search" src="../build/images/png/top/search_white.png" /></a></li>
             </ul>

            </header>

        );
    }
    
});
    
module.exports = Header;


