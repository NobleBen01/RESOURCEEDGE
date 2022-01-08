import Group19842 from '../images/Group 19842.svg';
import GroupTL from '../images/GroupT&L.svg';
import GroupAM from '../images/GroupAM.svg';
import DirectReports from '../images/Direct Reports.png';
import Hello from '../images/Hello.svg';
import image7 from '../images/image 7.png';
import image6 from '../images/image 6.png';
import image9 from '../images/image 9.png';
import image10 from '../images/image 10.png';
import formLogo from '../images/form-logo.svg';
import EM from '../images/EM.png';
import PM from '../images/PM.png';
import PTO from '../images/PTO.png';
import Vouchers from '../images/Vouchers.png';
import Payroll from '../images/Payroll.png';

import './Home.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const  Home = () => { 
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand" href="#">
        <img src={ formLogo } alt="Avatar" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li className="nav-item">
            <button type="button" class="btn btn-primary">Sign up</button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="container">
          <div className="row height">
            <div className="col-12 col-md-6 height d-flex align-items-center text-left">
              <div className="text d-flex align-items-center">
                <div className="home-text text-black height1">
                  <h6 className="sub-heading mb-2"></h6>
                  <h1 className="main-heading mb-0">Throw paperwork</h1>
                  <h1 className="main-heading mb-0">into the trash where</h1>
                  <h1 className="main-heading mb-0">it belongs.</h1>
                  <h5 className="heading mb-3">
                    Eliminate all the hassles involved in managing
                  </h5>
                  <h5 className="heading mb-3">
                    people operations by animating it
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="stats" className="stats">
        <h1>Human Resources</h1>

        <h6>Onboard new employees, manage the employee lifecycle</h6>
        <h6>and measure employee performance</h6>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="thumbnail">
                <div className="caption">
                <img src={PM} alt="Avatar" />
                  <h2>Performance Management</h2>
                  <p>
                    Manage and track employee performance with our easy-to-use
                    tools for goal setting, performance agreements and
                    performance reveiws.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="thumbnail">
                <div className="caption">
                <img src={EM} alt="Avatar" />
                  <h2>Employee Management</h2>
                  <p>
                    From Hiring & Onboarding to Retiring, the Resource Edge
                    Employee Management module eliminates all the complexities &
                    paperwork involved in managing your team.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="thumbnail">
                <div className="caption">     
                <img src={PTO} alt="Avatar" />            
                  <h2>Paid Time Off</h2>
                  <p>
                    Employees can request for paid time off, vacations, sick
                    leaves or education leavesand get approval all within
                    Resource Edge. HR managers can equally ensure compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={Group19842} alt="Avatar" />
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>Admin & Logistics</h1>
              <h6>
                Manage and track company assets as well as logistics for
                travelling employees.
              </h6>
            </div>
            <div className="col">
              <img src={GroupTL} alt="Avatar" />
              <h1>Travel & Logistics</h1>
              <h6>
                Make travel requests, get approvals, and have access to travel
                information.
              </h6>
            </div>
            <div className="col">
              <img src={GroupAM} alt="Avatar" />
              <h1>Asset Management</h1>
              <h6>
                Manage the acquisition, assignment, and disposition of assets
                seamlessly.
              </h6>
            </div>
          </div>
        </div>

        <img src={DirectReports} alt="Avatar" />

        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>Finance</h1>
              <h6>
                Generate invoices, track expenditure and manage complex payrolls
                for multiple teams and companies.
              </h6>
            </div>
            <div className="col">
            <img src={Vouchers} alt="Avatar" />
              <h1>RE Vouchers</h1>
              <h6>
                Track and manage expenditure for multiple teams across your
                organisation using Resource Edge Vouchers.
              </h6>
            </div>
            <div className="col">
            <img src={Payroll} alt="Avatar" />
              <h1>Payroll</h1>
              <h6>
                Our easy to use systems takes away the pain of managing complex
                payrolls for organisations of all sizes.
              </h6>
            </div>
          </div>
        </div>

        <img src={Hello} alt="Avatar" />

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="https://www.unn.edu.ng">
                <img src={image7} alt="Avatar" />
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="https://www.tenece.com">
              <img src={image6} alt="Avatar" />
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="https://www.privateestates.co.za">
              <img src={image9} alt="Avatar" />
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <a href="https://www.genesys.com">
              <img src={image10} alt="Avatar" />
              </a>
            </div>
          </div>
        </div>
      </section>

        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text">resource edge</h1>
                <h6 className="text">Throw paperwork into the trash</h6>
              </div>
              <div className="col-6">
                <h6 className="text">
                  Copyright @ Genesys DevStudio. All rights reserved
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
