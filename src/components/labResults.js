import React from "react";
import LabItem from "./labItem";

class LabResults extends React.Component {
    render() {
        // create a function and map the lab items to labs 
        // setup a key using lab.PatientID
        return this.props.results.map((lab) => {
            // pass RefreshData down to labItem
            return <LabItem lab={lab} key={lab.PatientID} RefreshData={this.props.RefreshData}></LabItem>
        }); // end of return 
    } // end of render method
} // end of class

// mark LabResults for export
export default LabResults;