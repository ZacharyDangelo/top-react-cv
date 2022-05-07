import React, { Component } from "react";

class DateInput extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const label = this.props.label;
        return(
            <div className="date-input">
                <label>{label}</label>
                <input type="date"></input>
            </div>
        )
    }

}

export default DateInput;