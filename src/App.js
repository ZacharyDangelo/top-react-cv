import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import GeneralInformationInput from "./components/GeneralInformationInput";
import EducationInformationInput from "./components/EducationInformationInput";
import WorkInformationInput from "./components/WorkInformationInput";
import CVHeader from './components/CVHeader';
import InputSection from "./components/InputSection";
import CVEducationSection from "./components/CVEducationSection";
import CVWorkSection from "./components/CVWorkSection";

class App extends Component {
  constructor(){
    super();
    this.state ={
      generalInfo: {
        first: "",
        last: "",
        email: "",
        phone: "",
      },
      educationSections: [],
      workSections: [],
    };
  }

  handleGeneralInfoChange = (e, field) =>{
    switch(field){
      case "first":
        this.setState({
          generalInfo: {
            first: e.target.value,
            last: this.state.generalInfo.last,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
          }
        });
        break;
      case "last":
        this.setState({
          generalInfo: {
            first: this.state.generalInfo.first,
            last: e.target.value,
            email: this.state.generalInfo.email,
            phone: this.state.generalInfo.phone,
          }
        });
        break;
      case "phone":
        this.setState({
          generalInfo: {
            first: this.state.generalInfo.first,
            last: this.state.generalInfo.first,
            email: this.state.generalInfo.email,
            phone: e.target.value,
          }
        });
        break;
      case "email":
        this.setState({
          generalInfo: {
            first: this.state.generalInfo.first,
            last: this.state.generalInfo.first,
            email: e.target.value,
            phone: this.state.generalInfo.phone,
          }
        });
        break;
    }
  }

  handleEducationFormAdded = (form, id) =>{
    this.setState({
      educationSections: this.state.educationSections.concat({
        id: id,
        form: {
          school: "",
          program: "",
          startDate: "",
          endDate: "",
          graduated: false
        }
      })
    })
  }

  handleEducationFormRemoved = (id) =>{
    this.setState({
      educationSections: this.state.educationSections.filter((item) => item.id !== id),
    })
  }

  handleEducationInfoChange = (e, field, id) =>{
    let items = [...this.state.educationSections];
    let item = {...items.filter((section) => section.id === id)[0]};
    switch(field){
      case "school":
        item.form.school = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          educationSections: items,
        });
        break;
      case "program":
        item.form.program = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          educationSections: items,
        });
        break;
      case "startDate":
        item.form.startDate = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          educationSections: items,
        });
        break;
      case "endDate":
        item.form.endDate = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          educationSections: items,
        });
        break;
      case "graduated":
        item.form.current = e.target.checked;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          educationSections: items,
        });
        break;
    }
  }

  handleWorkFormAdded = (form, id) =>{
    this.setState({
      workSections: this.state.workSections.concat({
        id: id,
        form: {
          company: "",
          position: "",
          description: "",
          startDate: "",
          endDate: "",
          current: false,
        }
      })
    })
  }

  handleWorkFormRemoved = (id) =>{
    this.setState({
      workSections: this.state.workSections.filter((item) => item.id !== id),
    })
  }

  handleWorkInfoChange = (e, field, id) =>{
    let items = [...this.state.workSections];
    let item = {...items.filter((section) => section.id === id)[0]};
    switch(field){
      case "company":
        item.form.company = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
      case "position":
        item.form.position = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
      case "description":
        item.form.description = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
      case "startDate":
        item.form.startDate = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
      case "endDate":
        item.form.endDate = e.target.value;
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
      case "current":
        item.form.current = e.target.checked;
        console.log(e);
        items[items.indexOf(items.map((section) => section.id === id))] = item;
        this.setState({
          workSections: items,
        });
        break;
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
          <div className="content">
            <div className="input-section">
              <h2 className="section-header">General Information</h2>
              <GeneralInformationInput onChange={this.handleGeneralInfoChange} />
              <h2 className="section-header">Education Information</h2>
              <EducationInformationInput onFormAdded={this.handleEducationFormAdded} onFormRemoved={this.handleEducationFormRemoved} onChange={this.handleEducationInfoChange}/>
              <h2 className="section-header">Work Information</h2>
              <WorkInformationInput onFormAdded={this.handleWorkFormAdded} onFormRemoved={this.handleWorkFormRemoved} onChange={this.handleWorkInfoChange}/>
            </div>
            <div className="display-section">
              <CVHeader info={this.state.generalInfo} />
              <h2>Education</h2>
              <hr></hr>
              {this.state.educationSections.map((section) => <CVEducationSection key={section.id} info={section} />)}
              <h2>Employment</h2>
              <hr></hr>
              {this.state.workSections.map((section) => <CVWorkSection key={section.id} info={section} />)}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
