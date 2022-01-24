import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const initialValues = {username : "", email:"", password:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
   // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value, })
   console.log(formValues);
  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!"; }
      else if(!regex.test(values.email)) {
        errors.email = "This email isn't a valid format"
      }
    
    if (!values.password) {
      errors.password = "Password is required!";
    }
      else if(values.password < 8){
        errors.password = "Password must be 8 character."
      }
    return errors;
  }

  return (
    <div className="container">
      <header>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </header>

			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Login Page</h3>
						<form onSubmit={handleSubmit} className="login-form">
		      		<div className="form-group">
		      			<input type="text" className="form-control rounded-left" name="username" placeholder="Username" value={formValues.username} onChange={handleChange}/>
		      		</div>
              <p className="p-errors">{formErrors.username}</p>
              <div className="form-group d-flex">
	              <input type="text" className="form-control rounded-left" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
	            </div>
              <p className="p-errors">{formErrors.email}</p>
	            <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" name="password" placeholder="Password" value={formValues.password} onChange={handleChange}/>
	            </div>
              <p className="p-errors">{formErrors.password}</p>
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Get Started</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
    </div>
  );
}

export default App;
