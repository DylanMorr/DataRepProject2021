import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ReadRecords from './components/readRecords';
import ReadLabResults from './components/readLabResults';
import NewRecord from './components/newRecord';
import HomeContent from './components/homeContent';
import EditRecord from './components/editRecord';
import NewLab from './components/newLab';
import EditLab from './components/editLab';
import './App.css';

class App extends Component {
    render() {
        return (
            // put router tags so we can use the switch statement
            <Router>
                {/* Create a div with className 'App' */}
                <div className="App">
                    {/* Create a navbar for navigating the webpage */}
                    <Navbar className="navBarStyle" variant="dark">
                        {/* Link all the component pages to the navbar and name accordingly */}
                        <Navbar.Brand href="/">GMIT Hospital Record Manager</Navbar.Brand>
                        <Nav>
                            <Nav.Link className='navLinks' href="/">Home</Nav.Link>
                            <Nav.Link className='navLinks' href="/records">Records</Nav.Link>
                            <Nav.Link className='navLinks' href="/labs-page">Labs Page</Nav.Link>
                            <Nav.Link className='navLinks' href="/new-record">New Record</Nav.Link>
                        </Nav>
                    </Navbar>

                    {/* Setup a switch statement to get the correct paths */}
                    <Switch>
                        {/* Sets path of file to / for the home page */}
                        <Route path="/" exact><HomeContent></HomeContent></Route>
                        {/* Sets path of file to /records for record page */}
                        <Route path="/records"><ReadRecords></ReadRecords></Route>
                        {/* Sets path of file to /labs-page to show lab page */}
                        <Route path="/labs-page"><ReadLabResults></ReadLabResults></Route>
                        {/* Sets path of file to /new-record to create new record page */}
                        <Route path="/new-record"><NewRecord></NewRecord></Route>
                        {/* Sets path of file to /edit-record/:id */}
                        <Route path={"/edit-record/:id"} component={EditRecord}></Route>
                        {/* Sets path of file to /new-lab/:id */}
                        <Route path={"/new-lab/:id"} component={NewLab}></Route>
                        {/* Sets path of file to /edit-lab/:id */}
                        <Route path={"/edit-lab/:id"} component={EditLab}></Route>
                    </Switch>
                </div>
            </Router>
        ); // end of return
    } // end of render method
} // end of class

// mark App for export
export default App;
