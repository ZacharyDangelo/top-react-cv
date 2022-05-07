import React, { Component } from "react";


class InputSection extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const headerText = this.props.headerText;
        const sectionComponent = this.props.sectionComponent
        return(
            <div>
                <h2 className="section-header">{headerText}</h2>
                {sectionComponent}
            </div>
        )
    }
}

export default InputSection;