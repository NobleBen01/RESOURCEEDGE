import React, {useState} from 'react'
import "./Login.css"
import Group43 from '../images/Group-43.svg'
import Group45 from '../images/Group 45.svg'
import formLogo from '../images/form-logo.svg'
import checkCircle from '../images/check-circle.svg'
import Email from './Email'
import validation from './Email'

const Login = (props) => {
  const [name, setName] = useState('');
    return (
      <>
        <div className="container">
          
             <div className="imgcontainer imgcontainer1">
                <img src={Group43} alt="Avatar" className="avatar" />
             </div>

             <div className="card" style={{width: "18rem"}}>
                <div className="card-body">

                  <div className="imgcontainer0">
                 <img src={formLogo} alt="Avatar" className="center" />
             </div>
                
               <Email />
              
          </div>
          </div>
        

            <div className="imgcontainer imgcontainer2">
             <img src={Group45} alt="Avatar" className="avatar" />
            </div>
                
        </div>
          
        {/* <div className="container">

      <div className="container">
  
        <div className="imgcontainer imgcontainer1">
          <img src={Group43} alt="Avatar" className="avatar" />
        </div>
  
  
        <div className="imgcontainer0">
          <img src={formLogo} alt="Avatar" className="center" />
        </div>
  
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <form action="action_page.php" method="post">
           
          
              <h1 className="formText1">Log in</h1>
              <h4 className="formText2">Access your resource edge account</h4>
              <label for="uname"><b>Email Address</b></label>
              <input type="text" placeholder="Enter email" name="uname" required />
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
             
              <hr style="width:90%;text-align:center;margin-left:10%;margin-right:10%" />
  
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
              </label>
            
          
            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
              <span className="psw"><a href="#">Forgot password?</a></span>
            </div>
             </form> */}


             {/* BREAK */}
  
             {/* <form action="action_page.php" method="post">
           
          
              <h1 className="formText1">Reset Password</h1>
              <h4 className="formText2">To enable us reset your password, enter your email below.</h4>
              <label for="uname"><b>Email Address</b></label>
              <input type="text" placeholder="Enter email" name="uname" required />
          
             
              <hr style="width:90%;text-align:center;margin-left:10%;margin-right:10%" />
  
              <button type="submit">Login</button>
            
            
          
            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
              <span className="psw"><a href="#">Back to login</a></span>
            </div>
             </form>
  
  
             <form action="action_page.php" method="post">
           
          
              <h1 className="formText1">Reset Password</h1>
  
              <img src={checkCircle} alt="Avatar" className="center" />
              <h4 className="formText2">A recovery email has been sent to your email address.</h4>
              
             
              <hr style="width:90%;text-align:center;margin-left:10%;margin-right:10%" />
  
            
            
          
            <div className="container" style= {{backgroundColor: "#f1f1f1"}}>
              <span className="psw"><a href="#">Back to login</a></span>
            </div>
             </form>
  
             <form action="action_page.php" method="post">
         
        
         <h1 className="formText1">Reset Password</h1>
         <h4 className="formText2">The password should have at leats 6 characters</h4>
         <label for="uname"><b>New password</b></label>
         <input type="text" placeholder="Enter password" name="uname" required/>
     
         <label for="psw"><b>Confirm password</b></label>
         <input type="password" placeholder="Confirm password" name="psw" required/>
        
         <hr style="width:90%;text-align:center;margin-left:5%;margin-right:10%"/>

         <button type="submit">Login</button>
         <label>
           <input type="checkbox" checked="checked" name="remember"/> Remember me
         </label>
       
     
       <div className="container" style={{backgroundColor:"#f1f1f1"}}>
         <span className="psw"><a href="#">Back to login</a></span>
       </div>
        </form>
       
              <form action="action_page.php" method="post">
           
          
              <h1 className="formText1">Reset Password</h1>
  
              <img src={checkCircle} alt="Avatar" className="center" />
              <h4 className="formText2">Your password has been changed successfully</h4>
              
             
              <hr style="width:90%;text-align:center;margin-left:10%;margin-right:10%" />
  
            
            
          
            <div className="container" style= {{backgroundColor: "#f1f1f1"}}>
              <span className="psw"><a href="#">Back to login</a></span>
            </div>
             </form> */}
  
              {/* BREAK */}
  
            {/* </div>
      </div>
      </div>
  
      <div className="imgcontainer imgcontainer2">
        <img src={Group45} alt="Avatar" className="avatar" />
      </div>
  
      </div>0- */}
      </>

    );
      
      
    
};

export default Login
