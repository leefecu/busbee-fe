import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
    componentWillMount(){
        
    }

    render() {
        return (
            <div className="container">
                { this.props.location.pathname === '/' ? null : <Header pathname={this.props.location.pathname} pathRouteName={this.props.routes[1].name}/>}

                <div className="content">
                    {this.props.children}
                </div>

                <Footer pathname={this.props.location.pathname} />
            </div>
        );
    }
};

export default App;