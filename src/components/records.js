import React, { Component } from 'react';
import RecordItem from './recordItem';

class Records extends Component {
    render() {
        // create a function and map the record items to records 
        // setup a key using record.PatientID
        return this.props.records.map((record) => {
            // pass RefreshData down to labItem
            return <RecordItem record={record} key={record.PatientID} RefreshData={this.props.RefreshData}></RecordItem>
        }) // end of return 
    } // end of render method
} // end of class

// mark Records for export
export default Records;