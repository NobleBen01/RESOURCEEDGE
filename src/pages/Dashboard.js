// import leftcontent from '../src/images/left-content.svg'
import React from 'react'
import './Dashboard.css'

const Dashboard = () => {

    // when you login set true in local storage if true or false
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        {/* <a class="navbar-brand" href="#"><img src={leftcontent} alt=""/></a> */}

    </nav>

    <div id="dashMeet">
      <h1>Hello, </h1>
      <h5>Welcome and good to have you back.</h5>
    </div>

    <div id="labelDiv">
        <h3>Things to do</h3>
        <label class="label">
            <input type="checkbox"  name="remember"/> Upload your employee performance agreement
          <a href="#" style={{float: "right"}}>Begin</a>
        </label>
    </div>

      <div id="labelDiv">
          <label class="label">
            <input type="checkbox"  name="remember"/> Start Quarterly self review
            <a href="#" style={{float: "right"}}>Resume</a>
        </label>
    
        </div>
      </div>
    )
}

export default Dashboard
