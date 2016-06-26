import React from 'react';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            userId: "user01"
        }
    }


    componentWillMount(){
        const self = this
        self.setState({userId: "user01"})
        console.log(this.state.userId);

    }

    componentDidMount() {

    if (this.state.userId === "user01" || session !== anyUserId) { // session hasn't been made yet
        const self = this
            setInterval(function() {
                fetch('http://localhost:3000/alarmResult')
                .then(function(response) {
                    return response.text()
                }).then(function(body) {
                   var lists = JSON.parse(body)
                   console.log(lists)
                   
                }).catch(function(ex) {
                    console.log('Error', ex)
                })
             }, 3000); 
            console.log("The user " + "[" + this.state.userId + "]" + " has been successfully logged in")
    } else {
        console.log("You are not Logged in")
    }
}



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