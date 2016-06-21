import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {    
    componentDidMount(){
        //set resize function : when the browser is resized.
        window.addEventListener('resize', this.handleResize.bind(this));  
        this.handleResize();
    }

    handleResize(){
        //get window height size
        var windowH = window.innerHeight;
        //get footer height size
        var footerH = document.getElementById('ft').clientHeight;
        //get header height size : header size is 0px in Main(home) page
        var headerH = 0;
        if(this.props.location.pathname != '/'){
            //get header height size
            headerH = ReactDOM.findDOMNode(this).children[0].clientHeight;
        }
        //get content div height size : whole window height size - header and footer height size
        var contentH = windowH - (headerH+footerH);
        //set content height size
        document.getElementById("cont").style.height = contentH+"px"; 
        console.log("set content Height")
    }

    render() {
        return (
            <div className="container">
                { this.props.location.pathname === '/' ? null : <Header pathname={this.props.location.pathname} />}

                <div className="content" id="cont">
                    {this.props.children}
                </div>

                <Footer pathname={this.props.location.pathname} />
            </div>
        );
    }
};

export default App;