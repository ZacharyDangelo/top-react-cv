import React, { Component } from "react";
import TextInput from "./TextInput"

class GeneralInformationInput extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const onChange=this.props.onChange;
        return(
            <div className="general-information-input input-container">
                <form>
                    <TextInput placeholder="First name" label="First Name:" onChange={onChange} field="first" />
                    <TextInput placeholder="Last name" label="Last Name:" onChange={onChange} field="last"/>
                    <TextInput placeholder="example@domain.com" label="Email" onChange={onChange} field="email"/>
                    <TextInput placeholder="(555)-555-5555" label="Phone #" onChange={onChange} field="phone"/>
                </form>
            </div>
        )
    }
}

export default GeneralInformationInput;