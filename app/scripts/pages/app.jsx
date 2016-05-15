import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div className="content">
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
};

export default App;