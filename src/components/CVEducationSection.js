import React, { Component } from "react";

class CVEducationSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const info = this.props.info.form;
        return(
            <div className="education-section">
                <h1>{info.school || "School"}</h1>
                <h2>{info.program || "Program"}</h2>
                <p>{info.startDate || "Start Date"} - {info.endDate || "End Date"}</p>
                {info.graduated ? <h3>Graduted</h3> : ""}
            </div>
        )
    }
}

export default CVEducationSection;