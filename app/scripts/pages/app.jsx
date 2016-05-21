import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
    render() {
        console.log();
        return (
            <div className="container">
                { this.props.location.pathname === '/' ? null : <Header />}

                <div className="content">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
};

export default App;