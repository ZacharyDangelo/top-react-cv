import React, { Component } from "react";
import TextInput from "./TextInput";
import DateInput from "./DateInput";
import CheckboxInput from "./CheckboxInput";
import uniqid from "uniqid";

class EducationInformationInput extends Component {
    
    constructor(props){
        super(props);
        const onChange=this.props.onChange;
        const id = uniqid();
        const educationForm = 
        <form className="education-form" key={id}>
            <TextInput placeholder="School name" label="School:" onChange={onChange} field="school" id={id} />
            <TextInput placeholder="Degree/Program name" label="Degree/Program:" onChange={onChange} field="program" id={id} />
            <DateInput label="Start Date:" onChange={onChange} field="startDate" id={id} />
            <DateInput label="End Date:" onChange={onChange} field="endDate" id={id}/>
            <CheckboxInput label="Graduated?" onChange={onChange} field="graduated" id={id}/>
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
        const onChange=this.props.onChange;
        const id = uniqid();
        const educationForm = 
        <form className="education-form" key={id}>
            <TextInput placeholder="School name" label="School:" onChange={onChange} field="school" id={id} />
            <TextInput placeholder="Degree/Program name" label="Degree/Program:" onChange={onChange} field="program" id={id} />
            <DateInput label="Start Date:" onChange={onChange} field="startDate" id={id} />
            <DateInput label="End Date:" onChange={onChange} field="endDate" id={id}/>
            <CheckboxInput label="Graduated?" onChange={onChange} field="graduated" id={id}/>
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

    removeForm = (id) =>{
        console.log(id);
        this.setState({
            sections: this.state.sections.filter((_,i) => i !== this.state.sections.length -1)
        })
        this.props.onFormRemoved(id);
    }

    render(){
        return(
            <div className="education-information-input input-container">
                {this.state.sections.map((section) => section.form)}
                <button onClick={this.addForm}>Add Another</button>
                {this.state.sections.length > 1 && <button onClick={() => this.removeForm(this.state.sections[this.state.sections.length-1].id)}>Remove</button>}
            </div>
        )
    }
}

export default EducationInformationInput;