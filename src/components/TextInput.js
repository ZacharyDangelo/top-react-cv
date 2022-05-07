import React, { Component } from "react";


class TextInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const placeholder = this.props.placeholder;
        const label = this.props.label;
        const onChange = this.props.onChange;
        const field = this.props.field;

        return(
            <div className="text-input">
                <label>{label}</label>
                <input type="text" placeholder={placeholder} onChange={(e) => onChange(e, field)}></input>
            </div>
        )
    }
}

export default TextInput