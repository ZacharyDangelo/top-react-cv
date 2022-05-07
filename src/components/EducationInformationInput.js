import React, { Component } from "react";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import CheckboxInput from "./CheckboxInput";
import uniqid from "uniqid";

class EducationInformationInput extends Component {
    
    constructor(props){
        super(props);
        const id = uniqid();
        const educationForm = 
        <form className="education-form" key={id}>
            <TextInput placeholder="School name" label="School:" />
            <TextInput placeholder="Degree/Program name" label="Degree/Program:" />
            <DateInput label="Start Date:" />
            <DateInput label="End Date:" />
            <CheckboxInput label="Graduated?" />
        </form>
        this.state = {
            sections: [{
                id: id,
                form: educationForm,
            }]
        }
        this.props.onFormAdded(educationForm, id);
    }

    addForm = () =>{
        const id = uniqid();
        const educationForm = 
        <form className="education-form" key={id}>
            <TextInput placeholder="School name" label="School:" />
            <TextInput placeholder="Degree/Program name" label="Degree/Program:" />
            <DateInput label="Start Date:" />
            <DateInput label="End Date:" />
            <CheckboxInput label="Graduated?" />
        </form>
        this.setState({
            sections: this.state.sections.concat(
                {
                    id: id,
                    form: educationForm,
                }
            )
        })
        this.props.onFormAdded(educationForm, id);
    }

    removeForm = () =>{
        this.setState({
            sections: this.state.sections.filter((_,i) => i !== this.state.sections.length -1)
        })
    }

    render(){
        return(
            <div className="education-information-input input-container">
                {this.state.sections.map((section) => section.form)}
                <button onClick={this.addForm}>Add Another</button>
                {this.state.sections.length > 1 && <button onClick={this.removeForm}>Remove</button>}
            </div>
        )
    }
}

export default EducationInformationInput;