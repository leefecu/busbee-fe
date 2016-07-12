import React from 'react';


class onOffButton extends React.Component {

    getChecked(alarmId) {
         
     }

    getMessage(e) {
        
    /*  if(e === 'Y') {
            console.log(e);
            alert("alarm is On!");
        } else {
            console.log(e);
            alert("alarm is Off!");
        }   */
        
    }



    render() {


            return (
                <div className="onoffswitch">
                    <input type="checkbox" name="onoffswitch" 
                    className="onoffswitch-checkbox" 
                    id={ this.props.alarmId } 
                    defaultChecked={ this.props.alarmType === "Y" ? true : null}
                    onChange={ this.getChecked(this.props.alarmId) } 
                    onClick={ this.getMessage.bind(this, this.props.alarmType)} />
                  

                    <label className="onoffswitch-label" htmlFor={ this.props.alarmId }>
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                    </label>
                </div>
            )
        }
};

export default onOffButton;