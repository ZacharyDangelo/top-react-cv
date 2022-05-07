import React, { Component } from "react";

class CVHeader extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {first,last,email,phone} = this.props.info;
        return(
            <div className="cv-header">
                <h2>{first || "First"} {last || "Last"}</h2>
                <h3>{email || "Email@email.com"}</h3>
                <h4>{phone || "(555)-555-5555"}</h4>
            </div>
        )
    }
}

export default CVHeader;