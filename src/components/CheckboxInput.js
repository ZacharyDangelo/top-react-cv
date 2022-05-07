import react, { Component } from "react";

class CheckboxInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const label = this.props.label;
        const onChange = this.props.onChange;
        const field = this.props.field;
        const id = this.props.id;
        return(
            <div className="checkbox-input">
                <label>{label}</label>
                <input type="checkbox" onChange={(e) => onChange(e, field, id)}></input>
            </div>
        )
    }

}

export default CheckboxInput;