import React, { Component } from "react";

class CVEducationSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const info = this.props.info.form;
        return(
            <div className="education-section">
                <h2>Education</h2>
                <hr></hr>
                <h1>{info.school}</h1>
                <h2>{info.program}</h2>
                <p>{info.startDate} - {info.endDate}</p>
                {info.graduated ? <h3>Graduted</h3> : ""}
            </div>
        )
    }
}

export default CVEducationSection;