import React, { Component } from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import TextBoxInput from "./TextBoxInput";
import CheckboxInput from "./CheckboxInput";

class WorkInformationInput extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="work-information-input input-container">
                <form className="work-info-form">
                    <TextInput placeholder="Company name" label="Company:" />
                    <TextInput placeholder="Position/Title" label="Position:" />
                    <TextBoxInput placeholder="Describe your main tasks and responsibilities." label="Description:" />
                    <DateInput label="Start Date:" />
                    <DateInput label="End Date:" />
                    <CheckboxInput label="Current Employer?" />
                </form>
            </div>
        )
    }
}

export default WorkInformationInput;