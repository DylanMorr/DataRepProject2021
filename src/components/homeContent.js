import React, { Component } from 'react';
import gmitLogo from './styling/gmitLogo.jpg';
import './styling/homeContent.css';

class HomeContent extends Component {
    render() {
        return (
            // create a main div with classname 'homeDiv' 
            <div className='homeDiv'>
                {/* Add a welcome message */}
                <h1>Welcome to the GMIT Hospital Records</h1>
                {/* Add a big GMIT logo to the screen */}
                <img src={gmitLogo} alt="Gmit Logo" />
            </div>
        ); // end of return
    } // end of render method
} // end of class

// mark HomeContent for export
export default HomeContent;