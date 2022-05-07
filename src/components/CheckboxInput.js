import react, { Component } from "react";

class CheckboxInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const label = this.props.label;
        return(
            <div className="checkbox-input">
                <label>{label}</label>
                <input type="checkbox"></input>
            </div>
        )
    }

}

export default CheckboxInput;