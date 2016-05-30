import React from 'react';


class onOffButton extends React.Component {



    render() {
        return (

            <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" defaultChecked={ this.props.alarmType === "Y" ? "true" : ""}  />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
            </div>
        )
    }
};

export default onOffButton;