import React from 'react';


class onOffButton extends React.Component {
    // getChecked (checkedState) {
    //     console.log(checkedState);
    // }

    getChecked(alarmId) {
        console.log(alarmId);
    }


    render() {

            return (
                <div className="onoffswitch">
                <input type="checkbox" name="onoffswitch" 
                className="onoffswitch-checkbox" 
                id={ this.props.alarmId } 
                defaultChecked={ this.props.alarmType === "Y" ? "true" : ""}  
                onChange={ this.getChecked(this.props.alarmId) } />
               

                <label className="onoffswitch-label" htmlFor={ this.props.alarmId }>
                    <span className="onoffswitch-inner"></span>
                    <span className="onoffswitch-switch"></span>
                </label>
                </div>
            )
        }
};

export default onOffButton;