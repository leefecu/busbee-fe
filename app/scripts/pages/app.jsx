import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                { this.props.location.pathname === '/' ? null : <Header pathname={this.props.location.pathname} />}
                
                <div className="content">
                    {this.props.children}
                </div>

                <Footer pathname={this.props.location.pathname} />
            </div>
        );
    }
};

export default App;