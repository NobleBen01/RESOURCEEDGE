import React,{useState, useEffect} from  'react';
import "./Login.css"

const Email = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [isEmailValid, setIsEmailValid] = useState(null);
 const [hideEmail, setHideEmail] = useState(false);

 useEffect(() => {
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  
	
		if (email.match(pattern)) {
			setIsEmailValid(true)
		}
 }, [email])

 const handleSubmit = (e) => {
	 console.log('dfd')
	 e.preventDefault();
		if(!isEmailValid) return;

		// hide the email field
		setHideEmail(true)

 }
		return (
				<div>
							<form id="form" method="post" onSubmit={handleSubmit}>
					 
					
					 <h1 className="formText1">Log in</h1>
					<h4 className="formText2">Access your resource edge account</h4>
						 {!hideEmail && <div>
							<label for="uname"><b>Email Address</b></label>
							<div className="inputBox">
									<input type="text" id="email" placeholder="Enter email" name="uname" required onChange={(e) => setEmail(e.Target.value)}/>
									<span id = "text"></span>
							</div>
						</div>}

						{hideEmail && <div>
							<label for="upwd"><b>Password</b></label>
							<div className="inputBox">
									<input type="password" id="password" placeholder="Enter password" name="uname" required onChange={(e) => setPassword(e.Target.value)}/>
									<span id = "text"></span>
							</div>
						</div>}
							
						{/* <label for="psw"><b>Password</b></label>
						 <input type="password" placeholder="Enter Password" name="psw" required /> */}
		
						<hr style={{width: '90%',textAlign: 'center',marginLeft: '10%', marginRight: '10%'}} />

						<button type="submit" disabled={!isEmailValid} ><a href="#">Login</a> </button>
		 <label>
			 <input type="checkbox" checked="checked" name="remember" /> Remember me
		 </label>
	 
 
	 <div style={{backgroundColor: "#f1f1f1"}}>
		 <span className="psw"><a href="#">Forgot password?</a></span>
	 </div>
		</form> 
				</div>
		)
}




export default Email