import React, { Component } from "react";

import './App.css';
import Header from "./components/Header";
import GeneralInformationInput from "./components/GeneralInformationInput";
import EducationInformationInput from "./components/EducationInformationInput";
import WorkInformationInput from "./components/WorkInformationInput";
import CVHeader from './components/CVHeader';
import InputSection from "./components/InputSection";

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
        form: form,
      })
    })
    console.log(this.state.educationSections[0]);
  }

  handleEducationFormRemoved = (id) =>{
    
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
              <EducationInformationInput onFormAdded={this.handleEducationFormAdded} />
              <h2 className="section-header">Work Information</h2>
              <WorkInformationInput />
            </div>
            <div className="display-section">
              <CVHeader info={this.state.generalInfo} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
