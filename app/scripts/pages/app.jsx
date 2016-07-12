import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'



    class App extends React.Component {   

        constructor(props){
        super(props)

        this.state = {
            userId: "user01"
        }
    } 

        componentWillMount() {
        const self = this
        self.setState({userId: "user01"})
        console.log(this.state.userId);

    }
        componentDidMount(){

        if (this.state.userId === "user01") {
            const self = this
                setInterval(function() {
                    fetch('http://localhost:3000/alarmResult')
                    .then(function(response) {
                        return response.text()
                    }).then(function(body) {
                       var lists = JSON.parse(body)
                       console.log(lists[0])
                       console.log(navigator.vibrate(3000)) // Phone vibration supported by HTML5)
                    }).catch(function(ex) {
                        console.log('Error', ex)
                    })
                 }, 3000); 
                console.log("The user " + "[" + this.state.userId + "]" + " has been successfully logged in")
            } else {
                console.log("You are not Logged in")
            }


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
             var contentH = windowH - (headerHfooterH);
             //set content height size
             document.getElementById("cont").style.height = contentH+"px"; 
          }






    render() {
        return (
            <div className="container">
                { this.props.location.pathname === '/' ? null : <Header pathname={this.props.location.pathname} pathRouteName={this.props.routes[1].name}/>}

                <div className="content" id="cont">
                    {this.props.children}
                </div>

                <Footer pathname={this.props.location.pathname} />
            </div>
        );
    }
};

export default App;