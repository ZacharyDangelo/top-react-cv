import React, { Component } from "react";

class CVWorkSection extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const info = this.props.info.form;
        console.log(info);
        return(
            <div className="work-section">
                <h1>{info.company || "Company"}</h1>
                <h2>{info.position || "Position"}</h2>
                <p>{info.description || "Description"}</p>
                <p>{info.startDate || "Start Date"} - {info.endDate || "End Date"}</p>
                {info.current ? <h3>Current Employer</h3> : ""}
            </div>
        )
    }
}

export default CVWorkSection;