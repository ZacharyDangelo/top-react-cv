import React, { Component } from "react";


class TextBoxInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const placeholder = this.props.placeholder;
        const label = this.props.label;

        return(
            <div className="textbox-input">
                <label>{label}</label>
                <textarea  placeholder={placeholder}></textarea>
            </div>
        )
    }
}

export default TextBoxInput;