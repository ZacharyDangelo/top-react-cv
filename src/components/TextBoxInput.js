import React, { Component } from "react";


class TextBoxInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const placeholder = this.props.placeholder;
        const label = this.props.label;
        const onChange = this.props.onChange;
        const field = this.props.field;
        const id = this.props.id;
        return(
            <div className="textbox-input">
                <label>{label}</label>
                <textarea  placeholder={placeholder} onChange={(e) => onChange(e, field, id)}></textarea>
            </div>
        )
    }
}

export default TextBoxInput;