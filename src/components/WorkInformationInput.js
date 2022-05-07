import React, { Component } from "react";
import DateInput from "./DateInput";
import TextInput from "./TextInput";
import TextBoxInput from "./TextBoxInput";
import CheckboxInput from "./CheckboxInput";
import uniqid from "uniqid";

class WorkInformationInput extends Component{
    constructor(props){
        super(props);
        const onChange=this.props.onChange;
        const id = uniqid();
        const workForm = 
        <form className="work-info-form" key={id}>
            <TextInput placeholder="Company name" label="Company:" onChange={onChange} field="company" id={id}/>
            <TextInput placeholder="Position/Title" label="Position:" onChange={onChange} field="position" id={id}/>
            <TextBoxInput placeholder="Describe your main tasks and responsibilities." label="Description:" onChange={onChange} field="description" id={id} />
            <DateInput label="Start Date:" onChange={onChange} field="startDate" id={id}/>
            <DateInput label="End Date:" onChange={onChange} field="endDate" id={id}/>
            <CheckboxInput label="Current Employer?" onChange={onChange} field="current" id={id} />
        </form>
        this.state = {
            sections: [{
                id: id,
                form: workForm,
            }]
        }
        this.props.onFormAdded(workForm, id);
    }

    addForm = () =>{
        const onChange=this.props.onChange;
        const id = uniqid();
        const workForm = 
        <form className="work-info-form" key={id}>
            <TextInput placeholder="Company name" label="Company:" onChange={onChange} field="company" id={id}/>
            <TextInput placeholder="Position/Title" label="Position:" onChange={onChange} field="position" id={id}/>
            <TextBoxInput placeholder="Describe your main tasks and responsibilities." label="Description:" onChange={onChange} field="description" id={id} />
            <DateInput label="Start Date:" onChange={onChange} field="startDate" id={id}/>
            <DateInput label="End Date:" onChange={onChange} field="endDate" id={id}/>
            <CheckboxInput label="Current Employer?" onChange={onChange} field="current" id={id} />
        </form>
        this.setState({
            sections: this.state.sections.concat(
                {
                    id: id,
                    form: workForm,
                }
            )
        })
        this.props.onFormAdded(workForm, id);
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
            <div className="work-information-input input-container">
                {this.state.sections.map((section) => section.form)}
                <button onClick={this.addForm}>Add Another</button>
                {this.state.sections.length > 1 && <button onClick={() => this.removeForm(this.state.sections[this.state.sections.length-1].id)}>Remove</button>}
            </div>
        )
    }
}

export default WorkInformationInput;