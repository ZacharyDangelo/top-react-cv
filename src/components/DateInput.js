import React, { Component } from "react";

class DateInput extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const label = this.props.label;
        const onChange = this.props.onChange;
        const field = this.props.field;
        const id = this.props.id;
        return(
            <div className="date-input">
                <label>{label}</label>
                <input type="date" onChange={(e) => onChange(e, field, id)}></input>
            </div>
        )
    }

}

export default DateInput;